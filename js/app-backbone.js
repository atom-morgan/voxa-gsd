var FeaturesList = Backbone.View.extend({
	el: '.page',
	render: function () {
		this.$el.html('HOPE THIS WORKS');
	}
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'features'
	}
});

var featuresList = new FeaturesList();

var router = new Router();
router.on('route:features', function() {
	featuresList.render();
});

Backbone.history.start();