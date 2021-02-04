$(window).scroll(function(){

  // Calculate the distance of an element from the top of the browser window
  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('.nav').offset().top,
      distance      = (elementOffset - scrollTop);

  console.log(scrollTop);

  if ( scrollTop > 120 ) {
    $('.nav').addClass('fixed');
  } else {
    $('.nav').removeClass('fixed');
  }

 });
