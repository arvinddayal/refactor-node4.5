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
	createEntry: function(name, url, title, description) {
		submissions.push(name, url, title, description);
	}
};