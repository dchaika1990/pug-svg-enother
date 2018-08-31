var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

var config = {
    shape: {
        dimension: {         // Set maximum dimensions
            maxWidth: 500,
            maxHeight: 500
        },
        spacing: {         // Add padding
            padding: 0
        }
    },
    mode: {
        symbol: {
            dest : '.'
        }
    }
};

gulp.task('svg-sprite', function (cb) {
    return gulp.src('www/svg-separate/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('www/sprites'));
});