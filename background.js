let dark = false;

let urls = {
  desmos: {
    url : "https://www.desmos.com/scientific",
    path: "desmos-scientific"
  }
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;

      if(url.includes("chrome://")) {
        console.log('return')
        return;
      }
      let website = getWebsite(url);

      if(!dark && (url == urls[website].url)) {
        chrome.tabs.insertCSS(null, { file: `css/${urls[website].path}/darkmode.css` });
        dark = !dark;
        return;
      }

      else {
        if(url = urls.desmos.url) {
          chrome.tabs.insertCSS(null, { file: `css/${urls[website].path}/lightmode.css` });
          dark = !dark;
        }
      }
  });
});

function getWebsite(url) {
  for (let website in urls) {
    if (url.includes(urls[website].url)) {
      return website;
    }
  }
  return null;
}