import {TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT} from './definitions';

export default class FontDisplay{
  constructor({corner}){
    this.data = {
      fontFamily: "",
      fontIdx: "",
      fontSize: "",
      fontWeight: "",
      fontStyle: ""
    }

    this.createDisplay(corner);
  }

  createDisplay(corner){
    let css;

    switch(corner){
      case TOP_LEFT: css = {left: "0px", top: "0px"}; break;
      case TOP_RIGHT: css = {top: "0px", right:"0px"}; break;
      case BOTTOM_LEFT: css = {bottom:"0px", left: "0px"}; break;
      case BOTTOM_RIGHT: css = {bottom: "0px", right: "0px"}; break;
      default: console.error(`${corner} is not a valid corner`); return false;
    }

    let display = $(
      `<div id='fontset-display'>
        <p>fontname: <span id='fontset-fontname'/> </p>
        <p>fontsize: <span id='fontset-fontsize'/> </p>
        <p>fontweight: <span id='fontset-fontweight'/> </p>
        <p>fontstyle: <span id='fontset-fontstyle'/></p>
      </div>`).css(css);
    $("body").append(display);
    this.display = display;
    this.refresh();
  }

  refresh(){
    if(!this.display){
     console.error('Trying to refresh the display before it was created');
     return false;
    }
    $('#fontset-fontname').html(this.data.fontFamily);
    $('#fontset-fontsize').html(this.data.fontSize);
    $('#fontset-fontweight').html(this.data.fontWeight);
    $('#fontset-fontstyle').html(this.data.fontStyle);
  }

  setData(data){
    this.data = data;
    this.refresh();
  }

  
}