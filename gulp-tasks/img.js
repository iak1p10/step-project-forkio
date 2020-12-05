const {src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
 
const images = () => (
    src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'))
);

exports.images = images;

