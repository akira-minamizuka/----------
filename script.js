var $bntIcon = $('#btn i')

$('#btn').on('click' ,function(){
    $('body').toggleClass('open')

    // console.log($('body').hasClass('open'))
    // body がopenというクラスを持っているか

    if($('body').hasClass('open')) {
        $bntIcon
        .removeClass('ri-menu-line')
        .addClass('ri-close-line')
    } else {
        $bntIcon
        // jQueryのオブジェクト
        .removeClass('ri-close-line')
        .addClass('ri-menu-line')
    }

})