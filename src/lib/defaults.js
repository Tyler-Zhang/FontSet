import * as actions from './actions';
import { TOP_RIGHT } from './definitions';

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


export let availableFonts = ['Lucida Sans', 'bree', 'woodford', 'Fenix', 'Oranienbaum', 'Audrey'];


export let styleList = ['normal', 'italic', 'oblique'];
export let settings = {
  sizeStep: 3,
  sizeBigMult: 10,
  weightStep: 100,
  weightBigMult: 2,
  fontStep: 1,
  fontBigMult: 1,
  corner: TOP_RIGHT
}

