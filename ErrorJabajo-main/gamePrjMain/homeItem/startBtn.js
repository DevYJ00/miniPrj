export default class StartBtn {

    constructor() {
        // newgame.png 객체를 기준으로 클릭잡고 속에 그림은 걍 얹기로
        // this.img = document.querySelector("#start-button");
        // this.x = 500;
        // this.y = 360
        // this.width = this.img.width;
        // this.height = this.img.height;
       
        
        //sandia(수박) - start
        this.img = document.querySelector("#sandia");
        this.x = 500;
        this.y = 360;
        this.dw = this.img.width;
        this.dh = this.img.height;
        this.size = 1.3;
        this.isclick = false;

        this.startClicked = null; // homeCanvas로부터 받는 콜백함수 (함수명이 이게 맞나?)
       
    }

    draw(ctx) {

        ctx.drawImage(this.img, this.x, this.y, this.dw * this.size, this.dh * this.size);
    
    
    }
    // update() {
        
    // }

    notifyClick(x, y) {
        // console.log("saddsa")
        console.log(x,y);
        if((this.x < x && x <this. x + this.dw * this.size) && 
            (this.y < y && y < this.y + this.dh * this.size)) 
                if(this.startClicked != null) //유효성검사
                this.startClicked();
                
            

    }


}