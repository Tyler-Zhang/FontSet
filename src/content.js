import FontChanger from './lib/FontChanger';
import {keyBindings} from './lib/defaults';

const keySettings = keyBindings;

function handleKeyPress({altKey, ctrlKey, metaKey, key}){
  let action = keySettings[key];

  console.log(action);
}

$(window).keypress(handleKeyPress);