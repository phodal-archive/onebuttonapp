define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/index.html',
	'json!/configure.json'
],function($, Backbone, _, Mustache, indexTemplate, CONFIG){

	var HomePageView = Backbone.View.extend ({
		el: $('#content'),

		initialize: function() {

		},

		getResponse: function () {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', CONFIG["base_url"], false);
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
