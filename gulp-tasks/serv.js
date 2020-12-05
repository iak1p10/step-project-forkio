const browserSync = require("browser-sync").create();

const serv = () => {
	browserSync.init({
		server: {
			baseDir: "./",
		},
		browser: "chrome",
	});
};
exports.browsersync = browserSync;
exports.serv = serv;