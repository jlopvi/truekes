$(function(){
    var  $body = $('body');
    var  $dropBox = $('.drop-box');
    $dropBox.on('click', showDrop);

});


function hiddenDrop(ele)
{
    console.log('ocualtar')
    var $this = $(ele);
    var $box = $('#'+$this.attr('data-box'));
    $this.removeClass('active');
    $box.removeClass('active');

}

function showDrop(e)
{
    var $this = $(this);
    $('.drop-box').removeClass('active');

    $('.box').removeClass('active');
    $('body').one('click',function(){
        hiddenDrop($this);
    })
    $('.box').click(function (event) {
        console.log('clicbox')
        event.stopPropagation()
    })
    e.stopPropagation();
    e.preventDefault();
    var $box = $('#'+$this.attr('data-box'));
    $this.find('.menu-notif')
        .removeClass('new');
    $this.addClass('active');
    $box.addClass('active');
}
