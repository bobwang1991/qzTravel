/**
 * Created by wangZhi on 2016/7/27.
 */
(function () {
    var _ddGuide = $(".become-guide");
    var _code = _ddGuide.find("span");
    var _searchInput = $('.header-inside-search input');
    var onOff = true;
    _ddGuide.click(function (e) {
        e.stopPropagation();
        onOff ? _code.show() : _code.hide();
        onOff = !onOff;
    });
    $(document).click(function () {
        if (onOff) {
        } else {
            _code.hide();
            onOff = !onOff;
        }
    });
    _searchInput.focus(function () {
        $('.slideDown-search').fadeIn('fast');
    });
    _searchInput.blur(function () {
        $('.slideDown-search').delay(200).fadeOut('fast');
    });
})(jQuery);