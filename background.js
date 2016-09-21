	function openIndex() {
	  chrome.tabs.create({
	     "url": chrome.extension.getURL("index.html")
	   });
	}

	chrome.browserAction.onClicked.addListener(openIndex);	