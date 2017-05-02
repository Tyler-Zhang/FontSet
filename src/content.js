import FontChanger from './lib/FontChanger';
import { INITIALIZE_CLIENT, KEY_BINDINGS, AVAILABLE_FONTS, SETTINGS } from './lib/definitions';
import { styleList } from './lib/defaults';
import { selectHighlight } from './lib/actions';
import FontDisplay from './lib/FontDisplay';
import './scss/content.scss';


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.type == INITIALIZE_CLIENT) {
      initiate({
        availableFonts: request[AVAILABLE_FONTS],
        keyBindings: request[KEY_BINDINGS],
        settings: request[SETTINGS]
      });
    }
  });


function initiate({ availableFonts, keyBindings, settings }) {
  let fontChanger = new FontChanger($(), {
    availableFonts,
    styleList,
    settings
  });

  let fontDisplay = new FontDisplay({corner: "tr"});

  let handleContext = {
    fontChanger,
    fontDisplay,
    keyBindings,
    highlightedElement: null
  };

  document.addEventListener('mousemove', handleMouseMove.bind(handleContext));
  $(window).keypress(handleKeyPress.bind(handleContext));
  
}

function handleKeyPress({ altKey, ctrlKey, metaKey, key }) {
  let action = this.keyBindings[key];
  if (action == selectHighlight){
    this.fontChanger.changeElements($(this.highlightedElement));
    let state = this.fontChanger.getState();
    this.fontDisplay.setData(state);
  } else {
    this.fontChanger.action(action);
    let state = this.fontChanger.getState();
    this.fontDisplay.setData(state);
  }
}

function handleMouseMove({ srcElement }) {
  if(srcElement == this.highlightedElement) return;

  if (this.highlightedElement) {
    $(this.highlightedElement).removeClass('fontset-highlighted');
  }

  $(srcElement).addClass('fontset-highlighted');
  this.highlightedElement = srcElement;
}

function handleSettingsChange(){

}
