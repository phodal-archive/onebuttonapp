define([
    'lib/underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser'
], function(_, Checker, URI, Parser) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(localhost)'
    };

    chrome.runtime.onConnect.addListener(function(port){
        port.postMessage({greeting:"hello"});
    });

    var check = function (tabId, changeInfo, tab){
        console.log(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG));
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            console.log(Parser.parseWhere(tab.url));
        } else {
            chrome.browserAction.setBadgeText({text: '', tabId:tab.id});
        }
    };

    chrome.tabs.onUpdated.addListener(check);
});