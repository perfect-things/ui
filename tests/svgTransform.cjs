const crypto = require('crypto');

module.exports = {
	getCacheKey (_fileData, filename) {
		return crypto.createHash('md5').update(filename).digest('hex');
	},
	process (src) {
		src = src.trim().replace(/\n/g, ' ');
		return { code: `module.exports = '${src}';` };
	}
};
