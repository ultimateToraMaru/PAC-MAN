class Enemy {

    constructor(i, j, c) {
        this.stage = [0];
        this.stagePoint = [0];
        // エネミーの初期位置
        this.e_i = i;
        this.e_j = j;
        this.c = c;
        this.command = '';
        this.setCommand();
    }
    
    setStage(stage, stagePoint) {
        let tmp = stage;
        tmp[this.e_i][this.e_j] = this.c;
        this.stage = tmp;

        this.stagePoint = stagePoint;
    }

    getStage() {
        return this.stage;
    }

    move() {
        for(let i=0; i<this.stage.length; i++) {
            for(let j=0; j<this.stage[0].length; j++) {
                if(this.stage[i][j] === this.c){

                    if (this.stagePoint[i][j] === 6) {
                        this.setCommand();
                        console.log('point!');
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

                    // if (this.command === 'left') {
                    //     if (this.stage[i][j-1] === 1|| this.stage[i][j-1] >= 3) {
                    //         console.log('left');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;  
                    //         this.stage[i][j-1] = this.c;
                    //         this.e_i = i;
                    //         this.e_j = j-1;
                    //     }
                    // } else if (this.command === 'right') {
                    //     if (this.stage[i][j+1] === 1 || this.stage[i][j+1] >= 3) {
                    //         console.log('right');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i][j+1] = this.c;
                    //         this.e_i = i;
                    //         this.e_j = j+1;
                    //     }
                    // } else if (this.command === 'up') {
                    //     if (this.stage[i-1][j] === 1 || this.stage[i-1][j] >= 3) {
                    //         console.log('up');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i-1][j] = this.c;
                    //         this.e_i = i-1;
                    //         this.e_j = j;
                    //     }
                    // } else if (this.command === 'down') {
                    //     if (this.stage[i+1][j] === 1 || this.stage[i+1][j] >= 3) {
                    //         console.log('down');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i+1][j] = this.c;
                    //         this.e_i = i+1;
                    //         this.e_j = j;
                    //     }
                    // }

                    // if (this.command === 'left') {
                    //     if (this.stage[i][j-1] === 1|| this.stage[i][j-1] >= 3) {
                    //         console.log('left');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;  
                    //         this.stage[i][j-1] = this.c;
                    //         this.e_i = i;
                    //         this.e_j = j-1;
                    //     }
                    // } else if (this.command === 'right') {
                    //     if (this.stage[i][j+1] === 1 || (this.stage[i-1][j] === 0 || this.stage[i+1][j] === 0) || this.stage[i][j+1] >= 3) {
                    //         console.log('right');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i][j+1] = this.c;
                    //         this.e_i = i;
                    //         this.e_j = j+1;
                    //     }
                    // } else if (this.command === 'up') {
                    //     if (this.stage[i-1][j] === 1 || (this.stage[i][j-1] === 0 || this.stage[i][j+1] === 0) || this.stage[i-1][j] >= 3) {
                    //         console.log('up');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i-1][j] = this.c;
                    //         this.e_i = i-1;
                    //         this.e_j = j;
                    //     }
                    // } else if (this.command === 'down') {
                    //     if (this.stage[i+1][j] === 1 || (this.stage[i][j-1] === 0 || this.stage[i][j+1] === 0) || this.stage[i+1][j] >= 3) {
                    //         console.log('down');
                    //         this.setCommand();
                    //     } else {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i+1][j] = this.c;
                    //         this.e_i = i+1;
                    //         this.e_j = j;
                    //     }
                    // }
                    // if (this.command === 'left') {
                    //     if ((this.stage[i-1][j] === 1 && this.stage[i+1][j] === 1) || (this.stage[i-1][j] === 0 && this.stage[i+1][j] === 0)) {
                    //         this.stage[i][j] = 0;  
                    //         this.stage[i][j-1] = this.c;
                    //         this.e_i = i;
                    //         this.e_j = j-1;
                    //     } else {
                    //         console.log('left');
                    //         this.setCommand();
                    //     }
                    // } else if (this.command === 'right') {
                    //     if ((this.stage[i-1][j] === 1 && this.stage[i+1][j] === 1) || (this.stage[i-1][j] === 0 && this.stage[i+1][j] === 0)) {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i][j+1] = this.c;
                    //         this.e_i = i;
                    //         this.e_j = j+1;
                    //     } else {
                    //         console.log('right');
                    //         this.setCommand();
                    //     }
                    // } else if (this.command === 'up') {
                    //     if ((this.stage[i][j-1] === 1 && this.stage[i][j+1] === 1) || (this.stage[i][j-1] === 0 && this.stage[i][j+1] === 0)) {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i-1][j] = this.c;
                    //         this.e_i = i-1;
                    //         this.e_j = j;
                    //     } else {
                    //         console.log('up');
                    //         this.setCommand();
                    //     }
                    // } else if (this.command === 'down') {
                    //     if ((this.stage[i][j-1] === 1 && this.stage[i][j+1] === 1) || (this.stage[i][j-1] === 0 && this.stage[i][j+1] === 0)) {
                    //         this.stage[i][j] = 0;
                    //         this.stage[i+1][j] = this.c;
                    //         this.e_i = i+1;
                    //         this.e_j = j;
                    //     } else {
                    //         console.log('down');
                    //         this.setCommand();
                    //     }
                    // }
                    


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