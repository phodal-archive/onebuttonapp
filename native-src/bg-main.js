define([
    'lib/underscore',
    'js/Checker',
    'js/xhr-helper',
    'json!/configure.json',
    'js/Parser'
], function(_, Checker, XHRHelper, CONFIG, Parser) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(immobiliare|localhost)'
    };

    var check = function (tabId, changeInfo, tab){

        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            var xhrHelper = new XHRHelper();
            var where = Parser.parseWhere(tab.url);

            xhrHelper.request(CONFIG["base_url"] + xhrHelper.generateQuery(JSON.stringify(CONFIG["query"]), where), function(result) {
                var listingNumber = result.totalResultsCount + '';

                chrome.runtime.onConnect.addListener(function (port) {
                    port.postMessage({
                        type:"listingsInfo",
                        totalResultsCount: listingNumber,
                        where: where
                    });
                });
                chrome.browserAction.setBadgeText({text: listingNumber, tabId:tab.id});
            });
        } else {
            chrome.browserAction.setBadgeText({text: '', tabId:tab.id});
        }
    };

    chrome.tabs.onUpdated.addListener(check);
});