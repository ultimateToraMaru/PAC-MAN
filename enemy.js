class Enemy {

    // 引数: i, j ... エネミーの初期座標  c ... 自分自身を表す文字(4以上の数字)
    constructor(i, j, c, color) {
        this.stage = [0];
        this.stagePoints = [0];

        // エネミーの初期座標、現在どの座標にいるのかを記憶するためにも使用する
        this.e_i = i;
        this.e_j = j;
        this.char = c;

        this.baseColor = color;
        this.statusColor = color;

        this.isSulk = 0;
        this.isAlive = 1;

        this.command = '';
        this.setCommand();
    }
    
    // 配列this.stageにコンストラクタの引数に与えられた座標(i, j)とエネミー文字(c)を代入する
    // 配列this.stagePointsにコマンドポイントを代入する
    setStage(stage, stagePoints) {
        let tmp = stage;
        tmp[this.e_i][this.e_j] = this.char;
        this.stage = tmp;
        
        this.stagePoints = stagePoints;
    }

    getColor() {
        return this.statusColor;
    }

    getChar() {
        return this.char;
    }
    
    // エネミー文字を動かすメソッド。
    // 行き止まりになった時とコマンドポイントに着いた時に、setCommand()を呼び出す
    move() {
        
        if (this.isAlive === 1) {
            // stage配列を探索して、エネミー文字を探す
            for(let i=0; i<this.stage.length; i++) {
                for(let j=0; j<this.stage[0].length; j++) {
                    
                    if(this.stage[i][j] === this.char){
                        if (this.stagePoints[i][j] === 9) {
                            this.setCommand();
                        }
                        
                        if (this.command === 'left') {
                            // 行き止まりの時
                            if (this.stage[i][j-1] === 1 || this.stage[i][j-1] >= 3) {
                                this.setCommand();
                            } else {
                                this.stage[i][j] = 0;  
                                this.stage[i][j-1] = this.char;
                                this.e_i = i;
                                this.e_j = j-1;
                            }
                        } else if (this.command === 'right') {
                            if (this.stage[i][j+1] === 1 || this.stage[i][j+1] >= 3) {
                                this.setCommand();
                            } else {
                                this.stage[i][j] = 0;
                                this.stage[i][j+1] = this.char;
                                this.e_i = i;
                                this.e_j = j+1;
                            }
                        } else if (this.command === 'up') {
                            if (this.stage[i-1][j] === 1 || this.stage[i-1][j] >= 3) {
                                this.setCommand();
                            } else {
                                this.stage[i][j] = 0;
                                this.stage[i-1][j] = this.char;
                                this.e_i = i-1;
                                this.e_j = j;
                            }
                        } else if (this.command === 'down') {
                            if (this.stage[i+1][j] === 1 || this.stage[i+1][j] >= 3) {
                                this.setCommand();
                            } else {
                                this.stage[i][j] = 0;
                                this.stage[i+1][j] = this.char;
                                this.e_i = i+1;
                                this.e_j = j;
                            }
                        }
                        return [this.e_i, this.e_j, this.char];
                    }
                }
            }
        }

        return [this.e_i, this.e_j, this.char];
    }

    // 4つのランダムな方向をコマンドとしてセットする
    setCommand() {
        let r = Math.floor(Math.random() * 4);
        let com = ['left', 'right', 'up', 'down']
        this.command = com[r];
    }

    readFacePanMan(pacman) {
        if (pacman.isPowerPacMan()) {
            this.isSulk = true;
            this.statusColor = 'PURPLE';
        } else {
            this.statusColor = this.baseColor;
        }
    }

    destroy() {
        this.isAlive = 0;
    }

    getIsAlive() {
        return this.isAlive;
    }
}