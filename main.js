let stage = new Stage(startStage, stagePoints, stageBites);
let p = new PacMan();
let e1 = new Enemy(i = 1, j = 10, c = 4, target = p);
let e2 = new Enemy(i = 1, j = 20, c = 5, target = p);

let pacManImg;
let sound;

function preload() {
    pacManImg = loadImage('./imgs/Pac-Man-0.png');
    sound = loadSound('./imgs/botan_b44.mp3');
}

function setup() {
    createCanvas(960, 960);
    redrawAll();
}

async function redrawAll() {
    while(!stage.gameTurn()) {
        await sleep(250);

        
        // インスタンスを削除すればできそう
        e1.setStage(stage.getStage(), stage.getStagePoints());
        e1.readFacePanMan(p);
        stage.setChara(e1.move());
        
        e2.setStage(stage.getStage(), stage.getStagePoints());
        e2.readFacePanMan(p);
        stage.setChara(e2.move());
        
        p.setStage(stage.getStage(), stage.getStageBites());
        stage.setChara(p.move());
        stage.draw();
    }
}


// ユーザからの入力(a, d, w, s)を受け付ける
window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('keypress', function(e){

      if(e.key === 'a') p.setCommand('left');
      else if(e.key === 'd') p.setCommand('right');
      else if(e.key === 'w') p.setCommand('up');
      else if(e.key === 's') p.setCommand('down');

    }); 
});
