var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);

wow.init();

$('input').on('input propertychange paste', function() {
  if ($(this).val()) {
    $(this).prev().addClass('show-label');
    $(this).prev().removeClass('hide-label');
  } else {
    $(this).prev().removeClass('show-label');
    $(this).prev().addClass('hide-label');
  }
});

$('textarea').on('input propertychange paste', function() {
  if ($(this).val()) {
    $(this).prev().addClass('show-label');
    $(this).prev().removeClass('hide-label');
  } else {
    $(this).prev().removeClass('show-label');
    $(this).prev().addClass('hide-label');
  }
});

$(window).on('scroll', function ( e ) {
  if ($(window).scrollTop() > window.innerHeight - 150) {
    $('nav').addClass('solid-nav');
  } else {
    $('nav').removeClass('solid-nav');
  };
});

$('nav').find('a').click(function(){
  var $href = $(this).attr('href');
  var $anchor = $($href).offset();
  $('body').animate({ scrollTop: $anchor.top });
  return false;
});

$('header').find('a').click(function(){
  var $href = $(this).attr('href');
  var $anchor = $($href).offset();
  $('body').animate({ scrollTop: $anchor.top });
  return false;
});
