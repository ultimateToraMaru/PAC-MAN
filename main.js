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
    let pac_man = new PAC_MAN();
    // 非同期waitしてるのでリトライできないのかもしれない
    // let retry = true;
    // while (retry) {
        // pac_man.play(p);
    // }

    let life = 3;
    while (life > 0) {
        pac_man.play(p);
        life--;
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
