//tab切换
define(['config'], function() {
    require(['jquery'], function() {
        // 轮播图上的商品分类切换
        (function($) {
            class tab {
                constructor() {
                    this.title = $('.main_subnav ul li');
                    this.icon = $('.main_subnav ul li i');
                    this.title_item = $('.main_subnav ul li a');
                    this.content = $('.main_subnav_content');
                    this.num = 0;
                }
                init() {
                    let _this = this;
                    this.title.hover(function() {
                        _this.over(this);
                    }, function() {
                        _this.out(this);
                    });
                }
                over(e) {
                    this.num = $(e).index();
                    $(e).addClass('main_subnav_active').siblings().removeClass('main_subnav_active');
                    this.icon.eq(this.num).css('color', 'orange');
                    this.title_item.eq(this.num).css('color', 'orange');
                    this.content.eq(this.num).show();
                }
                out(e) {
                    this.num = $(e).index();
                    this.title.removeClass('main_subnav_active');
                    this.content.eq(this.num).hide();
                    this.icon.eq(this.num).css('color', '#fff');
                    this.title_item.eq(this.num).css('color', '#fff');
                }
            }
            new tab().init();
        })(jQuery);
        //天猫超市，今日疯抢、量贩装切换
        (function($) {
            class tab {
                constructor() {
                    this.title = $('.market_content .pic_right .tab_title li');
                    this.content = $('.market_content .pic_right .tab_detail');
                    this.tab = $('.market_content .pic_right .tab'); //整个tab盒子
                    this.timer = null;
                    this.num = 0;
                }
                init() {
                    let _this = this;
                    this.title.hover(function() {
                        _this.over(this);
                    }, function() {
                        _this.out(this);
                    });
                    this.automatic();

                }
                over(e) {
                    this.num = $(e).index();
                    $(e).addClass('tab_title_bg').siblings().removeClass('tab_title_bg');
                    this.content.eq(this.num).show().siblings().hide();
                    clearInterval(this.timer);
                }
                out(e) {
                    this.num = $(e).index();
                    $(e).addClass('tab_title_bg').siblings().removeClass('tab_title_bg');
                    this.content.eq(this.num).show().siblings().hide();
                    this.automatic();
                }
                automatic() {
                    // 自动轮播
                    let _this = this;
                    this.timer = setInterval(function() {
                        _this.num++;
                        if (_this.num > _this.title.length - 1) {
                            _this.num = 0;
                        }
                        _this.title.eq(_this.num).addClass('tab_title_bg').siblings().removeClass('tab_title_bg');
                        _this.content.eq(_this.num).css('display', 'block').siblings().css('display', 'none');
                    }, 2000)
                }


            }
            new tab().init();
        })(jQuery);
    });
});