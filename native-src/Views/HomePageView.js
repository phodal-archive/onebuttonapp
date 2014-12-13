define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/index.html'
],function($, Backbone, _, Mustache, indexTemplate){

	var HomePageView = Backbone.View.extend ({
		el: $('#content'),

		initialize: function() {

		},

		getResponse: function () {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', "http://localhost:10000/manifest.json", false);
			xhr.send(null);
			return JSON.parse(xhr.responseText);
		},

		render:function() {
			var result = this.getResponse();
			var rendered = Mustache.to_html(indexTemplate, result);
			this.$el.html(rendered);
		}
	});

	return HomePageView;
});
