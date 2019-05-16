// 放大镜效果
define(['config'], function() {
    require(['jquery'], function() {
        (function($) {
            class scale {
                constructor() {
                    this.wrap = $('.wrap');
                    this.spic = $('.wrap #spic');
                    this.sf = $('#sf');
                    this.bpic = $('#bpic');
                    this.bf = $('#bf');
                    this.list = $('#list');
                    this.ul = $('#list ul');
                    this.right = $('#btn-right');
                    this.left = $('#btn-left');
                    this.scale = $('#spic .iconfont');
                    //设定可见的li的个数
                    this.showlength = 6;

                }
                init() {
                    let _this = this;
                    //计算一个li的宽度。
                    this.liwidth = this.list.outerWidth() / 6;
                    //console.log(this.liwidth);
                    //计算ul的宽度。
                    //console.log(this.li.length);
                    this.ul.width(this.liwidth * 10);

                    this.spic.hover(function() {
                        _this.over();
                    }, function() {
                        _this.out();
                    });
                    //利用事件委托，给ul添加点击事件，将对应的li里的img的src给大图和小图
                    this.ul.on('click', function(e) {
                        //console.log($('#list ul li'));
                        console.log(e.target);
                        let $imgurl = $(e.target).attr('src');
                        let $li = $(e.target).parent();
                        let $listli = $(e.target).parents('ul').find('li');
                        // 计算一个li的宽度
                        // let $liwidth = $li.outerWidth(true);
                        // 计算ul的宽度
                        // let $ulwidth = $listli.length * $liwidth;
                        // console.log($li.outerWidth(true));
                        // console.log($listli);
                        // console.log($imgurl);

                        // 将li里的img路径给小图和大图
                        _this.spic.find('img').attr('src', $imgurl); //方法里两个参数代表设置
                        _this.bpic.attr('src', $imgurl);

                        if ($listli.length < _this.showlength) {
                            _this.right.css('color', '#fff');
                        };
                        //右边箭头效果
                        _this.right.on('click', function() {
                            if ($listli.length > _this.showlength) {
                                _this.showlength++;
                                _this.left.css('color', '#333');
                                if ($listli.length == _this.showlength) {
                                    _this.right.css('color', '#fff');
                                }
                            }
                            _this.ul.animate({
                                left: -(_this.showlength - 6) * _this.liwidth
                            })
                        });

                        // 左边箭头效果
                        _this.left.on('click', function() {
                            if (_this.showlength > 6) {
                                _this.showlength--;
                                _this.right.css('color', '#333');
                                if (_this.showlength == 6) {
                                    _this.left.css('color', '#fff');
                                }
                            }
                            _this.ul.animate({
                                left: -(_this.showlength - 6) * _this.liwidth
                            })
                        })
                    });

                }
                over() {
                    let _this = this;
                    this.scale.css('opacity', 0);
                    this.sf.css('visibility', 'visible');
                    this.bf.css('visibility', 'visible');
                    //计算sf的尺寸
                    this.sf.width(this.bf.width() * this.spic.width() / this.bpic.width());
                    this.sf.height(this.bf.height() * this.spic.height() / this.bpic.height());
                    this.bili = this.bpic.width() / this.spic.width();
                    this.spic.on('mousemove', function(e) {
                        _this.move(e);
                    })
                }
                out() {
                    this.scale.css('opacity', 1);
                    this.sf.css('visibility', 'hidden');
                    this.bf.css('visibility', 'hidden');
                }
                move(e) {
                    let l = e.pageX - this.wrap.offset().left - this.sf.width() / 2;
                    let t = e.pageY - this.wrap.offset().top - this.sf.height() / 2;
                    if (l <= 0) {
                        l = 0;
                    } else if (l >= this.spic.width() - this.sf.width()) {
                        l = this.spic.width() - this.sf.width();
                    }
                    if (t <= 0) {
                        t = 0;
                    } else if (t >= this.spic.height() - this.sf.height()) {
                        t = this.spic.height() - this.sf.height();
                    }
                    this.sf.css({
                        left: l,
                        top: t
                    })
                    this.bpic.css({
                        left: -this.bili * l,
                        top: -this.bili * t
                    })
                }
            }

            new scale().init();

        })(jQuery);
    })
})