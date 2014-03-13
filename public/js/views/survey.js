var SurveyView = Backbone.View.extend({

	 

	template: Handlebars.compile(

		'<ul>' + 

		'{{#each models}}<h3>{{attributes.name}}</h3><h4>{{attributes.question}}</h4>'+
		'<li>{{#answerList info}} {{{answers}}}{{/answerList}}</li>{{/each}}' +
		'</ul>' +
		
		'<button type="button" class="btn btn-danger">Next</button>' 
		
 
	),

	helperOne: function() {
		Handlebars.registerHelper('answerList', function(context, options) {
    		//var context2 = JSON.stringify(this.collection);
    		//var context = JSON.parse(this.collection);
			//console.log(context2);

			var context = this.collection.toJSON();
			//console.log(context);
			var output = "";
			for (var key in context) {
				//console.log(innerContext);
				var innerContext = context[key];
				

				for ( key2 in innerContext) {
					//console.log(innerContext[key2]);
					var answersContext = innerContext.answers;
					//console.log(innerContext.answers);

					for (key3 in answersContext) {
						//console.log(answersContext[key3]);
						output += '<li>' +
						'' + answersContext[key3] + 
						'</li>';
						console.log(output);
					}
				}
			}


    		
			
    		/*for (var i=0; i<context[i]; i++) {
    			var context2 = context[i];
    			//console.log(context2);
    		}*/	

				
				/*for (var i = 0; i<info.length; i++ ) {
					var infos = info[i];
					for (key in infos.answers) {
						if(infos.answers.hasOwnProperty(key)) {
    					count++;
    					output += '<li>' +
						'">' + info[i].answers[key] + 
						'</li>';
    					//console.log(output);
  						
  						}
					}
				} */
				
			
			
    		return output;	
		}); //end register		
	}, 

	

	
	initialize: function() {

		this.listenTo(this.collection, "reset", this.render);
	},


	render: function () {
		
		
		this.helperOne();
		this.$el.html(this.template(this.collection));

		return this;
	}

});