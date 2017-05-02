import * as actions from './actions';

export let keyBindings = {
  w: actions.incSize,
  W: actions.incSizeBig,
  s: actions.decSize,
  S: actions.decSizeBig,
  r: actions.incFontWeight,
  R: actions.incFontWeightBig,
  f: actions.decFontWeight,
  F: actions.decFontWeightBig,
  d: actions.nextFont,
  D: actions.nextFontBig,
  a: actions.prevFont,
  A: actions.prevFontBig,
  q: actions.changeFontStyle,
  t: actions.search,
  u: actions.undo,
  z: actions.selectHighlight
}


export let availableFonts = ['Palatino', 'Garamond', 'Bookman', 'Avant Garde', 
  'Verdana', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'];
export let styleList = ['normal', 'italic', 'oblique'];
export let settings = {
  sizeStep: 3,
  sizeBigMult: 10,
  weightStep: 100,
  weightBigMult: 2,
  fontStep: 1,
  fontBigMult: 1
}

