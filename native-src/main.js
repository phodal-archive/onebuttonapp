define([
    'underscore',
    'js/Checker'
], function(_, Checker) {
    var DEFAULT_CONFIG = {
        'url_pattern' : '(immobiliare)*',
        'local_pattern': 'imm_area'
    };

    var check = function (tabId, changeInfo, tab){
        if(Checker.checkForValidUrl(tab.url, DEFAULT_CONFIG)){
            chrome.pageAction.show(tabId);
        }
    };

    chrome.tabs.onUpdated.addListener(check);
});