import Gamecanvas from "./panel/game-canvas.js";
import HomeCanvas from "./panel/home-canvas.js";
import SettingCanvas from "./panel/setting-canvas.js";

window.addEventListener("load", function () {

  const homecanvas = new HomeCanvas();
  homecanvas.run();

  const gamecanvas = new Gamecanvas();
  gamecanvas.run();

  const settingcanvas = new SettingCanvas();
  settingcanvas.run();
  
  homecanvas.onstartGame = () => {
    homecanvas.dom.classList.add("d-none"); //  homecanvas.dom <- this 의미
    gamecanvas.dom.classList.remove("d-none");
  }

  homecanvas.onExit = () => { //콜백함수 부여
    this.window.location.href='https://www.youtube.com/@newlec1';
  }

  homecanvas.onSetting = () => {
    homecanvas.dom.classList.add("d-none");
    settingcanvas.dom.classList.remove("d-none");
  }

  settingcanvas.onGoHome = () => {
    settingcanvas.dom.classList.add("d-none");
    homecanvas.dom.classList.remove("d-none");
  }
});
