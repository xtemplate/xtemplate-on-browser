var gulpXTemplate = require('gulp-xtemplate');
var gulp = require('gulp');
var xtemplate = require('xtemplate').default;
gulp.task('default', function () {
  gulp.src('xtpl/**/*').pipe(gulpXTemplate({
    XTemplate: xtemplate,
    wrap: 'define',
    truncatePrefixLen: process.cwd().length,
    runtime: 'xtemplate-runtime',
  })).pipe(gulp.dest('build'));
});
