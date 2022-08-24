import gulp from 'gulp';
import { deleteAsync } from 'del';
import livereload from 'gulp-livereload';
import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { default as throught2 } from 'through2';
import inlineSvg from 'rollup-plugin-inline-svg';
import sourcemap from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import gulpEslint from 'gulp-eslint-new';
import gulpStylelint from '@ffaubert/gulp-stylelint';
import cleanCSS from 'gulp-clean-css';
import rollup from 'gulp-rollup-plugin';

const { series, parallel, src, dest, watch } = gulp;
const noop = throught2.obj;
const DIST_PATH = 'dist/';
let isProd = false;

const setProd = (done) => { isProd = true; done(); };

export const cleanup = () => deleteAsync([DIST_PATH + '/*']);

export function html () {
	return src('docs/index.html').pipe(dest(DIST_PATH));
}

export function eslint () {
	return src(['{src,docs}/**/*.{js,svelte}', '*.js'])
		.pipe(gulpEslint())
		.pipe(gulpEslint.format())
		.pipe(gulpEslint.results(results => {
			if (results.errorCount) console.log('\x07');    // beep
		}));
}


export function stylelint () {
	return src(['{src,docs}/**/*.css'])
		.pipe(gulpStylelint({ reporters: [{ formatter: 'string', console: true}] }))
		.on('error', function () {
			console.log('\x07');    // beep
			this.emit('end');
		});
}


export function js () {
	return src('./docs/index.js')
		.pipe(isProd ? noop() : sourcemap.init())
		.pipe(rollup({
			plugins: [
				nodeResolve({
					extensions: ['.mjs', '.js', '.svelte'],
					dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
				}),
				inlineSvg({ include: ['src/**/*.svg'] }),
				svelte({ compilerOptions: { dev: !isProd, css: false }}),
				isProd && terser()
			],
		}, {
			file: 'docs.js',
			format: 'esm',
		}))
		.pipe(isProd ? noop() : sourcemap.write(''))
		.pipe(dest(DIST_PATH))
		.pipe(livereload());
}




export function libCSS () {
	return src('src/**/*.css')
		.pipe(isProd ? noop() : sourcemap.init())
		.pipe(concat('ui.css'))
		.pipe(isProd ? noop() : sourcemap.write())
		.pipe(isProd ? cleanCSS() : noop())
		.pipe(dest(DIST_PATH))
		.pipe(livereload());
}

export function docsCSS () {
	return src('docs/**/*.css')
		.pipe(isProd ? noop() : sourcemap.init())
		.pipe(concat('docs.css'))
		.pipe(isProd ? noop() : sourcemap.write())
		.pipe(isProd ? cleanCSS() : noop())
		.pipe(dest(DIST_PATH))
		.pipe(livereload());
}

function watchTask (done) {
	if (isProd) return done();
	livereload.listen();
	watch('src/**/*.css', series(libCSS, stylelint));
	watch('docs/**/*.css', series(docsCSS, stylelint));
	watch('{src,docs}/**/*.{js,svelte}', series(js, eslint));

}


export const lint = parallel(eslint, stylelint);

const _build = parallel(eslint, stylelint, js, libCSS, docsCSS, html);
export const build = series(cleanup, _build);
export const prod = series(setProd, build);

export default series(build, watchTask);
