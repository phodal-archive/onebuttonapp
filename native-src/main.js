/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
//chrome.app.runtime.onLaunched.addListener(function() {
//  // Center window on screen.
//  var screenWidth = screen.availWidth;
//  var screenHeight = screen.availHeight;
//  var width = 500;
//  var height = 300;
//
//  chrome.app.window.create('index.html', {
//    id: "helloWorldID",
//    outerBounds: {
//      width: width,
//      height: height,
//      left: Math.round((screenWidth-width)/2),
//      top: Math.round((screenHeight-height)/2)
//    }
//  });
//});

DEFAULT_CONFIG = {
  'url_pattern' : '(jira|tickets)*/browse/',
  'pattern' :     '^\\[#([^\\]]+)\\](.*)( -[^-]+)$',
  'replacement' :  '$html:<a href="$url">$1:$2</a>'
};

function config(key){
  if (!localStorage[key]) {
    localStorage[key] = DEFAULT_CONFIG[key];
  }
  return localStorage[key];
};

function set_config(key, value){
  localStorage[key] = value;
  return value;
};

function regexp_config(key){
  return new RegExp(config(key));
}

function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.match(regexp_config('url_pattern'))) {
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
