var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync  = require('browser-sync')

gulp.task('sass', function(){
	gulp.src('./assets/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'))
		.pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() {
	browserSync({
		server: {baseDir: './'},
		notify: false
	})
})

gulp.task('default', ['browser-sync'], function(){
	gulp.watch('./assets/scss/*.scss', ['sass']);
	gulp.watch('./src/*.html', browserSync.reload);
	gulp.watch('./assets/js/**/*.js', browserSync.reload);
})
