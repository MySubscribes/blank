let gulp = require('gulp'),
	browserSync = require('browser-sync');


gulp.task('js',  function () {
	return gulp.src([
			'app/js/common.js', // Всегда в конце
		])
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
	});
});


gulp.task('watch', ['js', 'browser-sync'], function () {
	gulp.watch(['app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);



