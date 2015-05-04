$(function(){
  $('.readmore').on('click',function() {
    $.scrollTo('#stop',800);
    return false;
  });

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var heightWithoutHeader = 300;
  var navbarHeight = $('header').outerHeight();

  // on scroll, let the interval function know the user has scrolled
  $(window).scroll(function(event){
    didScroll = true;
  });
  // run hasScrolled() and reset didScroll status
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header').removeClass('nav-up');
    } else {
      // Scroll Up
      // If did not scroll past the document (possible on mac)...
      if(st + $(window).height() - heightWithoutHeader < $(document).height()) { 
        $('header').addClass('nav-up');
      }
    }

    lastScrollTop = st;

  }
});