
$(function () {
  // TODO: ...
});


// Page animation initialize
new WOW().init();


// Back to top button
var backTop = $(".back_to_top");

$(window).scroll(function () {
  if ($(document).scrollTop() > 400) {
    backTop.css('visibility', 'visible');
  }
  else if ($(document).scrollTop() < 400) {
    backTop.css('visibility', 'hidden');
  }
});

backTop.click(function () {
  $('html').animate({
    scrollTop: 0
  }, 1000);
  return false;
});


// Tooltip
$('[data-toggle="tooltip"]').tooltip();


// Setting button
$(document).ready(function () {
  $('#sideel').click(function () {
    $(this).parents('.config').toggleClass('active');
  });


  $('body').data('bodyClassList', '');

  $('.color-item').click(function () {
    // Remove 'selected' class from all color items
    $('.color-item').removeClass('selected');
    // Add 'selected' class to the clicked color item
    $(this).addClass('selected');

    var cls = $(this).data('class');

    $('body').attr('class', $('body').data('bodyClassList'));
    $('body').addClass(cls);
  });

});


// Nav bar scrolling
$(document).ready(function () {
  $('[data-animate="scrolling"]').each(function () {
    var self = $(this);
    var target = $(this).data('target') ? $(this).data('target') : $(this).attr('href');

    self.click(function (e) {
      $('body, html').animate({ scrollTop: $(target).offset().top }, 1000);
      return false;
    });
  });
});


// Home features
$(".features-post").hover(
  function () {
    $(this).find(".content-hide").slideToggle("medium");
  }
);



/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function () {
  var counterInit = function () {
    if ($('.section-counter').length > 0) {
      $('.section-counter').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function () {
            var $this = $(this),
              num = $this.data('number');
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 5000
            );
          });

        }

      }, { offset: '95%' });
    }

  }
  counterInit();
});



// filter items on button click
var $grid = $('.gridder').isotope({
  itemSelector: '.grid-item',
  percentPosition: true
});

$('.filterable-button').on('click', 'button', function () {

  $('.filterable-button button').removeClass('selected');
  // Add 'selected' class to the clicked button
  $(this).addClass('selected');

  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});




// Tesiminials owl-carousel
$('.testi-carousel').owlCarousel({
  margin: 0,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  items: 1,
});





// Shaking Image
$(document).ready(function() {
  const $imgPlace = $('.site-shake-image .img-place');
  let isDragging = false;

  $imgPlace.on('mousemove touchstart', function(e) {
    e.preventDefault();
    isDragging = true;
  });

  $(document).on('mousemove touchmove', function(e) {
    if (!isDragging) return;

    const clientX = e.clientX || e.originalEvent.touches[0].clientX;
    const clientY = e.clientY || e.originalEvent.touches[0].clientY;

    const xOffset = (clientX / $imgPlace.width() - 0.5) * 30; // Adjust the factor as needed
    const yOffset = (clientY / $imgPlace.height() - 0.5) * 30; // Adjust the factor as needed

    $imgPlace.css('transform', `translate(${xOffset}px, ${yOffset}px)`);
  });

  $(document).on('mouseleave touchend', function() {
    isDragging = false;
    $imgPlace.css('transform', 'translate(0, 0)');
  });

  // Typed.js for dynamic typing
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings', // ID of the element containing your strings
    typeSpeed: 50, // Typing speed in milliseconds
    backSpeed: 30, // Backspacing speed in milliseconds
    backDelay: 1000, // Delay before starting to backspace
    loop: true // Loop the typing animation
  });
});

