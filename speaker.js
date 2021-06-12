
function preload() {
    pacManImg = loadImage('./imgs/Pac-Man-0.png');
    sound = loadSound('./imgs/botan_b44.mp3');
    normalBgm = loadSound('./imgs/8bit03.mp3');
    powerBgm = loadSound('./imgs/8bit25.mp3');
}

let isPlayPowerBgm = false;
let isPlayNormalBgm = false;
function playBGM(isPowerPacMan) {

    if (isPlayPowerBgm === false && isPowerPacMan === true) {
        normalBgm.stop();
        powerBgm.loop();
        isPlayPowerBgm = true;
        isPlayNormalBgm = false;
    } else if (isPlayNormalBgm === false && isPowerPacMan === false) {
        powerBgm.stop();
        normalBgm.loop();
        isPlayNormalBgm = true;
        isPlayPowerBgm = false;
    }
}

function playSE() {
    sound.play();
}