function onUpdatedListener(tabId, changeInfo, tab) {
    chrome.tabs.get(tabId.tabId, function(tab){
        chrome.tabs.executeScript(tab.id, {code:
                "document.body.appendChild(document.createElement('script')).src = 'https://unpkg.com/tippy.js@5';"
        });
        chrome.tabs.executeScript(tab.id, {code:
                "document.body.appendChild(document.createElement('script')).src = 'https://unpkg.com/popper.js@1';"
        });
        chrome.tabs.executeScript(tab.id, {code:
            "document.body.appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/gh/gumpshroom/killer-queen-extension/content.js';"
        });
    });
}
// Subscribe to tab events
chrome.tabs.onActivated.addListener(onUpdatedListener);

