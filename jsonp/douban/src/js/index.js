(function () {
    var $submit = $('.submit'),
        $input = $('.input'),
        $searchList = $('.search_list');
    $input.on('input', function (e) {
        e.preventDefault();
        var value = $(this).val();
        // console.log(value);
        ajaxData(value);

    })


    function ajaxData(value) {
        // $.ajax({
        //     type: 'GET',
        //     url: 'https://api.douban.com/v2/music/search',
        //     data: 'q=' + value + '&count=7',
        //     dataType: 'jsonp',
        //     success: addItem
        // })
        $.ajax({
            type: 'GET',
            url: 'http://localhost/douban/src/js/data.json',//mac上路径需要改
            data: 'q='+value+'&count=7',//data会自动拼接到上面url后面
            success: addItem
        })
    }
    function addItem(data) {
        // console.log(data)
        var dataList = data.musics;
        var str = '';
        if (dataList.length > 0) {
            dataList.forEach(function (ele, index) {  
                var src = getImage(ele.image);
                str += '<li>\
                            <a href="https://music.douban.com/subject/'+ ele.id + '">\
                                <img src="'+ src + '" alt="">\
                                <div>\
                                    <em>'+ ele.title + '</em>\
                                    <p>'+ ele.author[0].name + '</p>\
                                </div>\
                            </a>\
                        </li>'
            })
            $searchList.html($(str));
        }

    };
    function getImage(url){
        // 把现在的图片连接传进来，返回一个不受限制的路径
        if (url !== undefined) {
            // https://images.weserv.nl/?url=
            // https://                      img3.doubanio.com/view/subject/s/public/s3924386.jpg
            // https://images.weserv.nl/?url=img3.doubanio.com/view/subject/s/public/s3924386.jpg
            // return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
            var reg = /https:\/\//g;
            return url.replace(reg,'https://images.weserv.nl/?url=')
        }
    }
})()