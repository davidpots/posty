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

  // Post firehose stuff
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

  // Post Gallery - side filters

  var activeVertical = "All";
  var activeCategory = "All";
  $('.post-filter-link').click(function(){
    if ( $(this).hasClass('post-filter-link--vertical') ) {
      activeVertical = $(this).data('vertical');
      $('.post-filter-link--vertical').removeClass('post-filter-link--active');
      $('.post-filter-link--vertical[data-vertical="' + activeVertical + '"]').addClass("post-filter-link--active");

      if ( activeVertical == "All" ) {
        $('.tile').show();
        $('.post-filter-link--category').removeClass('post-filter-link--active');
        $('.post-filter-link--category[data-category="All"]').addClass('post-filter-link--active');
      } else {
        $('.tile').hide();
        $('.tile[data-vertical="' + activeVertical + '"]').show();

        // make the OTHER filter go back to "All"
        $('.post-filter-link--category').removeClass('post-filter-link--active');
        $('.post-filter-link--category[data-category="All"]').addClass('post-filter-link--active');

        // if (activeCategory != "All") {
        //   $('.tile').hide();
        //   $('.tile[data-category="' + activeCategory + '"]').show();
        // }
      }

    }
    if ( $(this).hasClass('post-filter-link--category') ) {
      activeCategory = $(this).data('category');
      $('.post-filter-link--category').removeClass('post-filter-link--active');
      $('.post-filter-link--category[data-category="' + activeCategory + '"]').addClass("post-filter-link--active");

      if ( activeCategory == "All" ) {
        $('.tile').show();
        $('.post-filter-link--vertical').removeClass('post-filter-link--active');
        $('.post-filter-link--vertical[data-vertical="All"]').addClass('post-filter-link--active');
      } else {
        $('.tile').hide();
        $('.tile[data-category="' + activeCategory + '"]').show();

        // make the OTHER filter go back to "All"
        $('.post-filter-link--vertical').removeClass('post-filter-link--active');
        $('.post-filter-link--vertical[data-vertical="All"]').addClass('post-filter-link--active');

        // if (activeVertical != "All") {
        //   $('.tile').hide();
        //   $('.tile[data-vertical="' + activeVertical + '"]').show();
        // }
      }

    }
    return false;
  });

});
