$( document ).ready(function() { 
    $('a').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});
  $('.content >ul>li:even').css('color','#2B407E');
  
	$('button').hover(function() {
        $(this).stop().animate({"color":"#23527c","background-color":"#ddd","border-color": "#ddd"}, 600);
        }, function () {
        $(this).stop().animate({"color":"#23527c","background-color":"#aaa","border-color": "#aaa"}, 600);
    });
 $('.round-anchor').hover(function() {
        $(this).stop().animate({"color":"#eee"}, 300);
        }, function () {
        $(this).stop().animate({"color":"#ccc"}, 300);
 
    });
    });
