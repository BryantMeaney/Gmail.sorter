chrome.runtime.onInstalled.addListener(function() {
  // Perform necessary setup actions here
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('https://mail.google.com')) {
    chrome.tabs.executeScript(tabId, { file: 'content.js' });
  }
});