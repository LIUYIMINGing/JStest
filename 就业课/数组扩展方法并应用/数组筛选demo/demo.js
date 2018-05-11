var person = [
    {name : '刘小华', src : '1.png', sex : 'male', des : '漂亮的女孩子'},
    {name : '王花', src : '2.png', sex : 'male', des : '漂亮的程序猿'},
    {name : '陈军', src : '3.png', sex : 'female', des : '我是一个学霸'},
    {name : '王华', src : '4.png', sex : 'female', des : '我喜欢游泳'},
    {name : '陈思思', src : '5.png', sex : 'male', des : '我喜欢看电影'},
    {name : '陈学习', src : '6.png', sex : 'female', des : '我爸我妈爱学习'},
    {name : '王美丽', src : '7.png', sex : 'male', des : '我妈是美丽的妈妈'}
];
var listUl = document.getElementById('list');
var oInp = document.getElementById('inp');
var sUl = document.getElementById('searchUl');
function rander(list) {
    var str = '';
    list.forEach(function(ele, index) {
        str += '<li>\
                    <img src="./img/' + ele.src + '"alt="">\
                    <span class="name">' + ele.name + '</span>\
                    <span class="des">' + ele.des + '</span>\
                </li>';
    })
    listUl.innerHTML = str;
}
rander(person);

oInp.oninput = function() {
    state.text = this.value;
    rander(addFn(objFilter,person));
}
function filterText(text,arr) {
    return arr.filter(function(ele,index) { //返回符合条件的数组
        if(ele.name.indexOf(text) !== -1) {//indexOf是返回参数在字符串的位置
            return true;
        }
    })
}

sUl.addEventListener('click',function(e) {
    if(e.target.tagName == 'LI'){
        state.sex = e.target.getAttribute('sex');//获得自定义属性名的值：male或者female，将值赋给state.sex
        document.getElementsByClassName('active')[0].className = '';
        e.target.className = 'active';
        rander(addFn(objFilter,person));//rander（数组）：这个数组就是addFn函数的执行结果；
    }
})

function filterSex(sex,arr) {
    if(sex == 'all'){
        return arr;
    }else {
        return arr.filter(function(ele,index) {
            if(sex == ele.sex) {
                return true;
            }
        })
    }
}

var state = {
    text: '',
    sex: 'all'//-->male
}
var objFilter = {
    text: filterText,
    sex: filterSex
}
function addFn(obj,arr) { //最后返回的是一个数组，这个数组是从arr中筛选出来的。
    var lastArr = arr;
    for(var prop in obj){//prop此时有两个值。一个是filterText，一个是filterSex
        lastArr = obj[prop](state[prop],lastArr);//获得了prop对应的数组，当prop时sex时，获得sex的数组，当prop是text时，获得text的数组；
        //当sex点击事件开始时，函数的调用者就变成了这个按钮（li），对应的生成的数组就变成了关于某一个sex的数组
        //当input事件开始时，函数的调用者就变成了input事件，对应的生成的数组就变成了text相关的数组。
        //这里用lastArr接收上一次事件返回的数组，等下一次调用的时候就把lastArr变成了类似person的源数组。
    }
    return lastArr;
}
// addFn(objFilter,person)
