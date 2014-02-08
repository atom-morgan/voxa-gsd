TeamManager.Views.Feature = Backbone.View.extend({
	tagName: 'div',
	className: 'col-md-6 col-md-offset-3',
	template: _.template($('#feature').html()),

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.append(html);
		return this;
	}
});