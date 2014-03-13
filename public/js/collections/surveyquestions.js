var SurveyQuestions = Backbone.Collection.extend({
	comparator: 'name',
	model: SurveyQuestion,
	url: '/questions'
});