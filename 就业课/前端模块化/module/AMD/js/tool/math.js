// define(function () {
//     function add(a, b) {
//         return a + b;
//     }
//     return {
//         add: add
//     }
// })
define(['myLib'], function (myLib) {
    console.log(myLib.a);
    function add(a, b) {
        return a + b;
    }
    return {
        add: add
    }
})