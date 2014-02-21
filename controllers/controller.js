var destinations = require('../models/main.js');

module.exports = {
	index: function (req, res) {
		res.render('index', {
			title: 'Best Scuba Diving Video Contest',
		});
	}
};