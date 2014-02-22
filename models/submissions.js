var submissions = [
	{
		name: 'Arvind',
		url: 'isuck@node.js',
		title: 'My Video',
		description: 'Test'
	},
];

module.exports = {
	findAll: function() {
		return submissions.slice();
	},
};