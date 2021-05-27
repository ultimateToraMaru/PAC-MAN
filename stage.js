/* https://p5js.jp/get-started/ */

class Stage {
    constructor(startStage, commandPoints) {
        this.startStage = startStage;
        this.commandPoints = commandPoints;
    
        /* パックマン生存フラグ */
        this.turn = 0;
        this.tmpTurn = 0;

        this.isGameSet = 0;
        this.isGameClear = 0;
        
        /* ステージ上にエサがあるかどうかのフラグ */
        this. baitFlag = 0;
    }


    setStage(stage) {
        this.startStage = stage;
    }

    getStage() {
        return this.startStage;
    }

    getStagePoint() {
        return this.commandPoints;
    }

    setChara(pos) {
        this.startStage[pos[0]][pos[1]] = pos[2];
    }

    // ステージを描画する関数
    draw() {

        /* 枠線の色と太さ */
        stroke(0, 0, 0);
        strokeWeight(1);

        /* ステージの描画 */
        for(let i=0; i<this.startStage.length; i++) {
            for(let j=0; j<this.startStage[0].length; j++) {
                if(this.startStage[i][j] === 0){
                    fill(0, 0, 0);
                }
                else if(this.startStage[i][j] === 1) { // 配列の中身が1の時、青ブロックを描画
                    fill(51, 51, 153);
                }
                else if(this.startStage[i][j] === 2){  // 配列の中身が2の時、プレイヤーを描画
                    // imageMode(CENTER);
                    // scale(0.02, 0.02);
                    // image(pacManImg, 500*(j+1), 500*(i+1));
                    fill(255, 255, 0);
                    this.turn++;
                }
                else if(this.startStage[i][j] === 3){  // 配列の中身が3の時、エサを描画
                    fill(0, 255, 255);
                    this.baitFlag=1;
                }
                else if(this.startStage[i][j] === 4){  // 配列の中身が4の時、エネミーを描画
                    fill(0, 255, 0);
                }
                else if(this.startStage[i][j] === 5){  // 配列の中身が5の時、エネミーを描画
                    fill(255, 0, 0);
                }

                rect(h*(j+1), w*(i+1), h, w)    // ブロックの描画
            }
        }

        /* バイトフラグが立たないとき、ゲームクリア */
        if (this.baitFlag === 1) {
            this.baitFlag = 0;
        } else if (this.baitFlag === 0) {
            this.isGameClear = 1;
        }
    }

    /* ゲームターンを出力する関数 */
    gameTurn() {
        console.log(this.turn);

        if(this.turn !== 0 && this.tmpTurn == this.turn) { // ゲームオーバーの条件(同じターンが続いた時)
            this.isGameSet = 1;
            console.log('GameOber!');

        } else if (this.isGameClear === 1) { // ゲームクリアの条件
            this.isGameSet = 1;
            console.log('GameClear!');
        }
        this.tmpTurn = this.turn;

        return this.isGameSet;
    }
}