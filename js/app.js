window.TeamManager = {
  Models: {},
  Collections: {},
  Views: {},

	start: function(data) {
		var features = new TeamManager.Collections.Features(data.features);
		var employees = new TeamManager.Collections.Employees(data.employees);

	  var router = new TeamManager.Router();

	  router.on('route:home', function() {
	  	router.navigate('employees', {
	  		trigger: true,
	  		replace: true
	  	});
	  });

	  router.on('route:showEmployees', function() {
	  	var employeesView = new TeamManager.Views.Employees({
	  		collection: employees
	  	});
	  	$('.main-container').html(employeesView.render().$el);
	  });

	  router.on('route:showFeatures', function() {
	  	var featuresView = new TeamManager.Views.Features({
	  		collection: features
	  	});
  		$('.main-container').html(featuresView.render().$el);
	  });

	  Backbone.history.start();

	}
};