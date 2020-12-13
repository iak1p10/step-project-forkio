const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const styles = (cb) => {
	src("./src/styles/style.scss")
		.pipe(sass({outputStyle:"compressed"})
		.on('error',sass.logError))
		.pipe(autoprefixer({
			overrideBrowserslist:  ['last 2 versions'],
            cascade: false
		}))
		.pipe(concat('style-min.css'))
		.pipe(dest("./docs/css/"))
		.pipe(browsersync.reload({ stream: true }))
	cb()
};

exports.styles = styles;