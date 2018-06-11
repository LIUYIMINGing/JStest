
        $.ajax({
            // key--value
            type:'GET/POST',//发送数据请求的类型;GET:请求；POST:提交       *
            url: './data.json',//路径                                  *
            async: true,//规定请求是否是异步的,不设置默认为true;
            beforeSend: function(data) {//在发送数据请求前，根据状态执行
            },
            cache: true/false, //缓存
            // 当dataType的格式是script或者jsonp的时候默认为false，不进行缓存
            dataType: xml/html/script/json/jsonp/text,//服务器返回的数据类型
            complete: function(data){//请求结束执行，不论请求成功或者失败
                // data.status    根据返回的值判断执行的代码
            },
            success: function(data) {//返回成功后执行

            },
            error: function (data) {//返回失败后执行

            },
            context: moren,//用于设置ajax回调函数的上下文，默认为document.body
            contentType: string,//发送的信息至服务器时内容的编码类型 
        })
  
