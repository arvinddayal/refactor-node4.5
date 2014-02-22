var destinations = require('../models/submissions.js');

module.exports = {
	index: function (req, res) {
		res.render('home', {
			title: 'Scuba Diving Video Contest',
		});
	}
};