TeamManager.Router = Backbone.Router.extend({
	routes: {
		'': 'showEmployees',
		'team': 'showEmployees',
		'features': 'showFeatures'
	}
});