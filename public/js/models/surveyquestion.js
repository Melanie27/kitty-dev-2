var SurveyQuestion = Backbone.Model.extend({
	urlRoot: '/questions',
	defaults: {
		name: "Favorite Food",
		question: "what is fav food:",
		answers: {
			"Grumpy" : "Fresh Water Salmon, no bones, served on china",
			"Hipster" : "Nothing - trying to fit into newer, tighter jeans",
			"Pudge" : "Anything and everything my owner is eating",
			"Bub" : "Mice",
			"Meow" : "Roaches"

		}
	}

});