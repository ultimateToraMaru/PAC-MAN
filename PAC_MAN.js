

class PAC_MAN {
    constructor() {
        this.startPowerTurn = 0;
        this.tmpPowerTurn = 0;
        this.MAXPOWERTURN = 50;    // パワーパックマンの持続時間。50ターンくらいが適切。
    }

    async play(p) {
        let enemyList = new Array(
            new Enemy(i = 15, j = 10, c = 4, color = 'GREEN'),
            new Enemy(i = 15, j = 20, c = 5, color = 'RED'));
    
        let stage = new Stage(startStage, stagePoints, stageBites, enemyList);
        while(!stage.gameTurn()) {
            await sleep(250);
    
            playBGM(p.isPowerPacMan());
            displayScore(p.getScore());
    
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
    
                this.enemyGenerator(enemyList);
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
                this.checkPowerPacmanTurn(stage.getTurn());
                continue;
            }
        }
    }

    checkPowerPacmanTurn(thisTurn) {
        
        if (this.startPowerTurn === 0) {
            this.startPowerTurn = thisTurn;
        }
        this.tmpPowerTurn = thisTurn;
    
        if (this.tmpPowerTurn - this.startPowerTurn == this.MAXPOWERTURN) {
            p.endOfPowerTime();
            this.startPowerTurn = 0;
            this.tmpPowerTurn = 0;
        }
    }

    enemyGenerator(enemyList) {
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
    
}