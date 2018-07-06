(function($,root) {
    function controlManger(len) {
        this.index = index;
        this.len = len;
        console.log(this);
    }
    controlManger.prototype = {
        prev : function () {
            // index --;
            // console.log(this);
            return this.getIndex(-1);
        },
        next : function () {
            // index ++;
            return this.getIndex(1);
        },
        getIndex : function (val) {
            var index = this.index;
            var len = this.len;
            var curIndex = (index + len + val) % len;
            this.index = curIndex;
            return curIndex;
        }
    }
    root.controlManger = controlManger;//在这里把在本js文件里写的方法赋到root上，root其实就是window.player
})(window.Zepto,window.player || (window.player = {}))//定义了window.player，当其存在时取其值，不存在时是一个空对象