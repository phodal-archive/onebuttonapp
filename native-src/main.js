define([
    'underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser',
    'zepto',
    'js/xhr-client'
], function(_, Checker, URI, Parser, $, XHRClient) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(immobiliare)',
        'local_pattern': 'imm_area'
    };

    var check = function (tabId, changeInfo, tab){
        var result = localStorage.getItem("imm_ultimeRicerche");
        console.log(result);
        $("#popup p").append(result);
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            console.log("check url");
        }
        var xhrClient = new XHRClient();
        var result = [];
	    var url = "";
        xhrClient.request(url, result);
        console.log(result);
    };

    chrome.tabs.onUpdated.addListener(check);
    chrome.browserAction.setBadgeBackgroundColor({color: '#c8112f'});
    chrome.browserAction.setBadgeText({text: '99'});
});