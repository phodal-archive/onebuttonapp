define([
    'lib/underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser',
    'jquery',
    'js/xhr-client',
    'app',
    'js/Notify'
], function(_, Checker, URI, Parser, $, XHRClient, App, Notify) {

    var DEFAULT_CONFIG = {
        'url_pattern' : '(localhost)'
    };

    var check = function (tabId, changeInfo, tab){
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            Notify.initialize(tab.id);
            App.initialize();
        } else {
            chrome.browserAction.setBadgeText({text: '', tabId:tab.id});
        }
    };

    chrome.tabs.onUpdated.addListener(check);
});