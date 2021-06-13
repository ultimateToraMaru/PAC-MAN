async function readyGo() {
    document.getElementById('innerhtml').innerHTML = '<h1>Ready...</h1>';
    await sleep(2000);
    document.getElementById('innerhtml').innerHTML = '<h1>Go!!</h1>';
    await sleep(1000);
}

function gameOver() {
    document.getElementById('innerhtml').innerHTML = '<h1>GAME OVER</h1>';
}

function gameClear() {
    document.getElementById('innerhtml').innerHTML = '<h1>GAME CLEAR</h1>';
}