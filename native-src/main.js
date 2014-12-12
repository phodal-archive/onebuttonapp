define([
    'lib/underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser',
    'jquery',
    'js/xhr-client',
    'Views/HomePageView'
], function(_, Checker, URI, Parser, $, XHRClient, HomePageView) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(localhost)'
    };

    var check = function (tabId, changeInfo, tab){
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            var xhrClient = new XHRClient();
            var result = [];
            var url = "http://localhost:10000/manifest.json";
            xhrClient.request(url, result);
            console.log(result);
            var homePageView = new HomePageView();
        }
    };

    chrome.tabs.onUpdated.addListener(check);
    chrome.browserAction.setBadgeBackgroundColor({color: '#c8112f'});
    chrome.browserAction.setBadgeText({text: '99'});
});