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
  e: actions.changeFontWeight,
  t: actions.search,
  u: actions.undo
}