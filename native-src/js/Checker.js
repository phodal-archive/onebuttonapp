var factory = function(
	_
) {
	var DEFAULT_CONFIG = {
		'url_pattern' : '(immobiliare)*',
		'local_pattern': 'imm_area'
	};

	var Checker = function () {
		this.initialize.apply(this, arguments);
	};

	_.extend(Checker.prototype, {
		initialize: function() {
		},

		checkForValidUrl: function(tabId, changeInfo, tab) {
			if (tab.url.match(new RegExp(DEFAULT_CONFIG['url_pattern']))) {
				chrome.pageAction.show(tabId);
			}
		}
	});
	return new Checker();
};

if (typeof module !== "undefined" && module.exports) {
	module.exports = factory(
		require("underscore")
	);
} else if (typeof define !== "undefined") {
	define([
		"underscore"
	], factory);
}
