define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'text!/native-src/templates/results.html',
	'json!/configure.json',
	'js/Notify'
],function($, Backbone, _, Mustache, indexTemplate, CONFIG, Notify){

	function isChromeExtensions() {
		return typeof module !== "undefined" && module.exports;
	}

	var ListingResultPageView = Backbone.View.extend ({
		el: $('#content'),

		initialize: function(id) {
			this.tabID = id;
		},

		generateQuery: function (query, city) {
			var re = new RegExp("REPLACE_CITY", 'g');
			var result = query.replace(re, city);
			return result;
		},

		getResponse: function (city) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', CONFIG["base_url"] + this.generateQuery(JSON.stringify(CONFIG["query"]), city), false);
			xhr.send(null);
			return JSON.parse(xhr.responseText);
		},

		render:function() {
			var result = this.getResponse("Roma");
			if (isChromeExtensions()) {
				Notify.setUp(result.totalResultsCount + '', this.tabID);
			}
			var rendered = Mustache.to_html(indexTemplate, result);
			this.$el.html(rendered);
		}
	});

	return ListingResultPageView;
});
