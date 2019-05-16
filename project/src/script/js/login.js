//登录
define(['config'], function() {
    require(['jquery', 'jqcookie'], function() {
        (function($) {
            class login {
                constructor() {
                    this.code = $('.login_by_code'); //扫码登录对象
                    this.password = $('.login_by_password'); //密码登录对象
                    this.codebox = $('.codebox'); //扫码登录界面
                    this.passwordbox = $('.passwordbox'); //密码登录界面
                    this.btn = $('#btn'); //登录按钮
                    this.userName = $('.header_nav .left b'); //用户
                }
                init() {
                    let _this = this;
                    this.code.on('click', function() {
                        _this.codeBox();
                    });
                    this.password.on('click', function() {
                        _this.passwordBox();
                    });

                    this.btn.on('click', function() {
                        _this.ajaxfn();
                    });

                    this.user();

                }
                codeBox() {
                    this.codebox.show().siblings().not('.img').hide();
                }
                passwordBox() {
                    this.passwordbox.show().siblings().not('.img').hide();
                }

                ajaxfn() {
                    let $user = $('.loginbycode #username').val();
                    let $pass = $('.loginbycode #password').val();
                    console.log($pass);
                    $.ajax({
                        type: 'post',
                        url: "http://10.31.163.45/projectname/php/login.php",
                        data: {
                            username: $user,
                            password: $pass
                        },
                        success: function(data) {
                            console.log(data);
                            if (data == 1) { //用户名或者密码错误
                                $.cookie('username', $user, { expires: 7 });
                                $.cookie('password', $pass, { expires: 7 });
                                location.href = 'http://10.31.163.45/projectname/src/index.html';

                            } else {
                                $('.error').html('用户名或者密码错误');
                                $('#password').val('');
                            }
                        }
                    })
                }

                user() {
                    let username = $.cookie('username');
                    this.userName.html(username);
                }

            }
            new login().init();
        })(jQuery);

    })
})