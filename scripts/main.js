// scroll to an element within an element
jQuery.fn.scrollTo = function(elem, speed) {
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top
    }, speed == undefined ? 1000 : speed);
    return this;
};

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('#parallax-box').scrollTo(target);
          return false;
      }
    }
  });