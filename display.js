async function displayRadyGo() {
    document.getElementById('innerhtml').innerHTML = '<h1>Ready...</h1>';
    await sleep(2000);
    document.getElementById('innerhtml').innerHTML = '<h1>Go!!</h1>';
    await sleep(1000);
}

function displayScore(score) {
    document.getElementById('innerhtml').innerHTML = '<h1>SCORE: '+score+'</h1>';
}

function diaplayGameOver() {
    document.getElementById('innerhtml').innerHTML = '<h1>GAME OVER</h1>';
}

function displayGameClear() {
    document.getElementById('innerhtml').innerHTML = '<h1>GAME CLEAR</h1>';
}