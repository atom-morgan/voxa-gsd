window.TeamManager = {
  Models: {},
  Collections: {},
  Views: {},

	start: function(data) {
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

	  Backbone.history.start();

	}
};

// var directory = {

//   views: {},

//   models: {},

//   loadTemplates: function(views, callback) {

//     var deferreds = [];

//     $.each(views, function(index, view) {
//       if (directory[view]) {
//         deferreds.push($.get('templates/' + view + '.html', function(data) {
//             directory[view].prototype.template = _.template(data);
//         }, 'html'));
//       } else {
//           alert(view + " not found");
//       }
//     });

//     $.when.apply(null, deferreds).done(callback);
//   }

// };

// directory.Router = Backbone.Router.extend({

//   routes: {
//     // A route exists for /features but I put in root to show the FeaturesView on a direct page load
//     "":                 "features",
//     "features":         "features",
//     "team":             "team"
//   },

//   initialize: function () {
//     directory.applicationView = new directory.ApplicationView();
//     $('body').html(directory.applicationView.render().el);
//     // Close the search dropdown on click anywhere in the UI
//     this.$content = $("#content");
//   },

//   features: function () {
//     if (!directory.featuresView) {
//         directory.featuresView = new directory.FeaturesView();
//         directory.featuresView.render();
//     } else {
//         console.log('reusing features view');
//         directory.featuresView.delegateEvents();
//     }
//     this.$content.html(directory.featuresView.el);
//     directory.applicationView.selectMenuItem('features-menu');
//   },

//   team: function() {
//     var data = directoryData;
//     if(!directory.teamView) {
//         directory.teamView = new directory.TeamView();
//         directory.teamView.render(data);
//     }
//     this.$content.html(directory.teamView.el);
//     directory.applicationView.selectMenuItem('team-menu');
//   }

// });

// $(document).on("ready", function () {
//     directory.loadTemplates(["ApplicationView", "FeaturesView", "TeamView"],
//         function () {
//             directory.router = new directory.Router();
//             Backbone.history.start();
//         });
// });