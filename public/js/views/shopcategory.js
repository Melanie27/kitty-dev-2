var HydrationView = Backbone.View.extend({

	template: Handlebars.compile (
		'<h1>{{keyword}}</h1>' +
		'{{#each images}}' +
		'<img src="photos/kitty-store/{{this}}" class="img-polaroid" />' +
		'{{/each}}' 
		
	),

	render: function() {
		//expecting an array
		this.$el.html(this.template(this.options));
		return this;
	}

});