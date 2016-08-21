var main = function() {
  $('.day').click(function(){
    $(this).next().toggleClass('hourly');
 		$(this).find('.weekday span').toggleClass('glyphicon-minus');
    });
  };


$(document).ready(main);