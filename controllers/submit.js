var submissions = require('../models/submissions.js');

module.exports = {
	index: function (req, res) {
		res.render('test', {
			title: 'Scuba Diving Video Submissions',
			allSubmissions: submissions.findAll()
		});
	}
};