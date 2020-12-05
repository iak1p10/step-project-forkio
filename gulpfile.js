const { series,task, parallel } = require("gulp");
const { clean } = require("./gulp-tasks/clean");
const { styles } = require("./gulp-tasks/style");
const { scripts } = require("./gulp-tasks/script");
const { images } = require("./gulp-tasks/img");

task("build",series(clean,scripts,styles,images));

const { serv } = require("./gulp-tasks/serv");
const { watch } = require("./gulp-tasks/watch");

task("dev",parallel(watch,serv));



