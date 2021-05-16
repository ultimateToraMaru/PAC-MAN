// import { Game } from './game.js';
// import { PacMan } from './player.js';
// import { Enemy } from './enemy.js';
// import { sleep } from './delay.js';

let game = new Game();
let p = new PacMan();
let e = new Enemy(1, 10, 3);
let e2 = new Enemy(1, 20, 4);

function setup() {
    createCanvas(960, 960);
    redrawAll();
}

async function redrawAll() {
    while(game.gameTurn()) {
        await sleep(1000);
        p.setStage(game.getStage());
        // game.setChara(p.move('default'));
    
        e.setStage(game.getStage());
        game.setChara(e.move());
    
        e2.setStage(game.getStage());
        game.setChara(e2.move());
    
        game.draw();
    }
}

window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('keypress', function(e){

      if(e.key === 'a') game.setChara(p.move('left'));
      else if(e.key === 'd') game.setChara(p.move('right'));
      else if(e.key === 'w') game.setChara(p.move('up'));
      else if(e.key === 's') game.setChara(p.move('down'));

    }); 
});
