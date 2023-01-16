export default class HomeBtn {

  constructor() {
  //이미지가 없어서 우선 exit-btn이랑 동일한 이미지로
  this.img = document.querySelector("#exit-button");
  this.x = 600;
  this.y = 360;
  this.dx = 900;
  this.dy = 400;

  this.imgInner = document.querySelector('#bomb');
  this.indx = this.dx + 30;
  this.indy = this.dy + 34;

  //콜백 함수
  this.homeClicked = null;
  
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.dx, this.dy);
    ctx.drawImage(this.imgInner, this.indx, this.indy);
  }

  notifyClick(x,y) {
    if((this.dx < x && x < this.dx + this.img.width) &&
      (this.dy < y && y <this.dy + this.img.height) )
        if(this.homeClicked != null)
          this.homeClicked();
  }


}