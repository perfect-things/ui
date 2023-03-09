import gulp from 'gulp';
import { deleteAsync } from 'del';
import livereload from 'gulp-livereload';
import throught2 from 'through2';
import concat from 'gulp-concat';
// eslint-disable-next-line import/no-unresolved
import gulpEslint from 'gulp-eslint-new';
import gulpStylelint from '@ronilaukkarinen/gulp-stylelint';
import cleanCSS from 'gulp-clean-css';
import inject from 'gulp-inject-string';
import { createGulpEsbuild } from 'gulp-esbuild';
import sveltePlugin from 'esbuild-svelte';
import NodeResolve from '@esbuild-plugins/node-resolve';


const { series, parallel, src, dest } = gulp;
const noop = throught2.obj;
const DIST_PATH = 'docs/';
let isProd = false;

let gulpEsbuild = createGulpEsbuild({ incremental: false });


const setProd = (done) => { isProd = true; done(); };

export const cleanup = () => deleteAsync([DIST_PATH + '/*']);

export function html () {
	const comment = '<!-- scripts-go-here -->';
	const reloadScript = '<script src="http://localhost:35729/livereload.js?snipver=1"></script>';
	const analyticsScript = '<script defer data-domain="perfect-things.github.io" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';

	const script = isProd ? analyticsScript : reloadScript;
	return src('docs-src/index.html')
		.pipe(inject.replace(comment, script))
		.pipe(dest(DIST_PATH));
}

export function assets () {
	return src(['assets/*.png', 'assets/favicon.svg']).pipe(dest(DIST_PATH));
}


export function externals () {
	return src([
		'node_modules/zxcvbn/dist/zxcvbn.js*',
		'node_modules/prismjs/themes/prism-tomorrow.min.css',
	]).pipe(dest(DIST_PATH));
}

export function eslint () {
	return src(['{src,docs-src}/**/*.{js,svelte}', '*.js'])
		.pipe(gulpEslint({ fix: true }))   // Lint files, create fixes.
		.pipe(gulpEslint.fix())            // Fix files if necessary.
		.pipe(gulpEslint.format())
		.pipe(gulpEslint.results(results => {
			if (results.errorCount) console.log('\x07');    // beep
		}));
}


export function stylelint () {
	return src(['{src,docs-src}/**/*.css'])
		.pipe(gulpStylelint({
			// fix: true,
			reporters: [{ formatter: 'string', console: true }]
		}))
		.on('error', function () {
			console.log('\x07');    // beep
			this.emit('end');
		});
	// .pipe(dest('.'));	// causes infinite loop with watcher
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

	return src('./docs-src/index.js', { sourcemaps: !isProd })
		// @ts-ignore
		.pipe(gulpEsbuild(cfg))
		.pipe(dest(DIST_PATH, { sourcemaps: '.' }))
		.pipe(livereload());
}




export function libCSS () {
	return src('src/**/*.css', { sourcemaps: !isProd })
		.pipe(concat('ui.css'))
		.pipe(isProd ? cleanCSS() : noop())
		.pipe(dest(DIST_PATH, { sourcemaps: '.' }))
		.pipe(livereload());
}

export function docsCSS () {
	return src('docs-src/**/*.css', { sourcemaps: !isProd })
		.pipe(concat('docs.css'))
		.pipe(isProd ? cleanCSS() : noop())
		.pipe(dest(DIST_PATH, { sourcemaps: '.' }))
		.pipe(livereload());
}

function watchTask (done) {
	if (isProd) return done();

	gulpEsbuild = createGulpEsbuild({ incremental: true });
	livereload.listen();
	gulp.watch('src/**/*.css', series(libCSS, stylelint));
	gulp.watch('docs-src/**/*.css', series(docsCSS, stylelint));
	gulp.watch('docs-src/**/*.html', html);
	gulp.watch('{src,docs-src}/**/*.{js,svelte}', series(js, eslint));
}


export const lint = parallel(eslint, stylelint);

export const build = series(cleanup, parallel(js, libCSS, lint, docsCSS, html, assets, externals));

export const prod = series(setProd, build);
export const watch = watchTask;
export default series(build, watch);
