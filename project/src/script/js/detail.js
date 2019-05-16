//渲染详情页
define(['config'], function() {
    require(['jquery'], function() {
        (function($) {

            let $sid = location.search.substring(1).split('=')[1];
            //console.log($sid);
            $.ajax({
                url: "http://10.31.163.45/projectname/php/detail.php",
                data: {
                    sid: $sid
                },
                dataType: 'json',
                success: function(data) {
                    //console.log(data);
                    let $listarr = data.urllist.split(',');
                    let $shoping_cart = $('#right .show_cart');
                    //console.log($listarr);
                    let $listStr = '';
                    $.each($listarr, function(index, value) {
                        $listStr += '<li><img src="' + value + '"></li>';
                    });
                    // 数据追加
                    $('#ulist #list ul').html($listStr);
                    $('#spic img').attr('src', data.url);
                    $('#bf img').attr('src', data.url);
                    $('.box_right h3').html(data.title);
                    $('.box_right span').html(data.price);
                    //$('.box_right .number em').html(data.num);
                    //将索引传给购物车
                    $shoping_cart.attr("href", "http://10.31.163.45/projectname/src/cart.html?sid=" + data.sid);
                }
            })
        })(jQuery);
    });
});