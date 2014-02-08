TeamManager.Views.Features = Backbone.View.extend({
	template: _.template($('#features').html()),

	renderFeature: function(feature) {
		var feature = new TeamManager.Views.Feature({model: feature});
		this.$('.features-container').append(feature.render().$el);
	},

	render: function() {
		var html = this.template();
		this.$el.html(html);

		this.collection.each(this.renderFeature, this);

		return this;
	}

});