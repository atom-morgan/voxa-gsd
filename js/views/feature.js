TeamManager.Views.Feature = Backbone.View.extend({
	tagName: 'div',
	className: 'row feature-row',
	template: _.template($('.feature').html()),

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.append(html);
		return this;
	}
});