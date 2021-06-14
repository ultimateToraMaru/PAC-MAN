
function preload() {
    pacManImg = loadImage('./imgs/Pac-Man-0.png');
    pacSe = loadSound('./imgs/onjin_botan44.mp3');
    powerSe = loadSound('./imgs/onjin_botan22.mp3');
    normalBgm = loadSound('./imgs/maou_8bit03.mp3');
    powerBgm = loadSound('./imgs/maou_8bit25.mp3');
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

function playPacSE() {
    pacSe.play();
}

function playPowerSE() {
    powerSe.play();
}