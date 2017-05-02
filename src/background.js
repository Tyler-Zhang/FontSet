import { 
  keyBindings as defKeyBindings, 
  availableFonts as defAvailableFonts, 
  settings as defsettings 
} from './lib/defaults';
import { 
  INITIALIZED, KEY_BINDINGS, 
  AVAILABLE_FONTS, SETTINGS, 
  INITIALIZE_CLIENT, CHANGE_CLIENT_SETTINGS 
} from './lib/definitions';

let currState;

function updateState() {
  chrome.storage.sync.get([KEY_BINDINGS, AVAILABLE_FONTS, SETTINGS], items => {
    currState = items;
    console.log(currState);
  });
}

function startClient() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, Object.assign({}, {type: INITIALIZE_CLIENT}, currState)
    , response => {
      console.log(response);
    });
  });
}

chrome.storage.sync.get([KEY_BINDINGS, AVAILABLE_FONTS, SETTINGS], (items) => {
  if (!items[INITIALIZED]) {  // Load defaults into the settings
    chrome.storage.sync.set({
      [KEY_BINDINGS]: defKeyBindings,
      [AVAILABLE_FONTS]: defAvailableFonts,
      [SETTINGS]: defsettings
    }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        chrome.storage.sync.set({ [INITIALIZED]: true });
        updateState();
      }
    })
  }
});

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if(request.type == INITIALIZE_CLIENT){
      startClient();
    }
  });



