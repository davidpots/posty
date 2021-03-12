$(window).scroll(function(){

  // Calculate the distance of an element from the top of the browser window
  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('#right-side-nav').offset().top,
      distance      = (elementOffset - scrollTop);

  console.log(scrollTop);

  if ( scrollTop > 150 ) {
    $('#right-side-nav').addClass('fixed');
  } else {
    $('#right-side-nav').removeClass('fixed');
  }

 });

$(document).ready(function(){

  $('.filter-item-wrapper .filter-item').click(function(){
    $('.filter-item--active').removeClass('filter-item--active');
    $(this).addClass('filter-item--active');

    var clickedFilter = $(this).attr('data-filterName');

    if ( $(this).hasClass('filter-item--all') ) {
      $('.filter-items--category .tile-item').show();
    } else {

      $('.filter-items--category .tile-item').each(function() {
        if ( $(this).attr('data-category') == clickedFilter ) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });

    }

    return false;

  });


});
