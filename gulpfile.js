import gulp from 'gulp';
import del from 'del';
import livereload from 'gulp-livereload';
import source from 'vinyl-source-stream';
import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { default as throught2 } from 'through2';
import inlineSvg from 'rollup-plugin-inline-svg';
import sourcemap from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import gulpEslint from 'gulp-eslint-new';
import stream from 'stream';
import * as rollup from 'rollup';
import gulpStylelint from '@ffaubert/gulp-stylelint';
import cleanCSS from 'gulp-clean-css';

const { series, parallel, src, dest, watch } = gulp;
const noop = throught2.obj;
const DIST_PATH = 'dist/';
let isProd = false;

const setProd = (done) => { isProd = true; done(); };

export function cleanup () {
	return del([DIST_PATH + '/*']);
}

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

let rollupCache;
function rollupBuild (inputOptions = {}, outputOptions = {}) {
	const readable = new stream.Readable();
	readable._read = function () { };
	inputOptions.cache = rollupCache;
	rollup
		.rollup(inputOptions)
		.then(bundle => {
			rollupCache = bundle.cache;
			return bundle.generate(outputOptions);
		})
		.then(out => {
			if (!out.code) out = out.output[0];
			readable.push(out.code);
			if (outputOptions.output.sourcemap) {
				readable.push('\n//# sourceMappingURL=');
				readable.push(out.map.toUrl());
			}
			readable.push(null);
		})
		.catch(error => setTimeout(() => readable.emit('error', error)));
	return readable;
}

export function js () {
	const inputOptions = {
		input: './docs/index.js',
		plugins: [
			nodeResolve({
				extensions: ['.mjs', '.js', '.svelte'],
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			inlineSvg({ include: ['src/**/*.svg'] }),
			svelte({ compilerOptions: { dev: !isProd, css: false }}),
			isProd && terser()
		]
	};
	const outputOptions = {output: {
		name: 'docs.js', format: 'esm', sourcemap: !isProd
	}};
	return rollupBuild(inputOptions, outputOptions)
		.pipe(source('docs.js'))	// will become the output file
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
