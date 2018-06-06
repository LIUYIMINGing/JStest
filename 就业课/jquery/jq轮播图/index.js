// 点击切换图片  --> 改变left值 
// 自动轮播  --> 改变left值
// nowIndex  --> prevBtn --> nowIndex --;
// nowIndex  --> nextBtn --> nowIndex ++;
// 点击 小圆点  $(this).index()
// 自动播放  -->  隔一段时间点击nextBtn
var nowIndex = 0,
    len = 5,
    itemWidth = 1366,
    flag = true,
    timer;

init();

function init() {
    bindEvent();
    sliderAuto();
}

function bindEvent() {
    $('.order li').add('.prevBtn').add('.nextBtn').on('click', function () {
        if ($(this).attr('class') == 'prevBtn') {
            // nowIndex --
            move('prev');
        } else if ($(this).attr('class') == 'nextBtn') {
            //  nowIndex ++
            move('next')
        } else {
            var index = $(this).index();
            move(index);
        }
        changeStyle();
    });
    $('.wrapper').on('mouseenter',function() {
        $('.btn').show();
        clearTimeout(timer);
    }).on('mouseleave',function() {
        $('.btn').hide();
        sliderAuto();
    })
}

function move(dir) {
    if (flag) {
        flag = false;
        if (dir == 'prev' || dir == 'next') {
            if (dir == 'prev') {
                if (nowIndex == 0) {
                    $('.img-box').css('left', -(len * itemWidth));
                    nowIndex = len - 1;
                } else {
                    nowIndex --;
                }
            } else {
                if (nowIndex == 4) {
                    $('.img-box').animate({
                        'left':-(len * itemWidth)
                    },function(){
                        $(this).css('left', '0')
                    });
                    nowIndex = 0;
                } else {
                    nowIndex ++;
                }
            }
        } else {
            nowIndex = dir;
        }
        slider();
    }

}

function slider() {
    $('.img-box').animate({
            'left': -(itemWidth * nowIndex)
        },
        function () {
            sliderAuto();
            flag = true;
        }
    )
}

function changeStyle() {
    $('.active').removeClass('active');
    $('.order li').eq(nowIndex).addClass('active');
}
function sliderAuto() {
    clearTimeout(timer)
    timer = setTimeout(function() {
        move('next');
    },2000);
    changeStyle();
}