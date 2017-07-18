/**
 * Created by wangZhi on 2016/7/27.
 */
/*底部展开动画*/
(function () {
    var _ddGuide = $(".foot-guide");
    var _qrSpan = _ddGuide.find("span");
    var onOff = true;
    _ddGuide.click(function (e) {
        e.stopPropagation();
        onOff ? _qrSpan.show() : _qrSpan.hide();
        onOff = !onOff;
    });
    $(window).scroll(function () {
        var s = $(window).scrollTop();
        if (s < 4000) {
            if (onOff) {
            }else{
                _qrSpan.hide();
                onOff = !onOff;
            }
        }
    });
    $(document).click(function () {
        if (onOff) {
        }else{
            _qrSpan.hide();
            onOff = !onOff;
        }
    });
})();