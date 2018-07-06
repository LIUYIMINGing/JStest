// 实现渲染
(function($,root){
    var $scope = $(document.body);
    function renderInfo(info) {//加载音乐信息
        var html = '<div class="song-name">' + info.song + '</div>\
                    <div class="singer-name">' + info.singer + '</div>\
                    <div class="album-name">' + info.album + '</div>';
        $scope.find(".song-info").html(html);
    }
    // function renderImg(src) {
    //     var img = new Image();
    //     img.src = src;
    //     img.onload = function(){
    //         $scope.find(".song-img img").attr("scr",src);!!!!!!!!!!!!  scr != src !!!!!!!!
    //     }
    // }
    function renderImg(src) {//加载音乐配图
        var img = new Image();
        img.src = src;
        img.onload = function() {
            root.blurImg(img,$scope);
            $scope.find(".song-img img").attr("src",src)
        }
    }
    function renderIsLike(islike) {//处理是否关注的图标状态
        if(islike) {
            $scope.find(".like-btn").addClass("liking");
        }else {
            $scope.find(".like-btn").removeClass("liking");
        }
    }
    root.render = function(data) {
        renderInfo(data);
        renderImg(data.image);
        renderIsLike(data.isLike)
    }//在这里把在本js文件里写的方法赋到root上，root其实就是window.player
})(window.Zepto,window.player ||(window.player= {}))
// 通过 window.player去暴露函数

