define([
    'underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser',
    'zepto'
], function(_, Checker, URI, Parser, $) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(immobiliare)',
        'local_pattern': 'imm_area'
    };

    var check = function (tabId, changeInfo, tab){
        //console.log(Parser.parseWhere(tab.url));
        var result = localStorage.getItem("imm_ultimeRicerche");
        console.log(result);
        $("#popup p").append(result);
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            console.log("check url");
        }
    };

    chrome.tabs.onUpdated.addListener(check);
    chrome.browserAction.setBadgeBackgroundColor({color: '#c8112f'});
    chrome.browserAction.setBadgeText({text: '99'});
});