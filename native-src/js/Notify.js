var factory = function(
	_
) {
	var Notify = function () {
		this.initialize.apply(this, arguments);
	};

	_.extend(Notify.prototype, {
		initialize: function(tabID) {
			this.tabID = tabID;
		},

		setUp: function(number) {
			chrome.browserAction.setBadgeBackgroundColor({color: '#c8112f'});
			chrome.browserAction.setBadgeText({text: number, tabId:this.tabID });
		}
	});
	return new Notify();
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
