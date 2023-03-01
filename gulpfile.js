import gulp from 'gulp';
import { deleteAsync } from 'del';
import livereload from 'gulp-livereload';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { default as throught2 } from 'through2';
import inlineSvg from 'rollup-plugin-inline-svg';
import concat from 'gulp-concat';
import gulpEslint from 'gulp-eslint-new';
import gulpStylelint from '@ffaubert/gulp-stylelint';
import cleanCSS from 'gulp-clean-css';
import rollup from 'gulp-rollup-plugin';
import inject from 'gulp-inject-string';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';


const { series, parallel, src, dest } = gulp;
const noop = throught2.obj;
const DIST_PATH = 'docs/';
let isProd = false;

const red = (msg) => '\x1B[31m' + msg + '\x1B[39m';
const setProd = (done) => { isProd = true; done(); };

export const cleanup = () => deleteAsync([DIST_PATH + '/*']);

export function html () {
	const comment = '<!-- scripts-go-here -->';
	const reloadScript = '<script src="http://localhost:35729/livereload.js?snipver=1"></script>';
	const analyticsScript = '<script async defer data-website-id="f02a9b98-566c-480e-9f83-27640a4b8f9f" src="https://umami.borychowski.net/umami.js"></script>' +
		'<script defer data-domain="perfect-things.github.io" src="https://plausible.borychowski.net/js/script.hash.outbound-links.js"></script>';

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
	return src(['{src,docs-src}/**/*.{js,svelte,ts}', '*.js'])
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
	return src('./docs-src/index.ts', { sourcemaps: !isProd })
		.pipe(rollup({
			onwarn: (err) => {
				if (/eval/.test(err)) return;
				if (/A11y/.test(err)) return;
				if (/typescript/.test(err)) {
					const msg = red('\nERROR: ' + err.message.replace('@rollup/plugin-typescript ', '')) +
						`\n${err.loc.file}:${err.loc.line}:${err.loc.column} ${err.frame}`;
					return console.error('\x07', msg);
				}
				console.error('\x07', red('\nERROR: ' + err.message + '\n'));
			},
			plugins: [
				resolve({
					browser: true,
					extensions: ['.mjs', '.js', '.svelte', '.ts'],
					dedupe: ['svelte']
				}),
				inlineSvg({ include: ['src/**/*.svg'] }),
				svelte({
					preprocess: sveltePreprocess(),
					emitCss: false,
					compilerOptions: { dev: !isProd }
				}),
				typescript({ sourceMap: !isProd }),
				isProd && terser()
			],
		}, {
			file: 'docs.js',
			format: 'esm',
		}))
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
	livereload.listen();
	gulp.watch('src/**/*.css', series(libCSS, stylelint));
	gulp.watch('docs-src/**/*.css', series(docsCSS, stylelint));
	gulp.watch('docs-src/**/*.html', html);
	gulp.watch('{src,docs-src}/**/*.{js,svelte,ts}', series(js, eslint));
}


export const lint = parallel(eslint, stylelint);

const _build = parallel(lint, js, libCSS, docsCSS, html, assets, externals);
export const build = series(cleanup, _build);
export const prod = series(setProd, build);
export const watch = watchTask;
export default series(build, watch);
