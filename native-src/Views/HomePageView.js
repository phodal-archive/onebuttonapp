define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/index.html'
],function($, Backbone, _, Mustache, indexTemplate){

	var HomePageView = Backbone.View.extend ({
		el: $('#content'),

		initialize: function(){
			var rendered = Mustache.to_html(indexTemplate, {hello: "draw"});
			console.log("zero");
			this.$el.html(rendered);
		}
	});

	return HomePageView;
});
