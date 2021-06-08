let p = new PacMan();
// インスタンス化するenemyを入れていく。
let enemyList = new Array(
                    new Enemy(i = 15, j = 10, c = 4, color = 'GREEN'),
                    new Enemy(i = 15, j = 20, c = 5, color = 'RED'));

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

let startPowerTurn = 0;
let nowPowerTurn = 0; 

async function redrawAll() {
    while(!stage.gameTurn()) {
        await sleep(250);

        /* パックマンが通常時 */
        if (p.isPowerPacMan() === false) {
            p.setStage(stage.getStage(), stage.getStageBites());
            
            let p_pos = p.move();
            stage.setChara(p_pos);

            enemyList.forEach((enemy) => {
                enemy.setStage(stage.getStage(), stage.getStagePoints());
                enemy.getIsAlive();
                enemy.readFacePanMan(p);
                enemy.move();
            });
            stage.draw();
            continue;
        } 

        if (p.isPowerPacMan() === true) {
            let enemy_pos = 0;
            enemyList.forEach((enemy) => {
                enemy.setStage(stage.getStage(), stage.getStagePoints());
                enemy.getIsAlive();
                enemy.readFacePanMan(p);
                
                enemy_pos = enemy.move();
                stage.setChara(enemy_pos);

                p.setStage(stage.getStage(), stage.getStageBites());
            
                let p_pos = p.move();
                stage.setChara(p_pos);
                
                if (enemy_pos[0] === p_pos[0] && enemy_pos[1] === p_pos[1]) {
                    enemy.destroy();
                }
            });
            stage.draw();   
        }

        /* パックマンがパワーパックマン時 */
        if (startPowerTurn === 0) {
            startPowerTurn = stage.getTurn();
            console.log('はじまりはじまり');
        }
        nowPowerTurn = stage.getTurn();
        // console.log('のこり', 30 - (nowPowerTurn - startPowerTurn))

        if (isTimeOver()) {
            p.endOfPowerTime();
            startPowerTurn = 0;
            nowPowerTurn = 0;
            console.log('おわりおわり');
        }
    }
}

function isTimeOver() {
    return nowPowerTurn - startPowerTurn == 30;
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
