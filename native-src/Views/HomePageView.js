define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/index.html'
],function($, Backbone, _, Mustache, indexTemplate){

	var HomePageView = Backbone.View.extend ({

		initialize: function(){
			var view = this, rendered;

			rendered = Mustache.to_html(indexTemplate, {hello: "draw"});
			$(view.el).html(rendered);
		}
	});

	return HomePageView;
});
