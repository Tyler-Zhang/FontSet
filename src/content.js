import FontChanger from './lib/FontChanger';
import {keyBindings} from './lib/defaults';

console.log(FontChanger);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request);
    sendResponse("success");
  });

initiate(keyBindings); // for debugging;

function initiate(keyBindings) {
  let fontChanger = new FontChanger($('.name'), {
    available_fonts: ['helvetica', 'Bree', 'lucida'],
    styleList: ['normal', 'italic', 'oblique'],
    settings: {
      sizeStep: 3,
      sizeBigMult: 10,
      weightStep: 3,
      weightBigMult: 10,
      fontStep: 1,
      fontBigMult: 1
    }
  });

  $(window).keypress(handleKeyPress.bind({
    fontChanger,
    keyBindings
  }));
}

function handleKeyPress({ altKey, ctrlKey, metaKey, key }) {
  let action = this.keyBindings[key];

  this.fontChanger.action(action);

}
