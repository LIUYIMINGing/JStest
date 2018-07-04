var $ = window.Zepto;
var root = window.player;
var $scope = $(document.body);
var controlManger;
var index = 0;
var songList;
var audio = new root.audioControl();
function bindEvent() {
    $scope.on("play:change",function(event,index) {
        // root.render(songList[index])
        audio.getAudio(songList[index].audio);
        if(audio.status == "play") {
            audio.play();
        }
    })
    $scope.on("click",".prev-btn",function() {
        // if(index === 0) {
        //     index = songList.length - 1; 
        // }else {
        //     index --;
        // }
        var index = controlManger.prev();
        root.render(songList[index])
        $scope.trigger("play:change",index);
    })
    $scope.on("click",".next-btn",function() {
        // if(index === songList.length - 1) {
        //     index = 0;
        // }else{
        //     index ++;
        // }
        var index = controlManger.next();
        root.render(songList[index])
        $scope.trigger("play:change",index);
    })
    $scope.on("click",".play-btn",function() {
        if(audio.status == "play") {
            audio.pause();
        }else {
            audio.play();
        }
        $(this).toggleClass("pause");
    })
}
function getData(url) {
    $.ajax({
        type : "GET",
        url : url,
        success : function(data){
            root.render(data[0]);
            songList = data;
            bindEvent();
            controlManger = new root.controlManger(data.length);
            console.log(data);
            $scope.trigger("play:change",0)
        },
        error : function(data){
            console.log('error');
        }
    })
}
getData("../mock/data.json");