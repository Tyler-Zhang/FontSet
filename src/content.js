import FontChanger from './lib/FontChanger';
import { INITIALIZE_CLIENT, KEY_BINDINGS, AVAILABLE_FONTS, SETTINGS } from './lib/definitions';
import { styleList } from './lib/defaults';
import { selectHighlight } from './lib/actions';
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

  let handleContext = {
    fontChanger,
    keyBindings,
    highlightedElement: null
  };

  document.addEventListener('mousemove', handleMouseMove.bind(handleContext));
  $(window).keypress(handleKeyPress.bind(handleContext));
}

function handleKeyPress({ altKey, ctrlKey, metaKey, key }) {
  let action = this.keyBindings[key];
  console.log(action);
  if (action == selectHighlight){
    
    this.fontChanger.changeElements($(this.highlightedElement));
  } else 
    this.fontChanger.action(action);
}

function handleMouseMove({ srcElement }) {
  if(srcElement == this.highlightedElement) return;

  if (this.highlightedElement) {
    $(this.highlightedElement).removeClass('fontset-highlighted');
  }

  $(srcElement).addClass('fontset-highlighted');
  this.highlightedElement = srcElement;
}
