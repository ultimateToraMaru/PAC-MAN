let stage = new Stage(startStage, stagePoints, stageBites);
let p = new PacMan();
let e = new Enemy(1, 10, 4);
let e2 = new Enemy(1, 20, 5);

let pacManImg;

function preload() {
    pacManImg = loadImage('./imgs/Pac-Man-0.png');
}

function setup() {
    createCanvas(960, 960);
    redrawAll();
}

async function redrawAll() {
    while(!stage.gameTurn()) {
        await sleep(250);
        p.setStage(stage.getStage(), stage.getStageBites());
        stage.setChara(p.move());
    
        e.setStage(stage.getStage(), stage.getStagePoints());
        stage.setChara(e.move());
    
        e2.setStage(stage.getStage(), stage.getStagePoints());
        stage.setChara(e2.move());
    
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
