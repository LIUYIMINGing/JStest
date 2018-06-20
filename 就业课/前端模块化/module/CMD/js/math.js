define(function(require, exports, module) {
    function add(a, b) {
        return a + b;
    }
    exports.add = add;
    exports.str = '123456';
    // 导出module1，exports只是seaJs自己定义的一个关键字，不会影响到module1本身。
})