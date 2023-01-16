export default class ExitBtn {

    constructor() {
        // exit
        this.img = document.querySelector("#exit-button"); // id는 #
        // this.width = this.img.width;
        // this.height = this.img.height;
        this.dx = 900;
        this.dy = 400;

        this.imgInner = document.querySelector('#bomb');
        this.indx = this.dx + 30;
        this.indy = this.dy + 34;

        //콜백 함수
        this.exitClicked = null;

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.dx, this.dy);
        ctx.drawImage(this.imgInner, this.indx, this.indy);
    }

    notifyClick(x, y) {
        if((this.dx < x && x < this.dx + this.img.width) &&
            (this.dy < y && y <this.dy + this.img.height) )
            if(this.exitClicked != null)
            this.exitClicked();
    }

}