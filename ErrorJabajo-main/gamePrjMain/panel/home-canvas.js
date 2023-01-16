import Background from "../item/background.js";
import StartButton from "../homeItem/startBtn.js";
import ExitButton from "../homeItem/exitBtn.js";
import SettingButton from "../homeItem/settingBtn.js"


export default class HomeCanvas {

    constructor() {

        this.dom = document.querySelector(".home-canvas");
        this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        //필요한 객체
        this.background = new Background();
        this.startBtn = new StartButton();
        this.startBtn.startClicked = this.startBtnClickedHandler.bind(this); //콜백함수 부여
        this.exitBtn = new ExitButton();
        this.exitBtn.exitClicked = this.exitBtnClickedHandler.bind(this);
        this.settingBtn = new SettingButton();
        this.settingBtn.settingClicked = this.settingBtnClickedHandler.bind(this);
        
        //프레임
        this.frame = 1000/60; // 1초에 60프레임 

        //전역객체 -- 우선 스킵



        //이벤트
        this.dom.onclick = this.clickHandler.bind(this);

        //app.js로부터 부여받은 콜백함수
        this.onstartGame = null; 
        this.onExit = null;
        this.onSetting = null;
        
    }


    run() {

        this.draw();

        window.setTimeout(()=> {
            this.run()
        }, this.frame);

        // this.update();
    }

    draw(){
        this.background.draw(this.ctx);
        this.startBtn.draw(this.ctx);
        this.exitBtn.draw(this.ctx);
        this.settingBtn.draw(this.ctx);
    }

    update() {

    }

    //이벤트 
    clickHandler(e) {
        //클릭 발생시 btn들한테 notify (너가 클릭된거니?)
        console.log('클릭');
        this.startBtn.notifyClick(e.x, e.y);
        this.exitBtn.notifyClick(e.x,e.y);
        this.settingBtn.notifyClick(e.x,e.y);
    }

    //이벤트 핸들러
    startBtnClickedHandler() {
        if(this.onstartGame != null) 
            this.onstartGame();
    }

    exitBtnClickedHandler() {
        if(this.onExit != null)
            this.onExit();
    }

    settingBtnClickedHandler() {
        if(this.onSetting != null)
            this.onSetting();
    }

    

    

    


}