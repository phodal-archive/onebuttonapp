define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/index.html',
	'json!/configure.json',
	'js/Notify'
],function($, Backbone, _, Mustache, indexTemplate, CONFIG, Notify){

	function isBrowser() {
		return typeof module !== "undefined" && module.exports;
	}

	var HomePageView = Backbone.View.extend ({
		el: $('#content'),

		initialize: function() {

		},

		getResponse: function () {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', CONFIG["base_url"] + CONFIG["query"], false);
			xhr.send(null);
			return JSON.parse(xhr.responseText);
		},

		render:function() {
			var result = this.getResponse();
			if (isBrowser) {
				Notify.setUp(result.totalResultsCount + '')
			}
			var rendered = Mustache.to_html(indexTemplate, result);
			this.$el.html(rendered);
		}
	});

	return HomePageView;
});
