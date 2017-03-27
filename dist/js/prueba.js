$(function(){
    console.log('ya')
    var  $body = $('body');
    var  $dropBox = $('.drop-box');

    $body.click(hiddenDrop);

    $dropBox.on('click', showDrop);
});


function hiddenDrop(ele)
{
    var $this = ele;
    var $box = $('#'+$this.attr('data-box'));
    $this.removeClass('active');
    $box.removeClass('active');
}

function showDrop(e)
{
    var $this = $(this);
    var $box = $('#'+$this.attr('data-box'));
    $this.addClass('active');
    $box.addClass('active');
    $('html').one('click', hiddenDrop($this));
}
