class Enemy {

    constructor(i, j, c) {
        this.stage = [0];
        // エネミーの初期位置
        this.e_i = i;
        this.e_j = j;
        this.c = c;
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
                    
                    let r = Math.floor(Math.random() * 4);
                    let command = ['left', 'right', 'up', 'down'];

                    if(command[r] === 'left' && this.stage[i][j-1] !== 1 && this.stage[i][j-1] !== 3) {
                        this.stage[i][j] = 0;  
                        this.stage[i][j-1] = this.c;
                        this.e_i = i;
                        this.e_j = j-1;
                    } else if(command[r] === 'right' && this.stage[i][j+1] !== 1 && this.stage[i][j+1] !== 3) {
                        this.stage[i][j] = 0;
                        this.stage[i][j+1] = this.c;
                        this.e_i = i;
                        this.e_j = j+1;
                    } else if(command[r] === 'up' && this.stage[i-1][j] !== 1 && this.stage[i-1][j] !== 3) {
                        this.stage[i][j] = 0;
                        this.stage[i-1][j] = this.c;
                        this.e_i = i-1;
                        this.e_j = j;
                    } else if(command[r] === 'down' && this.stage[i+1][j] !== 1 && this.stage[i+1][j] !== 3) {
                        this.stage[i][j] = 0;
                        this.stage[i+1][j] = this.c;
                        this.e_i = i+1;
                        this.e_j = j;
                    }

                    return [this.e_i, this.e_j, this.c];
                }
            }
        } 
    }
}