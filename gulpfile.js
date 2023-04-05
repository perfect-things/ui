import { createGulpEsbuild } from 'gulp-esbuild';
import { default as throught2 } from 'through2';
import { deleteAsync } from 'del';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import gulp from 'gulp';
// eslint-disable-next-line import/no-unresolved
import gulpEslint from 'gulp-eslint-new';
import gulpStylelint from '@ronilaukkarinen/gulp-stylelint';
import inject from 'gulp-inject-string';
import livereload from 'gulp-livereload';
import NodeResolve from '@esbuild-plugins/node-resolve';
import server from 'gulp-webserver';
import sveltePlugin from 'esbuild-svelte';


const { series, parallel, src, dest, watch } = gulp;
const noop = throught2.obj;
let isProd = false;
let gulpEsbuild = createGulpEsbuild({ incremental: false });

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
	ASSETS: ['assets/*.png', 'assets/favicon.svg'],
	EXTERNAL: [
		'node_modules/zxcvbn/dist/zxcvbn.js*',
		'node_modules/prismjs/themes/prism-tomorrow.min.css',
	],
	DIST: 'docs/',
};


export function html () {
	const comment = '<!-- scripts-go-here -->';
	const reloadScript = '<script src="http://localhost:35729/livereload.js?snipver=1"></script>';
	const analyticsScript = '<script defer data-domain="perfect-things.github.io" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';

	const script = isProd ? analyticsScript : reloadScript;
	return src(PATHS.HTML)
		.pipe(inject.replace(comment, script))
		.pipe(dest(PATHS.DIST));
}


export function assets () {
	return src(PATHS.ASSETS).pipe(dest(PATHS.DIST));
}


export function externals () {
	return src(PATHS.EXTERNAL).pipe(dest(PATHS.DIST));
}


export function eslint () {
	return src(PATHS.JS.LINT)
		.pipe(gulpEslint({ fix: true }))   // Lint files, create fixes.
		.pipe(gulpEslint.fix())            // Fix files if necessary.
		.pipe(gulpEslint.format())
		.pipe(gulpEslint.results(results => {
			if (results.errorCount) console.log('\x07');    // beep
		}));
}


export function stylelint () {
	return src(PATHS.CSS.LINT)
		.pipe(gulpStylelint({ reporters: [{ formatter: 'string', console: true }] }))
		.on('error', function () {
			console.log('\x07');    // beep
			this.emit('end');
		});
}


export function js () {
	const cfg = {
		outfile: 'docs.js',
		mainFields: ['svelte', 'browser', 'module', 'main'],
		bundle: true,
		minify: isProd,
		sourcemap: !isProd,
		loader: { '.svg': 'text' },
		logLevel: 'warning',
		// https://esbuild.github.io/api/#log-override
		logOverride: { 'direct-eval': 'silent' },
		legalComments: 'none',
		format: 'esm',
		treeShaking: true,
		color: true,
		plugins: [
			sveltePlugin({ compilerOptions: { dev: !isProd, css: false } }),
			// @ts-ignore
			NodeResolve.default({ extensions: ['.js', '.svelte'] }),
		],
	};

	return src(PATHS.JS.INPUT, { sourcemaps: !isProd })
		// @ts-ignore
		.pipe(gulpEsbuild(cfg))
		.pipe(dest(PATHS.DIST, { sourcemaps: '.' }))
		.pipe(livereload());
}



export function libCSS () {
	return src(PATHS.CSS.LIB.INPUT, { sourcemaps: !isProd })
		.pipe(concat(PATHS.CSS.LIB.OUT))
		.pipe(isProd ? cleanCSS() : noop())
		.pipe(dest(PATHS.DIST, { sourcemaps: '.' }))
		.pipe(livereload());
}


export function docsCSS () {
	return src(PATHS.CSS.DOCS.INPUT, { sourcemaps: !isProd })
		.pipe(concat(PATHS.CSS.DOCS.OUT))
		.pipe(isProd ? cleanCSS() : noop())
		.pipe(dest(PATHS.DIST, { sourcemaps: '.' }))
		.pipe(livereload());
}


function watchTask (done) {
	if (isProd) return done();
	livereload.listen();
	gulpEsbuild = createGulpEsbuild({ incremental: true });
	watch(PATHS.CSS.LIB.INPUT, series(libCSS, stylelint));
	watch(PATHS.CSS.DOCS.INPUT, series(docsCSS, stylelint));
	watch(PATHS.HTML, html);
	watch(PATHS.JS.LINT[0], series(js, eslint));
}


function serveTask () {
	return src(PATHS.DIST).pipe(server({ livereload: false, open: true, port: 3123, }));
}


export const lint = parallel(eslint, stylelint);
export const build = series(cleanup, parallel(js, libCSS, lint, docsCSS, html, assets, externals));
export const prod = series(setProd, build);
export default parallel(watchTask, series(build, serveTask));
