var factory = function(
	_,
	XHRClient
) {
	var XHRHelper = function () {
		this.initialize.apply(this, arguments);
	};

	XHRHelper.prototype.initialize = function() {
	};

	XHRHelper.prototype.request = function(url, callback) {
		var xhrClient = new XHRClient();
		var options = {};

		options["success"] = function(response) {
			callback(response);
		};
		xhrClient.request(url, options);
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
