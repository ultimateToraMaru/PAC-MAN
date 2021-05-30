class PacMan {
    constructor() {
        this.stage = [0];
        // パックマンの初期位置、現在どの座標にいるのかを記憶するためにも使用する
        this.p_i = 1;
        this.p_j = 1;
        this.command = '';
        this.setCommand();
    }

    setStage(stage) { 
        let tmp = stage;
        tmp[this.p_i][this.p_j] = 2;
        this.stage = tmp;
    }

    getStage() {
        return this.stage;
    }

    // プレイヤー文字を動かすメソッド。
    move() {
        for(let i=0; i<this.stage.length; i++) {
            for(let j=0; j<this.stage[0].length; j++) {
                // stage配列を探索して、プレイヤー文字を探す
                // 移動しようとしているところが行き止まりでないか事前にチェックをしている
                if(this.stage[i][j] === 2){
                    if(this.command === 'left' && this.stage[i][j-1] !== 1) {
                        this.stage[i][j] = 0;  
                        this.stage[i][j-1] = 2;
                        this.p_i = i;
                        this.p_j = j-1;
                    } else if(this.command === 'right' && this.stage[i][j+1] !== 1) {
                        this.stage[i][j] = 0;
                        this.stage[i][j+1] = 2;
                        this.p_i = i;
                        this.p_j = j+1;
                    } else if(this.command === 'up' && this.stage[i-1][j] !== 1) {
                        this.stage[i][j] = 0;
                        this.stage[i-1][j] = 2;
                        this.p_i = i-1;
                        this.p_j = j;
                    } else if(this.command === 'down' && this.stage[i+1][j] !== 1) {
                        this.stage[i][j] = 0;
                        this.stage[i+1][j] = 2;
                        this.p_i = i+1;
                        this.p_j = j;
                    } else {
                        this.stage[this.p_i][this.p_j] = 2;
                    }

                    return [this.p_i, this.p_j, 2];
                }
            }
        } 
    }

    setCommand(com) {
        this.command = com;
    }
}