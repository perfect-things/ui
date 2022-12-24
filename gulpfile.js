import gulp from 'gulp';
import { deleteAsync } from 'del';
import livereload from 'gulp-livereload';
import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { default as throught2 } from 'through2';
import inlineSvg from 'rollup-plugin-inline-svg';
import concat from 'gulp-concat';
import gulpEslint from 'gulp-eslint-new';
import gulpStylelint from '@ffaubert/gulp-stylelint';
import cleanCSS from 'gulp-clean-css';
import rollup from 'gulp-rollup-plugin';

const { series, parallel, src, dest, watch } = gulp;
const noop = throught2.obj;
const DIST_PATH = 'docs/';
let isProd = false;

const red = (msg) => '\x1B[31m' + msg + '\x1B[39m';
const setProd = (done) => { isProd = true; done(); };

export const cleanup = () => deleteAsync([DIST_PATH + '/*']);

export function html () {
	return src('docs-src/index.html').pipe(dest(DIST_PATH));
}

export function externals () {
	return src('node_modules/zxcvbn/dist/zxcvbn.js*').pipe(dest(DIST_PATH));
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
	// .pipe(dest('.'));
}


export function js () {
	return src('./docs-src/index.js', { sourcemaps: !isProd })
		.pipe(rollup({
			onwarn: (err) => {
				if (/eval/.test(err)) return;
				if (/A11y/.test(err)) return;
				console.error('\x07', red('\nERROR: ' + err.message + '\n'));
			},
			plugins: [
				nodeResolve({
					extensions: ['.mjs', '.js', '.svelte'],
					dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
				}),
				inlineSvg({ include: ['src/**/*.svg'] }),
				svelte({ compilerOptions: { dev: !isProd, css: false } }),
				isProd && terser()
			],
		}, {
			file: 'docs.js',
			format: 'esm'
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
	watch('src/**/*.css', series(libCSS, stylelint));
	watch('docs-src/**/*.css', series(docsCSS, stylelint));
	watch('{src,docs-src}/**/*.{js,svelte}', series(js, eslint));

}


export const lint = parallel(eslint, stylelint);

const _build = parallel(eslint, stylelint, js, libCSS, docsCSS, html, externals);
export const build = series(cleanup, _build);
export const prod = series(setProd, build);

export default series(build, watchTask);
