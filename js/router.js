TeamManager.Router = Backbone.Router.extend({
	routes: {
		'': 'showFeatures',
		'team': 'showEmployees',
		'features': 'showFeatures'
	}
});