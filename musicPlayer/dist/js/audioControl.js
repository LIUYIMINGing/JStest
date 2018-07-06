(function($,root){
    function audioControl() {
        this.audio = new Audio();
        this.status = "pause";
    }
    audioControl.prototype = {
        play : function () {
            this.audio.play();
            this.status = "play";
        },
        pause : function () {
            this.audio.pause();
            this.status = "pause";
        },
        getAudio : function (src) {
            this.audio.src = src;
            this.audio.load();
        }
    }
    root.audioControl = audioControl;//在这里把在本js文件里写的方法赋到root上，root其实就是window.player
})(window.Zepto,window.player || (window.player={}))