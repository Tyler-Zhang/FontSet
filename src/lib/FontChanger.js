import Detector from './FontDetector';
import * as actions from './actions';

export default class FontChanger {

  constructor(elements, { available_fonts, styleList, settings }) {
    this.elements = elements;  // JQuery object of the fonts that we're changing
    this.fontList = available_fonts;
    this.styleList = styleList;
    this.settings = settings;
    this.fontIdx = 0;
    this.stateStack = [];  // So undo's are possible
  }
  /**
   * Changes the font of the elements
   * Currently, it wraps through the elements, maybe we should stop at the end instead? @todo 
   * @param {Integer|String} x How mnay fonts you want to shift by
   * @param {Bool} abs if true, x will be what the value should be changed to  
   */
  changeFontFamily(x, abs = false) {
    let newFont, newFontIdx;
    if (abs) {
      newFont = x;
      newFontIdx = this.fontList.indexOf(x);
      if (newFontIdx == -1) {
        console.error("Font in stack not found in font list: " + newFont);
      }
    } else {
      console.log(`x: ${x}, fontIdx: ${this.fontIdx}, len: ${this.fontList.length}`)
      newFontIdx = (x + this.fontIdx) % this.fontList.length;
      if(newFontIdx < 0) newFontIdx = this.fontList.length + newFontIdx;
      newFont = this.fontList[newFontIdx];
    }

    this.elements.css('font-family', newFont);
    this.fontIdx = newFontIdx;

    return true;
  }

  /**
   * Changes the font size of the elements
   * @param {Number} x Font size change in px
   * @param {Bool} abs if true, x is the absolute value
   */
  changeSize(x, abs = false) {
    let newFontSize;

    if (abs) {
      newFontSize = x;
    } else {
      let currentFontsize = this.elements.css('font-size');
      let reg = /\d+.?(?:\d+)?/;  // regex for extracting the px size value;
      let matched = reg.exec(currentFontsize);

      if (!matched) {
        console.error('No size associated with fontsize: ' + currentFontsize);
        return false;
      }
      newFontSize = Number(matched) + x + 'px';
    }
    this.elements.css('font-size', newFontSize);
    return true;
  }
  /**
   * 
   * @param {Number} x the delta or the absolute value of the new font weight
   * @param {Bool} abs if true the new weight will be x
   */
  changeWeight(x, abs) {
    let newFontWeight;

    if (abs) {
      newFontWeight = x;
    } else {
      let currentFontWeight = this.elements.css('font-weight');
      let val = Number(currentFontWeight);
      newFontWeight = val + x;
    }

    this.elements.css('font-weight', newFontWeight);
    return true;
  }

  changeStyle(x, abs) {
    let newStyle;

    if (abs) {
      if (!x in this.styleList) {
        console.error("Trying to change style to something not in style list: " + x);
        return false;
      }
      newStyle = x;
    } else {
      let currStyle = this.elements.css('font-style');
      let currIdx = this.styleList.indexOf(currStyle);

      if (currIdx == -1) {
        console.error("Trying to change style to something not in style list: " + currStyle);
        return false;
      }
      newStyle = this.styleList[(currIdx + x) % this.styleList.length];
    }
    this.elements.css('font-style', newStyle);
    return true;
  }

  changeSettings(settings) {
    this.settings = settings;
  }

  /**
   * Get's the state of the elements
   */
  getState() {
    return {
      'fontFamily': this.elements.css('font-family'),
      'fontSize': this.elements.css('font-size'),
      'fontWeight': this.elements.css('font-weight'),
      'fontStyle': this.elements.css('font-style')
    }
  }

  addStateToStack() {
    let currState = this.getState();
    this.stateStack.push(currState);
  }

  action(ac, x) {
    console.log("action: " + ac);
    let set = this.settings;

    switch (ac) {
      case actions.incSize:
        this.changeSize(set.sizeStep); break;
      case actions.incSizeBig:
        this.changeSize(set.sizeStep * set.sizeBigMult); break;
      case actions.decSize:
        this.changeSize(-set.sizeStep); break;
      case actions.decSizeBig:
        this.changeSize(-set.sizeStep * set.sizeBigMult); break;
      case actions.incFontWeight:
        this.changeWeight(set.weightStep); break;
      case actions.incFontWeightBig:
        this.changeWeight(set.weightStep * set.weightBigMult); break;
      case actions.decFontWeight:
        this.changeWeight(-set.weightStep); break;
      case actions.decFontWeightBig:
        this.changeWeight(-set.weightStep * set.weightBigMult); break;
      case actions.nextFont:
        this.changeFontFamily(set.fontStep); break;
      case actions.nextFontBig:
        this.changeFontFamily(set.fontStep * set.fontBigMult); break;
      case actions.prevFont:
        this.changeFontFamily(-set.fontStep); break;
      case actions.prevFontBig:
        this.changeFontFamily(-set.fontStep * set.fontBigMult); break;
      case actions.changeFont:
        this.changeFontFamily(x, true); break;
      case actions.changeFontStyle:
        this.changeStyle(1); break;
      default: console.error(`Action ${ac} not recognized`);
    }

    this.addStateToStack();
  }

}