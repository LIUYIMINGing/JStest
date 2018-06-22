// function aa() {
//     console.log('aaa');
//     console.log('bbb')
// }
// aa();
require('./css/index.css');
var demo = require('./demo.js');
// demo.add(1, 2);
demo.add(12, 2);
var img = new Image();
img.src = require('./img/jay.jpg');//此处路径，应该是index.html的相对路径下的
document.body.appendChild(img);