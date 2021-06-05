let p = new PacMan();
let e1 = new Enemy(i = 1, j = 10, c = 4, target = p);
let e2 = new Enemy(i = 1, j = 20, c = 5, target = p);

let enemyList = new Array(e1, e2);
let stage = new Stage(startStage, stagePoints, stageBites, enemyList);

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
        if (p.isPowerPacMan() === false) {
            p.setStage(stage.getStage(), stage.getStageBites());
            
            let p_pos = p.move();
            stage.setChara(p_pos);

            e1.setStage(stage.getStage(), stage.getStagePoints());
            e1.getIsAlive();
            e1.readFacePanMan(p);
    
            let e1_pos = e1.move();
            stage.setChara(e1_pos);
            
            // e2.setStage(stage.getStage(), stage.getStagePoints());
            // e2.readFacePanMan(p);
            // let e2_pos = e2.move();
            // stage.setChara(e2_pos);

        } else {
                
                e1.setStage(stage.getStage(), stage.getStagePoints());
                e1.getIsAlive();
                e1.readFacePanMan(p);
                
                let e1_pos = e1.move();
                stage.setChara(e1_pos);
                
                // e2.setStage(stage.getStage(), stage.getStagePoints());
                // e2.readFacePanMan(p);
                // let e2_pos = e2.move();
                // stage.setChara(e2_pos);
                
                p.setStage(stage.getStage(), stage.getStageBites());
            
                let p_pos = p.move();
                stage.setChara(p_pos);
                
                if (e1_pos[0] === p_pos[0] && e1_pos[1] === p_pos[1]) {
                    e1.destroy();
                }
        }
        
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
