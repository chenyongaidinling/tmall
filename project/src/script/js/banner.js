// 轮播图
define(['config'], function() {
    require(['jquery'], function() {
        //轮播图效果
        (function($) {
            class runimg {
                constructor() {
                    this.mainBanner = $('.main_banner');
                    this.picList = $('.main_banner .position');
                    this.btnList = $('.main_banner .btn li');
                    this.timer = null;
                    this.num = 0;

                }
                init() {
                    let _this = this;
                    this.btnList.on('mouseenter', function() {
                        _this.btnList_over(this); //this代表当前的li，形参传到btnList_over方法。
                    })
                    this.automatic(); //自动轮播
                    this.mainBanner.hover(function() {
                        _this.over();
                    }, function() {
                        _this.out();
                    });
                }
                btnList_over(e) {
                    // 鼠标移入小btn，当前的btn添加类，对应索引的图片显示出来。
                    this.num = $(e).index(); //当前li的索引。
                    $(e).addClass('run_active').siblings().removeClass('run_active');
                    this.picList.eq(this.num).css('opacity', 1).siblings().css('opacity', 0);
                }

                automatic() {
                    // 自动轮播
                    let _this = this;
                    this.timer = setInterval(function() {
                        _this.num++;
                        if (_this.num > _this.picList.length - 1) {
                            _this.num = 0;
                        }
                        _this.btnList.eq(_this.num).addClass('run_active').siblings().removeClass('run_active');
                        _this.picList.eq(_this.num).css('opacity', 1).siblings().css('opacity', 0);
                    }, 2000)
                }
                over() {
                    // 鼠标移入main_banner，定时器关闭
                    clearInterval(this.timer);
                }
                out() {
                    // 鼠标移出main_banner，定时器开启
                    this.automatic()
                }

            }
            new runimg().init();
        })(jQuery);
    })
});