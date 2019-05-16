// 购物车

define(['config'], function() {
    require(['jquery', 'jqcookie'], function() {

        (function($) {
            class cart {
                constructor() {
                    this.$sid = location.search.substring(1).split('=')[1]; //获取地址栏的sid
                    this.arrcookie = document.cookie.split('; '); //获取cookie字符串,转为数组
                    this.sid = [];
                    this.num = [];
                    this.all = $('#goods_title .all');
                    this.inputs = null;
                }
                init() {
                    let _this = this;
                    //console.log(this.arrcookie); //["number8=2", "number7=4", "number6=3"]
                    this.gooditem();

                    // 全选
                    $('#goods').on('click', function(e) {
                        if (e.target.nodeName == "A") {
                            if (window.confirm("您确定要删除吗？")) {
                                let $son = $(e.target).parents('tr');
                                let $father = $(e.target).parents('#goods_list table');
                                let $sonsid = $son.attr('trsid');
                                let $falsenum = $son.find('td').eq(3).html();
                                // console.log($falsenum);
                                // console.log($sonsid);
                                $.cookie("number" + $sonsid, $falsenum, { expires: -1 });
                                //console.log("number" + $sonsid);
                                $father[0].removeChild($son[0]);
                            }
                        } else if (e.target.nodeName == "INPUT") {
                            //console.log(e.target);
                            _this.inputs = $(e.target).parents('#goods').find('input').not('.all');
                            //console.log(_this.inputs);
                            // console.log(_this.all);
                            if (_this.all.prop('checked')) {
                                _this.inputs.prop('checked', true);
                            } else {
                                _this.inputs.prop('checked', false);
                            }
                        }
                    })


                    $('#goods_list').on('click', function(e) {

                        if (e.target.nodeName == 'INPUT') {
                            _this.inputs = $(e.target).parents('#goods').find('input').not('.all');
                            console.log(_this.inputs);
                            console.log($(e.target).prop('checked'));

                            if ($(e.target).prop('checked')) {
                                $(e.target).prop('checked', false);
                            } else {
                                $(e.target).prop('checked', true);
                            }
                            //$(e.target).prop('checked', !$(e.target).prop('checked'));

                            if (_this.inputs.length == $('input:checked').not('.all').length) {
                                _this.all.prop('checked', true);
                            } else {
                                _this.all.prop('checked', false);
                            }
                        }
                    })
                }
                gooditem() {
                    let _this = this;
                    $.each(this.arrcookie, function(index, value) {
                            // console.log(index, value)// 0 "number8=2"
                            let importantarr = value.substring(6).split('='); //将sid和num拆分出来
                            //console.log(importantarr);
                            _this.sid.push(importantarr[0]);
                            _this.num.push(importantarr[1]);
                            //console.log(_this.sid);
                            //console.log(_this.num);
                        })
                        //$.each(this.sid, function(index, value) {
                        //console.log(this.sid[index]);
                    $.ajax({
                        url: "http://10.31.163.45/projectname/php/cart.php",

                        dataType: 'json',
                        success: function(data) {
                            //console.log(data);
                            $.each(_this.sid, function(index, value) {
                                let $htmlstr = '';
                                $.each(data, function(index1, value1) {
                                    if (value == value1.sid) {
                                        let addprice = (value1.price) * (_this.num[index]);
                                        $htmlstr =
                                            `
                                        <tr trsid=${value1.sid}>
                                            <td style="width:10%"><input type="checkbox"></td>
                                            <td style="width:30%;position:relative;" class="clear">
                                                <div class="goodimg">
                                                    <img src="${value1.url}" alt="">
                                                </div>
                
                                                <div class="goodcontent">
                                                    ${value1.title}
                                                </div>
                                            </td>
                                            <td style="width:15%" class="price">￥${value1.price}</td>
                                            <td style="width:15%">${_this.num[index]}</td>
                                            <td style="width:15%" class="addprice">${addprice}</td>
                                            <td style="width:15%">
                                                <a href="javascript:;" class="del">删除</a>
                                            </td>
                                        </tr>
                                        `
                                    }
                                })
                                $('#goods_list table').html($('#goods_list table').html() + $htmlstr);
                            })
                        }
                    })
                }
                selectall() {

                }

            }
            new cart().init();

        })(jQuery);
    })
})