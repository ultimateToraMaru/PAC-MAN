class Enemy {

    constructor(i, j, c) {
        this.stage = [0];
        // エネミーの初期位置
        this.e_i = i;
        this.e_j = j;
        this.c = c;
        this.command = '';
        this.setCommand();
    }
    
    setStage(stage) {
        let tmp = stage;
        tmp[this.e_i][this.e_j] = this.c;
        this.stage = tmp;
    }

    getStage() {
        return this.stage;
    }

    move() {
        for(let i=0; i<this.stage.length; i++) {
            for(let j=0; j<this.stage[0].length; j++) {
                if(this.stage[i][j] === this.c){

                    if (this.command === 'left') {
                        if (this.stage[i][j-1] === 1 || this.stage[i][j-1] >= 3) {
                            this.setCommand();
                        } else {
                            this.stage[i][j] = 0;  
                            this.stage[i][j-1] = this.c;
                            this.e_i = i;
                            this.e_j = j-1;
                        }
                    } else if (this.command === 'right') {
                        if (this.stage[i][j+1] === 1 || this.stage[i][j+1] >= 3) {
                            this.setCommand();
                        } else {
                            this.stage[i][j] = 0;
                            this.stage[i][j+1] = this.c;
                            this.e_i = i;
                            this.e_j = j+1;
                        }
                    } else if (this.command === 'up') {
                        if (this.stage[i-1][j] === 1 || this.stage[i-1][j] >= 3) {
                            this.setCommand();
                        } else {
                            this.stage[i][j] = 0;
                            this.stage[i-1][j] = this.c;
                            this.e_i = i-1;
                            this.e_j = j;
                        }
                    } else if (this.command === 'down') {
                        if (this.stage[i+1][j] === 1 || this.stage[i+1][j] >= 3) {
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

    setCommand() {
        let r = Math.floor(Math.random() * 4);
        let com = ['left', 'right', 'up', 'down']
        this.command = com[r];
    }
}