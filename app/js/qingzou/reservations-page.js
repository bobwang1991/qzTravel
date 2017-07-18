/**
 * Created by wangZhi on 2016/8/4.
 */
/*图片切换*/
function choosePic() {
    $('ul.order-banner li:gt(0)').hide();
    $('.tab ul li').click(function () {
        var _index = $(this).index();
        //console.log(1);
        $(this).addClass('on').siblings().removeClass('on');
        $('ul.order-banner li').eq(_index).show().siblings().hide();
    });
}
/*选项卡banner*/
function bannerPic() {
    var _btnDiv = $('.order-banner-btn div');
    var _picUl = $('.tab-show ul');
    var _picLi = $('.tab-show ul li');
    var imgWidth = $('.tab-show ul li').width();
    var index = 0;
    _btnDiv.click(function () {
        if ( _picLi.length >4 ) {
            console.log(1);
            animateBanner();
        }else{
            console.log(2);
        }
    });
    function animateBanner() {
        var i = $(this).index();
        if (i) {
            index++;
            if (index >= _picLi.length - 3) {
                index = 0;
            }
        } else {
            index--;
            if (index < 0) {
                index = _picLi.length - 4;
            }
        }
        _picUl.animate({
            marginLeft: -(imgWidth + 15) * index + 'px'
        }, 500)
    }
}
/*选项卡切换*/
function chooseTab() {
    $(".pc-tab-content .pc-con-tip:gt(0)").hide();
    $('.pc-tab-top ul.pc-tab-title li').click(function () {
        var _index = $(this).index();
        $(this).find('span').addClass('on').parent('li').siblings('li').find('span').removeClass('on');
        $(".pc-tab-content .pc-con-tip").eq(_index).show().siblings().hide();
    });
}
/*按钮固定顶部*/
function fixTopBtn() {
    $(window).scroll(function () {
        var s = $(window).scrollTop();
        if (s > 700) {
            $('.reservations').show();
            $('.header-inside-search').hide();
        } else {
            $('.reservations').hide();
            $('.header-inside-search').show();
        }
    });
}
/*下拉菜单*/
function selectLangue() {
    /* 下拉小时菜单*/
    $(".select-time .select-time-menu").toggle(function () {
        //$(".select-time .select_menu").slideDown();
        //$(".select-time .moren i").css({"transform": "rotate(180deg)"});
        var select_var = $(this).val();
        $(".select-time .moren").find("span").html(select_var);
    }, function () {
        //$(".select-time .moren i").css({"transform": "rotate(0deg)"});
        var select_var = $(this).val();
        $(".select-time .moren").find("span").html(select_var);
    });
    /* 下拉分钟菜单*/
    $(".select-minutes .select-minutes-menu").toggle(function () {
        //$(".select-minutes .select_menu").slideDown();
        //$(".select-minutes .moren i").css({"transform": "rotate(180deg)"});
        var select_var = $(this).val();
        $(".select-minutes .moren").find("span").html(select_var);
    }, function () {
        //$(".select-minutes .moren i").css({"transform": "rotate(0deg)"});
        var select_var = $(this).val();
        $(".select-minutes .moren").find("span").html(select_var);
    });
    /*选择机场下拉菜单*/
    $(".select-langue-plane .select-menu-plane").toggle(function () {
        //$(".select-langue .select_menu").slideDown();
        //$(".select-langue-plane .moren i").css({"transform": "rotate(180deg)"});
        var select_var = $(this).val();
        $(".select-langue-plane .moren").find("span").html(select_var);
    }, function () {
        //$(".select-langue-plane .moren i").css({"transform": "rotate(0deg)"});
        var select_var = $(this).val();
        $(".select-langue-plane .moren").find("span").html(select_var);
    });
}
/*单选按钮*/
function radioInput() {
    $('.radio ul li').click(function (_index) {
        var $index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.notice div').eq($index).show().siblings().hide();
    });
    $('.plane-pick-up ul li').click(function (_index) {
        var $index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
    });
}
/*选择加减按钮*/
function addSubtract() {
    $(".jia").click(function () {
        var nums_jia = $(this).siblings(".num").val();
        var result = parseInt(nums_jia) + 1;
        $(this).siblings(".num").val(result);

    });
    $(".jian").click(function () {
        var nums_jia = $(this).siblings(".num").val();
        if (nums_jia > 1) {
            var result = parseInt(nums_jia) - 1;
            if (result < 1) {
            } else {
                $(this).siblings(".num").val(result);
            }
        }
    });
    $(".reset-jian").click(function () {
        var nums_jia = $(this).siblings(".num").val();
        if (nums_jia >= 0) {
            var result = parseInt(nums_jia) - 1;
            if (result < 0) {
            } else {
                $(this).siblings(".num").val(result);
            }
        }
    });
}
/* 接送机按钮*/
function pickUpDropOff() {
    $('.plane-pick-up  ul li').click(function () {
        var _index = $(this).index();
        $('.pickUp-dropOff div.pickUp').eq(_index).show().siblings().hide();
    });
}
function payPageAll() {
    var hMain = $(window).height();
    var payLi = $('.pc-payment-con ul li');
    var blackShadow = $('.pc-blackShadow');
    var popUpChat = $('.pc-popUp .chat-pay');
    var popUpAmortize = $('.pc-popUp .amortize-pay');
    var popUpClose = $('.amortize-pay-close');
    $('.pc-blackShadow').height(hMain);
    clickLi();
    clickPopUpChatAmortize();
    function clickLi() {
        $('.pc-payment-con ul li').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
        });
    }

    function clickPopUpChatAmortize() {
        payLi.eq(1).click(function () {
            popUpChat.show();
            blackShadow.show();
        });
        payLi.eq(2).click(function () {
            popUpAmortize.show();
            blackShadow.show();
        });
        blackShadow.click(function () {
            popUpChat.hide();
            popUpAmortize.hide();
            blackShadow.hide();
        });
        popUpClose.click(function () {
            popUpChat.hide();
            popUpAmortize.hide();
            blackShadow.hide();
        });
    }
}
function payPageOnlyChat() {
    var hMain = $(window).height();
    var payLi = $('.pc-payment-con ul li');
    var blackShadow = $('.pc-blackShadow');
    var popUpChat = $('.pc-popUp .chat-pay');
    var popUpClose = $('.amortize-pay-close');
    $('.pc-blackShadow').height(hMain);
    clickLi();
    clickPopUpChat();
    function clickLi() {
        $('.pc-payment-con ul li').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
        });
    }

    function clickPopUpChat() {
        payLi.eq(1).click(function () {
            popUpChat.show();
            blackShadow.show();
        });
        blackShadow.click(function () {
            popUpChat.hide();
            blackShadow.hide();
        });
        popUpClose.click(function () {
            popUpChat.hide();
            blackShadow.hide();
        });
    }
}