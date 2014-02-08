TeamManager.Views.Employees = Backbone.View.extend({
	template: _.template($('.employees').html()),

	renderEmp: function(employee) {
		var emp = new TeamManager.Views.Employee({model: employee});
		this.$('.employees-container').append(emp.render().$el);
	},

	render: function() {
		var html = this.template();
		this.$el.html(html);

		this.collection.each(this.renderEmp, this);

		return this;
	}

});