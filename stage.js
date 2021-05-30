/* https://p5js.jp/get-started/ */

class Stage {
    constructor(startStage, commandPoints) {
        this.startStage = startStage;
        this.commandPoints = commandPoints;
    
        /* パックマン生存フラグ */
        this.turn = 0;
        this.tmpTurn = 0;

        this.isGameSet = 0;
    }


    setStage(stage) {
        this.startStage = stage;
    }

    getStage() {
        return this.startStage;
    }

    getCommandPoints() {
        return this.commandPoints;
    }

    setChara(pos) {
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
                    fill(0, 0, 0);
                }
                // 配列の中身が1の時、青ブロック
                else if(this.startStage[i][j] === 1) { 
                    fill(51, 51, 153);
                }
                // 配列の中身が2の時、プレイヤーブロック
                else if(this.startStage[i][j] === 2){ 

                    /* 画像パックマン表示の部分 現在保留中 */
                    // imageMode(CENTER);
                    // scale(0.02, 0.02);
                    // image(pacManImg, 1000*(j+1), 600*(i+1));

                    fill(255, 255, 0);
                    this.turn++;
                }
                // 配列の中身が4の時、エネミーブロック
                else if(this.startStage[i][j] === 4){
                    fill(0, 255, 0);
                }
                // 配列の中身が5の時、エネミーブロック
                else if(this.startStage[i][j] === 5){
                    fill(255, 0, 0);
                }
                
                rect(h*(j+1), w*(i+1), h, w)    // ブロックの描画

                // 配列の中身が3の時、バイトブロック
                if(this.commandPoints[i][j] === 3){
                    fill(255, 255, 0);
                    baitFlag=1;
                    rect(h*(j+1)+h/4, w*(i+1)+w/4, h/2, w/2)    // ブロックの描画
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