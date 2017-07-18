/**
 * Created by wangZhi on 2016/7/15.
 */
function changeBanner() {
    var $picLI = $('#change-banner .change-pic li');
    var $picUl = $('#change-banner .change-pic ul');
    var $btnDiv = $('#change-banner .btn div');
    var imgWidth = $('#change-banner .change-pic li').width();
    var divWidth = $('#change-banner .change-pic').width();
    var index = 0;
    $btnDiv.click(function () {
        var i = $(this).index();
        if (i) {
            index++;
            if (index >= Math.ceil($picLI.length/4)) {      /*Math.ceil（） 向上取整*/
                index = 0;
            }
        }else{
            index--;
            if (index < 0) {
                index = Math.floor($picLI.length/4);        /*Math.ceil（） 向下取整*/
            }
        }
        $picUl.animate({
            marginLeft: -(divWidth+5)*index + 'px'
        },500);
    });
}