const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
// const minify = require('gulp-minify');
const concat = require('gulp-concat');

const scripts = (cb) => {
	src("./src/js/*.js")
		.pipe(concat('script-min.js'))
		// .pipe(minify())
		.pipe(dest("./docs/js"))
		.pipe(browsersync.reload({ stream: true }))
	cb();
};

exports.scripts = scripts;