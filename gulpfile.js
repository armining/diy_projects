// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');

gulp.task('connect-test', function () {
    connect.server({
        root: 'app/',
        port: 8888,
        middleware: function(connect) {
            return [
                connect().use('/bower_components', connect.static('bower_components'))
            ];
        }
    });
});

gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        port: 8888
    });
});