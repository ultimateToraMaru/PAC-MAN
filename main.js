let p = new PacMan();
// インスタンス化するenemyを入れていく。
let enemyList = new Array(
                    new Enemy(i = 15, j = 10, c = 4, color = 'GREEN'),
                    new Enemy(i = 15, j = 20, c = 5, color = 'RED'));

let stage = new Stage(startStage, stagePoints, stageBites, enemyList);

let pacManImg;
let sound;



function setup() {
    createCanvas(960, 960);
    playBGM();
    redrawAll();
}

async function redrawAll() {
    while(!stage.gameTurn()) {
        await sleep(250);

        playBGM(p.isPowerPacMan());
        /* パックマンが通常時 */
        if (p.isPowerPacMan() === false) {
            p.setStage(stage.getStage(), stage.getStageBites());
            
            let p_pos = p.move();
            stage.setChara(p_pos);

            enemyList.forEach((enemy) => {
                enemy.setStage(stage.getStage(), stage.getStagePoints());
                enemy.readFacePanMan(p);
                enemy.move();
            });

            enemyGenerator();
            stage.draw();
            continue;
        } 

        /* パックマンがパワーパックマン時 */
        // パワーパックマンはエネミーを食べることができる！日頃の恨みを晴らせ！
        // でも、運が悪いとうまく食べれなかったり、青ブロックに変身したりするぞ！
        // 力を手に入れたからと言って調子に乗ると痛い目を見るぞ！気をつけろ！
        if (p.isPowerPacMan() === true) {
            let enemy_pos = 0;

            // パワーパックマン時にはパックマンのスピードが倍速にすために2かいp.move()をしている
            p.move();
            let p_pos = p.move();

            enemyList.forEach((enemy, i) => {
                // if (!enemy.getIsAlive()) {
                //     console.log('生きてる');
                //     enemy.countDownEnemyComeBack();
                // } else {
                //     console.log('死んでる');
                // }
                enemy.setStage(stage.getStage(), stage.getStagePoints());
                enemy.readFacePanMan(p);
                
                enemy_pos = enemy.move();
                stage.setChara(enemy_pos);
                
                // パックマンがエネミーを食べた時
                if (enemy_pos[0] === p_pos[0] && enemy_pos[1] === p_pos[1]) {
                    enemy.destroy();
                    enemyList.splice(i, 1);
                }
            });

            p.setStage(stage.getStage(), stage.getStageBites());
            stage.setChara(p_pos);

            stage.draw();   
            checkPowerPacmanTurn();
        }


    }
}

let startPowerTurn = 0;
let tmpPowerTurn = 0;
const MAXPOWERTURN = 50;
function checkPowerPacmanTurn() {
    if (startPowerTurn === 0) {
        startPowerTurn = stage.getTurn();
        console.log('はじまりはじまり');
    }
    tmpPowerTurn = stage.getTurn();
    // console.log('のこり', 30 - (nowPowerTurn - startPowerTurn))

    if (tmpPowerTurn - startPowerTurn == MAXPOWERTURN) {
        p.endOfPowerTime();
        startPowerTurn = 0;
        tmpPowerTurn = 0;
        console.log('おわりおわり');
    }
}

function enemyGenerator() {
    let r = Math.floor(Math.random() * 50);  // 0~49の範囲の乱数
    const maxEnemys = 30;
    if (enemyList.length <= maxEnemys) {
        if (r === 10) {
            enemyList.push(new Enemy(i = 15, j = 20, c = r, color = 'RED'));
        } else if (r === 20) {
            enemyList.push(new Enemy(i = 15, j = 10, c = r, color = 'GREEN'));
        } else if (r === 30) {
            enemyList.push(new Enemy(i = 18, j = 20, c = r, color = 'ORANGE'));
        } else if (r === 40) {
            enemyList.push(new Enemy(i = 18, j = 10, c = r, color = 'SKYBLUE'));
        }
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
