const del = require('del');
const clean = (cb) => {
	del.sync('./docs/*');
	cb();
};
exports.clean = clean;
