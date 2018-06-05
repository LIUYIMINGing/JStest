var arr = [
    {'url': './images/0.jpg'},
    {'url': './images/1.jpg'},
    {'url': './images/2.jpg'},
    {'url': './images/3.jpg'},
    {'url': './images/4.jpg'},
    {'url': './images/5.jpg'},
    {'url': './images/6.jpg'},
    {'url': './images/7.jpg'},
    {'url': './images/8.jpg'},
    {'url': './images/9.jpg'},
    {'url': './images/10.jpg'},
    {'url': './images/11.jpg'},
    {'url': './images/12.jpg'},
    {'url': './images/13.jpg'},
    {'url': './images/14.jpg'}
];
// 
function init() {
    renderPage();
    $('li').css('height',$('li').width())
    bindEvent();
}
init();

// 生成图片结构
function renderPage(){
    // for(var i = 0; i < arr.length; i ++){
    //     str += '<li>\
    //     <img src="' + arr[i].url + '" alt="1">\
    // </li>'
    // }
    arr.forEach(function(ele,index){
        var str = '';
        str += '<li>\
                    <img src="' + ele.url + '" alt="1">\
                </li>';
        $('.wrapper ul').append(str);
    })
}
function bindEvent() {
    var index;
    // console.log(arr.length);
    $('ul').on('tap','li',function() {
        // 点击哪张图片展示到show里
        index = $(this).index();
        // activeIndex = index;
        loadImg(index);
    });
    $('.show').on('tap',function() {
        $(this).css('display','none')
    }).on('swipeLeft',function() {
        // index ++
        // console.log(index);
        if(index < arr.length) {
            loadImg(index);
            index ++;
            // console.log(index);
        }else if(index = arr.length){
            loadImg(index - 1);
            console.log('最后一张了')
            index = 0;
        }else {
            // index = arr.length;
            loadImg(index);
        }
    }).on('swipeRight',function() {
        // index --
        // console.log(index);
        if(index > 0) {
            index --;
            loadImg(index);
            // console.log(index);
        }else{
            loadImg(index);
            console.log('第一张了')
            index = arr.length;
        }
    })
}
function loadImg(index) {
    $('.show').html(' ');//每次点击小图清空上一次显示的show
    var deviceW_H = $(window).width()/$(window).height();
    var img = new Image();
    img.src = arr[index].url;
    $('.show').css('display','block').append($(img));
    img.onload = function () {
        var imgW_H = img.width / img.height;
        if(imgW_H < deviceW_H) {
            $(this).css('height','100%');
        }else{
            $(this).css('width','100%');
        }
    }
}
// function