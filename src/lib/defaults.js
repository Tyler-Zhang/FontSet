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
  u: actions.undo
}

export let activated = true;

export let available_fonts = ['helvetica'];
export let styleList = ['normal', 'italic', 'oblique'];

