define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/index.html',
	'json!/configure.json',
	'js/Notify'
],function($, Backbone, _, Mustache, indexTemplate, CONFIG, Notify){

	function isChromeExtensions() {
		return typeof module !== "undefined" && module.exports;
	}

	var HomePageView = Backbone.View.extend ({
		el: $('#content'),

		initialize: function(id) {
			this.tabID = id;
		},

		getResponse: function () {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', CONFIG["base_url"] + CONFIG["query"], false);
			xhr.send(null);
			return JSON.parse(xhr.responseText);
		},

		render:function() {
			var result = this.getResponse();
			console.log(result);
			if (!isChromeExtensions) {
				Notify.setUp(result.totalResultsCount + '', this.tabID)
			}
			var rendered = Mustache.to_html(indexTemplate, result);
			this.$el.html(rendered);
		}
	});

	return HomePageView;
});
