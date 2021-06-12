function preload() {
    pacManImg = loadImage('./imgs/Pac-Man-0.png');
    sound = loadSound('./imgs/botan_b44.mp3');
    bgm = loadSound('./imgs/8bit03.mp3');
}

function playBGM() {
    bgm.loop();
}

function playSE() {
    sound.play();
}