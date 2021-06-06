class PacMan {
    constructor() {
        this.stage = [0];
        this.stageBites = [0];

        // パックマンの初期位置、現在どの座標にいるのかを記憶するためにも使用する
        this.p_i = 1;
        this.p_j = 1;

        this.command = '';
        this.setCommand();

        this.hasPowerCokkie = false;
    }

    setStage(stage, stageBites) { 
        let tmp = stage;
        tmp[this.p_i][this.p_j] = 2;
        this.stage = tmp;

        this.stageBites = stageBites;
    }

    isPowerPacMan() {
        if (this.hasPowerCokkie === true) return true;
        else return false;
    }

    // プレイヤー文字を動かすメソッド。
    move() {
        for(let i=0; i<this.stage.length; i++) {
            for(let j=0; j<this.stage[0].length; j++) {
                // stage配列を探索して、プレイヤー文字を探す
                // 移動しようとしているところが行き止まりでないか事前にチェックをしている
                if(this.stage[i][j] === PLAYER) {
                    if(this.command === 'left' && this.stage[i][j-1] !== BLOCK) {
                        this.stage[i][j] = NONE;  
                        this.stage[i][j-1] = PLAYER;
                        this.p_i = i;
                        this.p_j = j-1;
                    } else if(this.command === 'right' && this.stage[i][j+1] !== BLOCK) {
                        this.stage[i][j] = NONE;
                        this.stage[i][j+1] = PLAYER;
                        this.p_i = i;
                        this.p_j = j+1;
                    } else if(this.command === 'up' && this.stage[i-1][j] !== BLOCK) {
                        this.stage[i][j] = NONE;
                        this.stage[i-1][j] = PLAYER;
                        this.p_i = i-1;
                        this.p_j = j;
                    } else if(this.command === 'down' && this.stage[i+1][j] !== BLOCK) {
                        this.stage[i][j] = NONE;
                        this.stage[i+1][j] = PLAYER;
                        this.p_i = i+1;
                        this.p_j = j;
                    } else {
                        this.stage[this.p_i][this.p_j] = 2;
                    }

                    // エサをゲットする
                    if (this.stageBites[this.p_i][this.p_j] === BITE) {
                        this.stageBites[this.p_i][this.p_j] = NONE;
                        sound.play();
                    } else if (this.stageBites[this.p_i][this.p_j] === POWER_COKKIE) {
                        this.stageBites[this.p_i][this.p_j] = NONE;
                        this.hasPowerCokkie = true;
                    }
                    return [this.p_i, this.p_j, PLAYER];
                }
            }
        } 
    }

    setCommand(com) {
        this.command = com;
    }
}