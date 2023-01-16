export default class SettingBtn {

  constructor() {

    this.img = document.querySelector('#setting-button');
    console.log(this.img);
    this.dx = 200;
    this.dy = 360;
    
    this.imgInner = document.querySelector('#basaha');
    this.indx = this.dx + 60;
    this.indy = this.dy + 55;

    this.settingClicked = null; //콜백함수

  }



  draw(ctx) {
    ctx.drawImage(this.img, this.dx, this.dy);
    ctx.drawImage(this.imgInner, this.indx, this.indy);
  }

  notifyClick(x,y) {
    if((this.dx < x && x < this.dx + this.img.width) &&
          (this.dy < y && y <this.dy + this.img.height) )
      if(this.settingClicked != null)
        this.settingClicked();
  }



}