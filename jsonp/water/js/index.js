// $.ajax({
//     type: 'GET',
//     url: 'js/getPics.php?cpage=1',//服务器返回数据
//     // url: 'js/data.txt',//本地数据
//     success: function(data) {
//         console.log(JSON.parse(data));//转化为json格式
//     }
// })


(function () {
    var oLi = $('li'); //取出所有li
    var num = 1;
    var flag = false;//限定加载的进度
    getData();
    function getData() { //发送数据请求
        if(!flag) {
            flag = true;
            $.ajax({
                type: 'GET',
                url: 'js/getPics.php?cpage=' + num,
                success: addDom,
                beforeSend: function (data) { //发送请求之前
                    if (data.readyState == 0) {
                        $('.loading').fadeIn(200);
                    }
                },
                complete: function (data) { //请求成功之后
                    if (data.status == 200) {
                        $('.loading').fadeOut(200);
                    }
                }
            })
            num ++;
        }
    };

    function addDom(data) { //渲染html
        var dataList = JSON.parse(data);
        if(dataList.length > 1){
            dataList.forEach(function (ele, index) {
                // ele.preview ele.title
                var iDiv = $('<div class="item"></div>'),
                    imgBox = $('<div class="imgBox"></div>'),
                    oP = $('<p></p>'),
                    img = new Image();
                img.src = ele.preview; //img的图片路径
                oP.text(ele.title); //p标签里的内容
                img.onload = function () {
                    imgBox.append(img); //在imgBox里添加img标签，
                    iDiv.append(imgBox).append(oP); //在iDiv里添加imgBox，并且再添加oP;
                    var index = getMinLi(oLi);//获得最小高度的li的索引值
                    $(oLi[index]).append(iDiv);
                }
            });
            flag = false;//当dom加载完成后flag才变为false，阻止dom没加载完就接着加载滚动后的数据
        }
    }
    function getMinLi(dom) {//获得最小高度的li的索引值
        var minHeight = parseInt($(dom[0]).css('height'));
        var index = 0;
        for (var i = 1; i < dom.length; i++) {
            var height = parseInt($(dom[i]).css('height'));
            if (height < minHeight) {
                minHeight = height;
                index = i;
            }
        }
        console.log(index);
        return index;//返回当前li高度最小的索引值
    }
    $(window).scroll(function() {//监听滚动条加载
        var scrollHeight = $(this).scrollTop();
        var clientHeight = $(window).height();
        var pageHeight = parseInt($(oLi[getMinLi(oLi)]).css('height'));
        if(scrollHeight + clientHeight > pageHeight) {
            getData();
        }
    })
})();