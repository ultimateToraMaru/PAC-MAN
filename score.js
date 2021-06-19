class Score {
    constructor() {
        this.score = 0;
    }

    addBiteScore() { this.score += 500; }
    addCookieScore() { this.score += 2000; }
    addEnemyScore() { this.score += 1000;}

    getScore() {
        return this.score;
    }
}