$('.nav-link').click(function(e) {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('#parallax-box').scrollTo(target);
        return false;
    }
  }
  e.preventDefault();
});

$('.speaker-link').click(function(e){
  window.open('http://twitter.com/'+this.id);
});
$('.speaker-link-pg').click(function(e){
  window.open('https://www.cs.auckland.ac.nz/~pgut001/');
});

$('.tickets-box table').click(function(){
  window.open('https://codemania-2016.lilregie.com/');
});