var directory = {

    views: {},

    models: {},

    loadTemplates: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (directory[view]) {
                deferreds.push($.get('templates/' + view + '.html', function(data) {
                    directory[view].prototype.template = _.template(data);
                }, 'html'));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }

};

directory.Router = Backbone.Router.extend({

    routes: {
        // A route exists for /features but I put in root to show the FeaturesView on a direct page load
        "":                 "features",
        "features":         "features",
        "team":             "team"
    },

    initialize: function () {
        directory.applicationView = new directory.ApplicationView();
        $('body').html(directory.applicationView.render().el);
        // Close the search dropdown on click anywhere in the UI
        this.$content = $("#content");
    },

    features: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!directory.featuresView) {
            directory.featuresView = new directory.FeaturesView();
            directory.featuresView.render();
        } else {
            console.log('reusing features view');
            directory.featuresView.delegateEvents(); // delegate events when the view is recycled
        }
        this.$content.html(directory.featuresView.el);
        directory.applicationView.selectMenuItem('features-menu');
    },

    team: function() {
        if(!directory.teamView) {
            directory.teamView = new directory.TeamView();
            directory.teamView.render();
        }
        this.$content.html(directory.teamView.el);
        directory.applicationView.selectMenuItem('team-menu');
    }

});

$(document).on("ready", function () {
    directory.loadTemplates(["ApplicationView", "FeaturesView", "TeamView"],
        function () {
            directory.router = new directory.Router();
            Backbone.history.start();
        });
});