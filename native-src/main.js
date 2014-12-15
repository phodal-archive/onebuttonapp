define([
    'lib/underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser',
    'jquery',
    'js/xhr-client',
    'app'
], function(_, Checker, URI, Parser, $, XHRClient, App) {
    App.initialize();

    var DEFAULT_CONFIG = {
        'url_pattern' : '(localhost)'
    };

    var check = function (tabId, changeInfo, tab){
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            console.log(Parser.parseWhere(tab.url));
            App.initialize(tab.id);
        } else {
            chrome.browserAction.setBadgeText({text: '', tabId:tab.id});
        }
    };

    if(typeof module !== "undefined" && module.exports){
        chrome.tabs.onUpdated.addListener(check);
    }
});