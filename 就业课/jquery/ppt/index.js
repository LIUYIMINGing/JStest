var ppt = {
    len: $('.slider').length,
    $wrap: $('.wrapper'),
    $slider: $('.slider'),
    nowIndex: 0,
    lastIndex: undefined,//存储上一次的位置
    flag: true,
    timer: undefined,
    //入口函数
    init: function () {
        if (this.len > 1) {
            this.createDom(this.len);
            this.bindEvent();
            this.sliderAuto();
        }
    },
    //动态生成小圆点及左右btn
    createDom: function (len) {
        var str = '',
            btnStr = '';
        for (var i = 0; i < len; i++) {
            if (i == 0) {
                str += '<li class="active"></li>'
            } else {
                str += '<li></li>'
            }
        }
        str = '<div class = "slider-order"><ul>' + str + '</ul></div>';
        btnStr = '<div class="slider-btn">\
                    <span class="left-btn"></span>\
                    <span class="right-btn"></span>\
                </div>';
        this.$wrap.append(str).append(btnStr);
    },
    bindEvent: function () {
        // 点击获得index
        // add()方法是给三个dom元素都加上后面的点击事件
        // 点击之后要执行的操作，要加锁判断。
        var self = this;
        $('li').add($('.left-btn')).add($('.right-btn')).on('click', function () {
            if ($(this).attr('class') == 'left-btn') {
                // self.getIndex('left');
                self.tool('left');
            } else if ($(this).attr('class') == 'right-btn') {
                // self.getIndex('right');
                self.tool('right');
            } else {
                // self.getIndex($(this).index());
                self.tool($(this).index());
            }
            // self.changeActive(self.nowIndex);
            // self.$slider.eq(self.lastIndex).trigger('leave');//trigger执行自定义函数
            // self.$slider.eq(self.nowIndex).delay(300).trigger('come');
        });
        this.$slider.on('leave', function () {
            $(this).fadeOut(300).find($('img')).animate({
                width: '0%'
            });
        });
        this.$slider.on('come', function () {
            $(this).fadeIn(300).find($('img')).delay(300).animate({
                width: '40%'
            }, 300, 'linear', function () {
                console.log('img');
                self.flag = true;
                self.sliderAuto();
            });
        })
    },
    tool: function (text) {
        var self = this;
        if (self.flag) {
            // self.flag = false;
            self.getIndex(text);
            if (self.lastIndex !== self.nowIndex) {
                self.changeActive(self.nowIndex);
                self.$slider.eq(self.lastIndex).trigger('leave'); //trigger执行自定义函数
                self.$slider.eq(self.nowIndex).delay(300).trigger('come');
                self.flag = false;
            }
        }
    },
    getIndex: function (dir) {
        this.lastIndex = this.nowIndex;
        if (dir == 'left') {
            // index --
            this.nowIndex = this.nowIndex == 0 ? this.len - 1 : this.nowIndex - 1;
        } else if (dir == 'right') {
            // index ++
            this.nowIndex = this.nowIndex == this.len - 1 ? 0 : this.nowIndex + 1;
        } else {
            this.nowIndex = dir;
        }
        console.log(this.nowIndex);
    },
    changeActive: function (index) {
        $('.active').removeClass('active');
        $('li').eq(index).addClass('active');
    },
    sliderAuto: function () {
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
            self.tool('right');
        }, 3000)
    }
}
ppt.init();