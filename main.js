// import { Game } from './game.js';
// import { PacMan } from './player.js';
// import { Enemy } from './enemy.js';
// import { sleep } from './delay.js';

let game = new Game();
let p = new PacMan();
let e = new Enemy(1, 10, 3);
let e2 = new Enemy(1, 20, 4);

let pacManImg;

function preload() {
    pacManImg = loadImage('./imgs/Pac-Man-0.png');
}

function setup() {
    createCanvas(960, 960);
    redrawAll();
    e.setS
}

async function redrawAll() {
    while(!game.gameTurn()) {
        await sleep(500);
        p.setStage(game.getStage());
        game.setChara(p.move());
    
        e.setStage(game.getStage(), game.getStagePoint());
        game.setChara(e.move());
    
        e2.setStage(game.getStage(), game.getStagePoint());
        game.setChara(e2.move());
    
        game.draw();
    }
}

window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('keypress', function(e){

      if(e.key === 'a') p.setCommand('left');
      else if(e.key === 'd') p.setCommand('right');
      else if(e.key === 'w') p.setCommand('up');
      else if(e.key === 's') p.setCommand('down');

    }); 
});
