$( document ).ready(function() {
    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});
	$('button').hover(function() {
        $(this).stop().animate({"color":"#23527c","background-color":"#ddd","border-color": "#ddd"}, 600);
        }, function () {
        $(this).stop().animate({"color":"#23527c","background-color":"#aaa","border-color": "#aaa"}, 600);
    });
  
  $('img').hover(function() {
        $(this).stop().animate({"opacity":1}, 300);
        }, function () {
        $(this).stop().animate({"opacity":0.7}, 300);
    });
  });