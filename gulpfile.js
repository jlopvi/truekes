const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const condicionals = require('postcss-conditionals');
const mixins = require('postcss-mixins');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const browserSync = require('browser-sync').create();

gulp.task('pug',() => {
	gulp.src('src/views/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('dist/'))
});

gulp.task('postcss', () => {
	var processors = [
		atImport,
		mixins,
		condicionals,
		autoprefixer,
		nested,
		cssnext

	]

	gulp.src('src/views/*.css')
		.pipe(plumber())
		.pipe(postcss(processors))
		.pipe(gulp.dest('dist/css/'))
})

gulp.task('serve', () => {
	browserSync.init({
            injectChanges: true,
            notify: true,
            server:  "./dist/"
        })


	gulp.watch('src/views/**/*.pug', ['pug']);
	gulp.watch('src/views/**/*.css', ['postcss']);
	gulp.watch(['dist/**/*.html','dist/**/*.css', 'dist/**/*.js' ]).on('change', browserSync.reload);

});


gulp.task('default', ['serve']);
