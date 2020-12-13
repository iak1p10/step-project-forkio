const {src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
 
const images = (cb) => {
    src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
    src('./src/img/*/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'))
    cb();
};

exports.images = images;

