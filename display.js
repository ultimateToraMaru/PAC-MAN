async function displayRadyGo() {
    document.getElementById('innerhtml').innerHTML = '<h1>Ready...</h1>';
    await sleep(2000);
    document.getElementById('innerhtml').innerHTML = '<h1>Go!!</h1>';
    await sleep(1000);
}

function displayScore(score) {
    document.getElementById('score').innerHTML = '<h2>SCORE: '+score+'</h2>';
}

function displayLife(life) {
    document.getElementById('life').innerHTML = '<h2>LIFE: '+life+'</h2>';
}

function diaplayGameOver() {
    document.getElementById('innerhtml').innerHTML = '<h1>GAME OVER</h1>';
}

function displayGameClear() {
    document.getElementById('innerhtml').innerHTML = '<h1>GAME CLEAR</h1>';
}