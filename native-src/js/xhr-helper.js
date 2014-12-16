var factory = function(
	_,
	XHRClient
) {
	var XHRHelper = function () {
		this.initialize.apply(this, arguments);
	};

	XHRHelper.prototype.initialize = function() {
	};

	XHRHelper.prototype.generateQuery = function (query, city) {
		var re = new RegExp("REPLACE_CITY", 'g');
		var result = query.replace(re, city);
		return result;
	};

	XHRHelper.prototype.request = function(url, callback) {
		var xhrClient = new XHRClient();
		var options = {};

		options["success"] = function(response) {
			callback(response);
		};
		xhrClient.request(url, options);
	};

	XHRHelper.prototype.getResponse = function (url){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send(null);
		return JSON.parse(xhr.responseText);
	};

	return XHRHelper;
};

if (typeof module !== "undefined" && module.exports) {
	module.exports = factory(
		require("underscore"),
		require("js/xhr-client")
	);
} else if (typeof define !== "undefined") {
	define([
		"underscore",
		"js/xhr-client"
	], factory);
}
