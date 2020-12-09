const browserSync = require("browser-sync").create();

const serv = () => {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});
};
exports.browsersync = browserSync;
exports.serv = serv;