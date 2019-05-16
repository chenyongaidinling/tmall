//渲染猜你喜欢 懒加载
define(['config'], function() {
    require(['jquery', 'lazyload'], function() {
        (function($) {
            $.ajax({
                url: "http://10.31.163.45/projectname/php/index.php",

                success: function(data) {
                    var data = eval('(' + data + ')');
                    var $htmlStr = '';
                    $.each(data, function(index, value) {
                        $htmlStr +=
                            `
                        <li class="item left">
                            <a href="http://10.31.163.45/projectname/src/details.html?sid=${value.sid}" target="_blank" style="display:inline-block;width:236px;height:316px;">
                                <div class="item_pic">
                                    <img class="lazy" data-original="${value.url}" width="185" height="185" alt="">
                                </div>
                                <div class="item_title">${value.title}</div>
                                <div class="item_price">￥${value.price}</div>
                            </a>
                        </li>
                        `
                    })
                    $('.guess_like .market_content ul').html($htmlStr);

                    //懒加载
                    $(function() {
                        $(".lazy").lazyload({
                            effect: "fadeIn"
                        });
                    });
                }
            });

        })(jQuery);
    });
});