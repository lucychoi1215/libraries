//shine

var shine = new Shine(document.getElementById('my-shine-object'));

window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}, false);

//
(function($) {
    $(document).ready(function() {
        $.jScrollability([
            {
              'selector': '.text-wrapper',
              'start': function($el) { return $el.offset().top + $el.height() },
              'end': function($el) { return $el.offset().top + $(window).height(); },
              'fn': function($el,pcnt) {
                  var $spans = $el.find('span');
                  var point = Math.floor(($spans.length+4) * pcnt);
                  $spans.each(function(i,el) {
                      var $span = $(el);
                      if (i < point) {
                          $span.addClass('visible');
                      } else {
                          $span.removeClass('visible');
                        }
                    });
                }
            }
        ]);
    });
})(jQuery);

///
var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: false,
    gutter: 6,
    fitWidth: true,
    // gutter: 20;

  });
});

////
// var ScrollReveal = require('scrollreveal');
// ScrollReveal().reveal('.grid-item');
////
var rellax = new Rellax('.rellax');


new WOW().init();
