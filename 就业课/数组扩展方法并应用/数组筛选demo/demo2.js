var person = [
    {name : '刘小华', src : '1.png', sex : 'male', des : '漂亮的女孩子'},
    {name : '王花', src : '2.png', sex : 'male', des : '漂亮的程序猿'},
    {name : '陈军', src : '3.png', sex : 'female', des : '我是一个学霸'},
    {name : '王华', src : '4.png', sex : 'female', des : '我喜欢游泳'},
    {name : '陈思思', src : '5.png', sex : 'male', des : '我喜欢看电影'},
    {name : '陈学习', src : '6.png', sex : 'female', des : '我爸我妈爱学习'},
    {name : '王美丽', src : '7.png', sex : 'male', des : '我妈是美丽的妈妈'}
];
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
var listUl = document.getElementById('list');
var oInp = document.getElementById('inp');
var sUl = document.getElementById('searchUl');
var store = createStore({
    text:'',sex:'all'
})
store.subScribe(function() {
    fn();
    rander(lastPerArr())
})

function fn() {
    console.log(123);
}
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

function deal() {
    // state.text = this.value;
    store.dispatch({type:'text',value:this.value});
    // rander(addFn(objFilter,person));
    // rander(lastPerArr())
}
oInp.oninput = debounce(deal,800);
function filterText(text,arr) {
    return arr.filter(function(ele,index) { //返回符合条件的数组
        if(ele.name.indexOf(text) !== -1) {//indexOf是返回参数在字符串的位置
            return true;
        }
    })
}

sUl.addEventListener('click',function(e) {
    if(e.target.tagName == 'LI'){
        // state.sex = e.target.getAttribute('sex');//获得自定义属性名的值：male或者female，将值赋给state.sex
        store.dispatch({type:'sex',value:e.target.getAttribute('sex')});
        document.getElementsByClassName('active')[0].className = '';
        e.target.className = 'active';
        // rander(addFn(objFilter,person));//rander（数组）：这个数组就是addFn函数的执行结果；
        // rander(lastPerArr());
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

// var state = { //存储筛选的初试状态的值
//     text: '',
//     sex: 'all'//-->male
// }

function addFn(obj, arr) {
    return function () {
        var lastArr = arr;
        for(var prop in obj) {
            lastArr = obj[prop](store.getState()[prop], lastArr);
        }
        return lastArr;
    }
}
var lastPerArr = addFn({text: filterText, sex: filterSex}, person);
