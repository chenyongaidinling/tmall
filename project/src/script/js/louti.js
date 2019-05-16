// 顶部悬浮和楼梯效果

define(['config'], function() {
    require(['jquery'], function() {
        //顶部悬浮效果
        (function($) {
            $(window).on('scroll', function() {
                var $top = $(window).scrollTop(); //滚动条距离
                if ($top >= 800) {
                    $('.hidden_search').stop(true).animate({
                        top: 0
                    })
                } else {
                    $('.hidden_search').stop(true).animate({
                        top: -50
                    })
                }
            })
        })(jQuery);

        // 鼠标移入li的效果，li加边框，图片透明度变化


        //左边楼梯效果
        (function($) {
            //定义变量
            var $loutinav = $('#left');
            var $loutili = $('#left li').not('.ignore');
            var $louceng = $('#main .main_tmall');

            $(window).on('scroll', function() {
                var $top = $(window).scrollTop(); //滚动条距离
                if ($top >= 1000) {
                    $loutinav.show();
                } else {
                    $loutinav.hide();
                }
                $louceng.each(function(index, element) {
                    var $loucengTop = $(element).offset().top; //每个楼层的top值
                    if ($loucengTop > $top) {
                        $loutili.removeClass('louti_active');
                        $loutili.eq(index).addClass('louti_active');
                        return false;
                    }
                });
            });
            // console.log($loutili.length);
            // console.log($louceng.length);
            //点击楼梯导航，跳到对应楼层

            $loutili.on('click', function() {
                $(this).addClass('louti_active').siblings().removeClass('louti_active');
                var $top = $louceng.eq($(this).index('#left li') - 1).offset().top;
                $('html,body').animate({
                    scrollTop: $top
                });
                //console.log($(this).index('#left li'));
            });
            //回到顶部
            $('.last').on('click', function() {
                $('html,body').animate({
                    scrollTop: 0
                })
            });
        })(jQuery);

        //右边楼梯效果
        (function($) {
            //鼠标移入a标签，right_louti_title透明度变化并出现，鼠标移出就消失。
            let $aList = $('#right a');
            let $title = $('#right .right_louti_title');
            let $shoping_cart = $('#right .show_cart');

            $shoping_cart.attr("href", "http://10.31.163.45/projectname/src/cart.html");

            $aList.each(function(index, element) {
                //$(this)当前的a
                //console.log($(this).index('#right a'));
                $(this).hover(function() {
                    if ($(this).index('#right a') == 7) {
                        $('.right_louti_code').show();
                    } else {
                        $title.eq($(this).index('#right a')).stop(true).animate({
                            opacity: 1,
                            right: 35
                        })
                    }

                }, function() {
                    $('.right_louti_code').hide();
                    $title.eq($(this).index('#right a')).stop(true).animate({
                        opacity: 0,
                        right: 100
                    })
                });
            });
            //点击回到顶部，回到顶部
            $('.return_top').on('click', function() {
                $('html,body').animate({
                    scrollTop: 0
                })
            });
        })(jQuery);
    })


})