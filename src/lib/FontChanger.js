import Detector from './FontDetector';

const available_fonts = ['helvetica'];

export default class FontChanger {
  
  constructor(elements) {
    this.elements = elements;  // JQuery object of the fonts that we're changing
    this.fontList = available_fonts;
    this.fontIdx = 0;
}
  /**
   * Changes the font of the elements
   * Currently, it wraps through the elements, maybe we should stop at the end instead? @todo 
   * @param {Integer} x How mnay fonts you want to shift by  
   */
  changeFont(x) {
    let newFontIdx = (x + this.fontIdx) % this.fontList.length;
    this.fontIdx = newFontIdx;
    this.elements.css('font-family', this.fontList[newFontIdx]);

    return true;
  }

  /**
   * Changes the font size of the elements
   * @param {Number} x Font size change in px
   */
  changeSize(x) {
    let currentFontsize = this.elements.css('font-size');
    let reg = /\d+.?(?:\d+)?/;  // regex for extracting the px size value;

    let matched = reg.exec(currentFontsize);
    
    if(!null){
      console.error('No size associated with fontsize: ' + currentFontsize);
      return false;
    }

    this.elements.css('font-size', Number(matched[0]) + x + 'px')
    return true;
  }
  
  /**
   * Returns the current font family
   */
  currentFont(){
    return this.fontList[this.fontIdx];
  }
}