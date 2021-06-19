let score = new Score();
let p = new Player(score);

function setup() {
    start();
}

async function start() {
    // インスタンス生成
    let enemyList = new Array(
        new Enemy(i = 15, j = 10, c = 4, color = 'GREEN'),
        new Enemy(i = 15, j = 20, c = 5, color = 'RED'));

    let stage = new Stage(startStage, stagePoints, stageBites, enemyList);

    createCanvas(960, 960);
    stage.draw();

    displayRadyGo();
    await sleep(3000);

    playBGM();
    redrawAll(enemyList, stage);
}

async function redrawAll(enemyList, stage) {
        
    while(!stage.gameTurn()) {
        await sleep(250);

        playBGM(p.isPowerPacMan());
        displayScore(p.getScore().getScore());

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

            enemyGenerator(enemyList);
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
                enemy.setStage(stage.getStage(), stage.getStagePoints());
                enemy.readFacePanMan(p);
                
                enemy_pos = enemy.move();
                stage.setChara(enemy_pos);
                
                // パックマンがエネミーを食べた時
                if (enemy_pos[0] === p_pos[0] && enemy_pos[1] === p_pos[1]) {
                    enemy.destroy();
                    playPowerSE()
                    enemyList.splice(i, 1);
                    p.getScore().addBiteScore();
                }
            });

            p.setStage(stage.getStage(), stage.getStageBites());
            stage.setChara(p_pos);

            stage.draw();
            checkPowerPacmanTurn(stage.getTurn());
            continue;
        }
    }
}

// 嫌な関数。privateな奴にpublic関数でアクセスしてる
// privateの意味がないのでは。
// いつか直さないと。
// function addScore(type) {
//     if (type === 'bite') {
//         score.addBiteScore();
//     } else if (type === 'cookie') {
//         score.addCookieScore();
//     } else if (type === 'enemy') {
//         score.addEnemyScore();
//     }

//     displayScore(p.getScore().getScore());
// }

let startPowerTurn = 0;
let tmpPowerTurn = 0;
const MAXPOWERTURN = 50;    // パワーパックマンの持続時間。50ターンくらいが適切。
function checkPowerPacmanTurn(thisTurn) {
    if (startPowerTurn === 0) {
        startPowerTurn = thisTurn;
    }
    tmpPowerTurn = thisTurn;

    if (tmpPowerTurn - startPowerTurn == MAXPOWERTURN) {
        p.endOfPowerTime();
        startPowerTurn = 0;
        tmpPowerTurn = 0;
    }
}

function enemyGenerator(enemyList) {
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
