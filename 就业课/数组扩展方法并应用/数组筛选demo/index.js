var oInp = document.getElementById('inp');
//防抖功能
function debounce(handle,delay) {
    var timer = null;
    return function () {
        var self = this;
        var arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            handle.apply(self,arg);
        },delay)
    }
}
//绑定事件
oInp.oninput = debounce(event,1000);
//实现功能
function event() {
    console.log(this.value);
}
