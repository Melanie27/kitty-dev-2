var AppRouter = Backbone.Router.extend({
	routes: {
		"": "survey",
		"kitty-supply/new": "supplyForm",
		"kitty-survey/:question": "questionDetails",
		"kitty-supplies" : "showSupplies",
		"kitty-supplies/:supply" : "supplyDetails",
		"kitty-category/:tag" : "shopCategory",
		"cart/:supply" : "addtoCart"
		

	},

	initialize: function  () {
		
		//SURVEY
		//create the collection
		this.surveyQuestions = new SurveyQuestions();
		this.surveyQuestions.fetch();



		//create model object
		this.surveyQuestionModel = new SurveyQuestion();
		this.surveyQuestionView = new SurveyQuestionDetails(
			{
				model: this.surveyQuestionModel
			}
		);
		
		this.surveyView = new SurveyView(
			{
				collection: this.surveyQuestions
			}
		); 


		//SHOPPING CART

		//create the collection object for shopping cart
		this.shopSupplies = new ShopSupplies();
		//fetch data from the server
		this.shopSupplies.fetch();

		//cart
		this.cartSupplies = new ShopSupplies();
		this.cartView = new CartView ( 

				{
					collection: this.cartSupplies
				}

			)

		//create the supply details model object
		this.shopSupplyModel = new ShopSupply();
		this.shopSupplyView = new ShopSupplyDetails (
			{
				
				model: this.shopSupplyModel

			}
		);

		//create the list supplies view - in an array
		//this.shopListModel = new ShopList();
		this.shopView = new ShopView (
			{
				collection: this.shopSupplies

			}
		);

		//form
		this.shopSupplyForm = new ShopSupplyForm({ model: new ShopSupply()});

		//create the shop category view
		this.hydrationView = new HydrationView (
			{
				keyword: "Hydration",
				images: [
					
					'lotus-fountain.jpg',
					'raised-fountain.jpg'

				]

			}
		);
	},

	//functions for survey

	survey: function() {
		$('#app2').html(this.surveyView.render().el);
	},

	questionDetails: function (question) {
		this.surveyQuestionView.model = this.surveyQuestions.get(question);
		$('#app2').html(this.surveyQuestionView.render().el);
	},

	//functions for shopping cart
	showSupplies: function(supply) {
		this.shopSupplyView.model = this.shopSupplies.get(supply);
		//this.shopListModel.set("id", supply);
		//this.shopListModel.fetch();
		$('#app2').html(this.shopView.render().el);
	},

	supplyDetails: function(supply) {
		this.shopSupplyView.model = this.shopSupplies.get(supply);
		//this.shopSupplyModel.set('id', supply);
		//this.shopSupplyModel.fetch();
		$('#app2').html(this.shopSupplyView.render().el);
	},

	shopCategory: function(tag) {
		this.hydrationView.options.tag = tag;
		$('#app2').html(this.hydrationView.render().el);
	},

	addtoCart: function (supply) {
		var shopSupply = this.shopSupplies.get(supply);
		this.cartSupplies.add(shopSupply);
		//$('.counter').html('hi');
		
		//$('#app2').html(this.cartView.render().el);
	},

	supplyForm: function () {
		$('#app2').html(this.shopSupplyForm.render().el);
	}

	

});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});