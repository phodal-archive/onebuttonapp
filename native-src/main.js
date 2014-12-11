define([
    'underscore',
    'js/Checker',
    'URIjs/URI',
    'js/Parser'
], function(_, Checker, URI, Parser) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(immobiliare)',
        'local_pattern': 'imm_area'
    };

    var check = function (tabId, changeInfo, tab){
        console.log(Parser.parseWhere(tab.url));
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            chrome.pageAction.show(tabId);
        }
    };

    chrome.tabs.onUpdated.addListener(check);
});