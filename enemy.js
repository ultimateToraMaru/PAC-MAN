class Enemy {

    // 引数: i, j ... エネミーの初期座標  c ... 自分自身を表す文字(4以上の数字)
    constructor(i, j, c) {
        this.stage = [0];
        this.commandPoints = [0];

        // エネミーの初期座標、現在どの座標にいるのかを記憶するためにも使用する
        this.e_i = i;
        this.e_j = j;
        this.c = c;

        this.command = '';
        this.setCommand();
    }
    
    // 配列this.stageにコンストラクタの引数に与えられた座標(i, j)とエネミー文字(c)を代入する
    // 配列this.commandPointsにコマンドポイントを代入する
    setStage(stage, commandPoints) {
        let tmp = stage;
        tmp[this.e_i][this.e_j] = this.c;
        this.stage = tmp;

        this.commandPoints = commandPoints;
    }

    getStage() {
        return this.stage;
    }

    // エネミー文字を動かすメソッド。
    // 行き止まりになった時とコマンドポイントに着いた時に、setCommand()を呼び出す
    move() {
        // stage配列を探索して、エネミー文字を探す
        for(let i=0; i<this.stage.length; i++) {
            for(let j=0; j<this.stage[0].length; j++) {

                if(this.stage[i][j] === this.c){
                    if (this.commandPoints[i][j] === 'p') {
                        this.setCommand();
                        // console.log('point!');
                    }

                    if (this.command === 'left') {
                        if (this.stage[i][j-1] === 1 || this.stage[i][j-1] >= 3) {
                            console.log('left');
                            this.setCommand();
                        } else {
                            this.stage[i][j] = 0;  
                            this.stage[i][j-1] = this.c;
                            this.e_i = i;
                            this.e_j = j-1;
                        }
                    } else if (this.command === 'right') {
                        if (this.stage[i][j+1] === 1 || this.stage[i][j+1] >= 3) {
                            console.log('right');
                            this.setCommand();
                        } else {
                            this.stage[i][j] = 0;
                            this.stage[i][j+1] = this.c;
                            this.e_i = i;
                            this.e_j = j+1;
                        }
                    } else if (this.command === 'up') {
                        if (this.stage[i-1][j] === 1 || this.stage[i-1][j] >= 3) {
                            console.log('up');
                            this.setCommand();
                        } else {
                            this.stage[i][j] = 0;
                            this.stage[i-1][j] = this.c;
                            this.e_i = i-1;
                            this.e_j = j;
                        }
                    } else if (this.command === 'down') {
                        if (this.stage[i+1][j] === 1 || this.stage[i+1][j] >= 3) {
                            console.log('down');
                            this.setCommand();
                        } else {
                            this.stage[i][j] = 0;
                            this.stage[i+1][j] = this.c;
                            this.e_i = i+1;
                            this.e_j = j;
                        }
                    }
                    return [this.e_i, this.e_j, this.c];
                }
            }
        } 
    }

    // 4つのランダムな方向をコマンドとしてセットする
    setCommand() {
        let r = Math.floor(Math.random() * 4);
        let com = ['left', 'right', 'up', 'down']
        this.command = com[r];
    }
}