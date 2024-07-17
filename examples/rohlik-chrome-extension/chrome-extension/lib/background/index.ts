import 'webextension-polyfill';
import { exampleThemeStorage } from '@chrome-extension-boilerplate/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

const ROHLIK_ORIGIN = 'https://www.rohlik.cz';

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {

  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the side panel on rohlik.cz
  console.log('URL', url.origin);
  if (url.origin === ROHLIK_ORIGIN) {
    console.log('Enabling side panel');
    try {
      await chrome.sidePanel.setOptions({
        tabId,
        path: 'side-panel/index.html',
        enabled: true,
      });
      console.log('Side panel enabled');
    } catch (error) {
      console.error('Error enabling side panel:', error);
    }
  } else {
    // Disables the side panel on all other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});


console.log('background loaded');
console.log("Edit 'chrome-extension/lib/background/index.ts' and save to reload.");
