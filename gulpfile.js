// import { NodeResolvePlugin as NodeResolve } from '@esbuild-plugins/node-resolve';
import { createGulpEsbuild } from 'gulp-esbuild';
import { deleteAsync } from 'del';
import cache from 'gulp-cached';
import cleanCSS from 'gulp-clean-css';
import clear from 'screen-clear';
import concat from 'gulp-concat';
import fs from 'fs';
import gulp from 'gulp';
import gulpEslint from 'gulp-eslint-new';
import gulpStylelint from 'gulp-stylelint-esm';
import gulpif from 'gulp-if';
import inject from 'gulp-inject-string';
import livereload from 'gulp-livereload';
import size from 'gulp-size';
import stylelintFormatter from 'stylelint-formatter-pretty';
import server from 'gulp-webserver';
import sveltePlugin from 'esbuild-svelte';


const { series, parallel, src, dest, watch } = gulp;

let isProd = false;
let gulpEsbuild = createGulpEsbuild({ incremental: false });

const clrscr = (done) => { clear(); done(); };
const setProd = (done) => { isProd = true; done(); };
const cleanup = () => deleteAsync([PATHS.DIST + '/*']);


const PATHS = {
	HTML: 'docs-src/index.html',
	JS: {
		INPUT: './docs-src/index.js',
		OUT: 'index.js',
		LINT: ['{src,docs-src}/**/*.{js,svelte}', '*.js']
	},
	CSS: {
		LIB: { INPUT: 'src/**/*.css', OUT: 'ui.css' },
		DOCS: { INPUT: 'docs-src/**/*.css', OUT: 'docs.css' },
		LINT: ['{src,docs-src}/**/*.css']
	},
	ASSETS: ['assets/*.png', 'assets/*.svg', 'assets/CNAME', 'assets/*.woff*'],
	EXTERNAL: [
		'node_modules/zxcvbn/dist/zxcvbn.js*',
		'node_modules/prismjs/themes/prism-tomorrow.min.css',
	],
	DIST: 'docs/',
};


function getVersion () {
	const pkg = fs.readFileSync('./package.json', 'utf8');
	let json;
	try { json = JSON.parse(pkg); }
	catch { json = {}; }
	return json.version || '';
}


export function html () {
	const comment = '<!-- scripts-go-here -->';
	const reloadScript = '<script src="http://localhost:35729/livereload.js?snipver=1"></script>';
	const analyticsScript = '<script defer data-domain="ui.perfectthings.dev" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';

	let script = isProd ? analyticsScript : reloadScript;
	const version = getVersion();
	script += `\n\t<script>window.UI_VERSION='${version}';</script>`;
	return src(PATHS.HTML, { encoding: false })
		.pipe(inject.replace(comment, script))
		.pipe(dest(PATHS.DIST));
}


export function assets () {
	return src(PATHS.ASSETS, { encoding: false }).pipe(dest(PATHS.DIST));
}


export function externals () {
	return src(PATHS.EXTERNAL, { encoding: false }).pipe(dest(PATHS.DIST));
}


export function eslint () {
	return src(PATHS.JS.LINT)
		.pipe(gulpEslint({ fix: true }))   // Lint files, create fixes.
		.pipe(gulpEslint.fix())            // Fix files if necessary.
		.pipe(gulpEslint.format('pretty'))
		.pipe(gulpEslint.results(results => {
			if (results.errorCount) console.log('\x07');    // beep
		}));
}


export function stylelint () {
	return src(PATHS.CSS.LINT)
		.pipe(cache('stylelint'))
		.pipe(gulpStylelint({ reporters: [{ formatter: stylelintFormatter, console: true }] }));
}


export function js (done) {
	const cfg = {
		outfile: 'docs.js',
		mainFields: ['svelte', 'browser', 'module', 'main'],
		bundle: true,
		write: false,
		minify: isProd,
		sourcemap: !isProd,
		logLevel: 'info',
		// https://esbuild.github.io/api/#log-override
		logOverride: { 'direct-eval': 'silent' },
		legalComments: 'none',
		format: 'esm',
		treeShaking: true,
		color: true,
		plugins: [
			sveltePlugin({ compilerOptions: { dev: !isProd, css: 'external' } }),
			// NodeResolve({ extensions: ['.js', '.svelte'] }),
		],
	};

	return src(PATHS.JS.INPUT, { sourcemaps: !isProd })
		.pipe(gulpEsbuild(cfg))
		.on('error', () => done())
		.pipe(size({ title: ' JS', showFiles: true, showTotal: false, }))
		.pipe(dest(PATHS.DIST, { sourcemaps: '.' }))
		.pipe(livereload());
}


export function libCSS () {
	return src(PATHS.CSS.LIB.INPUT, { sourcemaps: !isProd })
		.pipe(concat(PATHS.CSS.LIB.OUT))
		.pipe(gulpif(isProd, cleanCSS()))
		.pipe(size({ title: 'lib CSS', showFiles: true, showTotal: false, }))
		.pipe(dest(PATHS.DIST, { sourcemaps: '.' }))
		.pipe(livereload());
}


export function docsCSS () {
	return src(PATHS.CSS.DOCS.INPUT, { sourcemaps: !isProd })
		.pipe(concat(PATHS.CSS.DOCS.OUT))
		.pipe(gulpif(isProd, cleanCSS()))
		.pipe(size({ title: 'docs CSS', showFiles: true, showTotal: false, }))
		.pipe(dest(PATHS.DIST, { sourcemaps: '.' }))
		.pipe(livereload());
}


function watchTask (done) {
	if (isProd) return done();
	livereload.listen({ quiet: true });
	gulpEsbuild = createGulpEsbuild({ incremental: true });

	watch(PATHS.HTML, html);
	watch(PATHS.CSS.LIB.INPUT, series(clrscr, libCSS, stylelint));
	watch(PATHS.CSS.DOCS.INPUT, series(clrscr, docsCSS, stylelint));
	watch(PATHS.JS.LINT[0], series(clrscr, js, eslint));
}


function serveTask () {
	return src(PATHS.DIST).pipe(server({ livereload: false, open: true, port: 3123, }));
}


export const lint = parallel(eslint, stylelint);
export const build = series(cleanup, clrscr, parallel(js, libCSS, lint, docsCSS, html, assets, externals));
export const prod = series(setProd, build);
export default parallel(watchTask, series(build, serveTask));
