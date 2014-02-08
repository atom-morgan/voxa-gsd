TeamManager.Views.Employee = Backbone.View.extend({
	tagName: 'div',
	className: 'col-md-4 col-sm-6',
	template: _.template($('.employee').html()),

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.append(html);
		return this;
	}
});