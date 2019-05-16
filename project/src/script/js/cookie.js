// 详情页数量加减,存入cookie
define(['config'], function() {
    require(['jquery', 'jqcookie'], function() {

        (function($) {
            // 详情页数量加减


            class numchange {
                constructor() {
                    this.num_box = $('.box_right .number em'); //数量的盒子
                    this.num = $('.box_right .number em').html(); //数量
                    this.reduce = $('.box_right .number strong .reduce');
                    this.add = $('.box_right .number strong .add');
                    this.submit = $('.box_right button');
                    this.sidarr = []; //存放商品的sid
                    this.numarr = []; //存放商品的数量
                    this.sid = location.search.substring(1).split('=')[1]; //当前商品的sid
                    // $.cookie('sidarr', this.sidarr, { expires: 7 });
                    // $.cookie('numarr', this.numarr, { expires: 7 });

                }
                init() {
                    let _this = this;

                    this.add.on('click', function() {
                        _this.addnumber();
                    })
                    this.reduce.on('click', function() {
                        _this.reducenumber();
                    })
                    this.submit.on('click', function() {
                        _this.joincart();
                        //_this.getcookie();
                    })

                    // console.log(this.sid);
                    // console.log(typeof this.sid);
                    // this.sidarr.push(this.sid);
                    // $.cookie('sidarr', this.sidarr, { expires: 7 });
                    //console.log($.cookie('sidarr')) //string;
                }
                getcookie() {
                    // this.sidarr.push(this.sid);
                    // $.cookie('sidarr', this.sidarr, { expires: 7 });
                    // 获取cookie进行sid比对，判断是否第一次
                    if ($.cookie('sidarr').includes(this.sid)) {
                        // 存在

                    } else {
                        // 不存在

                        //this.sidarr.push(this.sid);
                        this.sidarr += this.sidarr.push(this.sid);
                        $.cookie('sidarr', this.sidarr, { expires: 7 });
                        $.cookie('numarr', this.num, { expires: 7 });
                        // console.log(typeof $.cookie('sidarr'));
                        // console.log($.cookie('sidarr'));
                    }
                }
                addnumber() {
                    // 数量加1
                    this.num++;
                    this.num_box.html(this.num);
                }
                reducenumber() {
                    // 数量减1
                    if (this.num > 1) {
                        this.num--;
                        this.num_box.html(this.num);
                    } else if (this.num == 1) {
                        this.num_box.html(this.num);
                    }
                }
                joincart() {
                    // 加入购物车 ,                  
                    $.cookie("number" + this.sid, this.num, { expires: 7 });
                    //$.cookie('sid', this.sid, { expires: 7 });
                    console.log($.cookie("number " + this.sid))

                }
            }
            new numchange().init();
        })(jQuery);
    })
}) 