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
                  var point = Math.floor(($spans.length+1) * pcnt);
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
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

///

// // prefixed
//
// const instance = Bricks({
//   packed: 'data-packed'
// })
//
// // unprefixed
//
// const instance = Bricks({
//   // becomes: 'data-packed'
//   packed: 'packed'
// })
