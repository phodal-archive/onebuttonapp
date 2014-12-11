define([
    'underscore',
    'js/Checker'
], function(_, Checker) {
    chrome.tabs.onUpdated.addListener(Checker.checkForValidUrl);
});