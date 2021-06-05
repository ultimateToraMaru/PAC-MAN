/* https://p5js.jp/get-started/ */

class Stage {
    constructor(startStage, stagePoints, stageBites, enemyList) {
        this.startStage = startStage;
        this.stagePoints = stagePoints;
        this.stageBites = stageBites;
        this.enemyList = enemyList;
    
        /* パックマン生存フラグ */
        this.turn = 0;
        this.tmpTurn = 0;

        this.isGameSet = 0;
    }


    setStage(stage) { this.startStage = stage; }
    getStage() { return this.startStage; }

    getStagePoints() { return this.stagePoints; }
    getStageBites() { return this.stageBites; }

    getTurn() { this.turn; }

    setChara(pos) {     // pos[0], pos[1]: char文字の座標(i, j), pos[2]: char文字
        this.startStage[pos[0]][pos[1]] = pos[2];
    }

    // ステージを描画する関数
    draw() {

        /* ステージ上にエサがあるかどうかのフラグ */
        let baitFlag = 0;

        /* 枠線の色と太さ */
        stroke(0, 0, 0);
        strokeWeight(1);

        /* ステージの描画 */
        for(let i=0; i<this.startStage.length; i++) {
            for(let j=0; j<this.startStage[0].length; j++) {
                // console.log(i, j);
                if(this.startStage[i][j] === 0){
                    fill('BLACK');
                }
                // 配列の中身が1の時、青ブロック
                else if(this.startStage[i][j] === 1) { 
                    fill('BLUE');
                }
                // 配列の中身が2の時、プレイヤーブロック
                else if(this.startStage[i][j] === 2){ 

                    /* 画像パックマン表示の部分 現在保留中 */
                    // imageMode(CENTER);
                    // scale(0.02, 0.02);
                    // image(pacManImg, 1000*(j+1), 600*(i+1));

                    fill('YELLOW');
                    this.turn++;
                }

                // 配列の中身が4の時、エネミーブロック
                this.enemyList.forEach((enemy) => {
                    if(this.startStage[i][j] === enemy.getChar() && enemy.getIsAlive() === 1){
                        fill(enemy.getColor());
                    }
                });
                
                rect(h*(j+1), w*(i+1), h, w)    // ブロックの描画

                // 配列の中身が3の時、バイトブロック
                if(this.stageBites[i][j] === 3){
                    fill('YELLOW');
                    baitFlag=1;
                    rect(h*(j+1)+h/4, w*(i+1)+w/4, h/2, w/2)    // ブロックの描画
                }else if(this.stageBites[i][j] === 6){
                    fill('YELLOW');
                    baitFlag=1;
                    rect(h*(j+1)+h/8, w*(i+1)+w/8, h*3/5, w*3/5)    // ブロックの描画
                }
            }
        }

        /* バイトフラグが立たないとき(ステージ上のエサをすべて食べた時)、ゲームクリア */
        if (baitFlag === 0) {
            this.isGameSet = 1;
            console.log('gameClear!');
        }
    }

    /* ゲームターンを出力する関数 */
    gameTurn() {
        console.log(this.turn);

        // ゲームオーバーの条件(同じターンが続いた時)
        if(this.turn !== 0 && this.tmpTurn == this.turn) {
            this.isGameSet = 1;
            console.log('GameOber!');
        }
        this.tmpTurn = this.turn;

        return this.isGameSet;
    }
}