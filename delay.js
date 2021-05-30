// 処理を一時停止させるメソッド
// 引数には停止させたいミリ秒を指定
function sleep(msec) {
    return new Promise(function(resolve) {
       setTimeout(function() {resolve()}, msec);

    })
}