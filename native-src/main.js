define([
    'lib/underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser',
    'jquery',
    'js/xhr-client',
    'app'
], function(_, Checker, URI, Parser, $, XHRClient, App) {

    var DEFAULT_CONFIG = {
        'url_pattern' : '(localhost)'
    };

    var check = function (tabId, changeInfo, tab){
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            App.initialize();
        } else {
            chrome.browserAction.setBadgeText({text: ''});
        }
    };

    chrome.tabs.onUpdated.addListener(check);
});