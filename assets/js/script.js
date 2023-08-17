

// Cursor Tracker
class CursorTracker {
    constructor() {
        const $tracker = $('.cursor-tracker');
        const trackerSize = $tracker.width();
        let trackerX = 0;
        let trackerY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let speed = 0.05;
        let isVisible = false;

        $(document).on('mousemove', (e) => {
            if (!isVisible) {
                isVisible = true;
                $tracker.css('opacity', '1');
                updatePosition();
            }
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        $(document).on('mouseleave', () => {
            isVisible = false;
            $tracker.css('transform', 'translate(0, 0)');
        });

        function updatePosition() {
            const distanceX = mouseX - (trackerX + trackerSize / 2);
            const distanceY = mouseY - (trackerY + trackerSize / 2);

            trackerX += distanceX * speed;
            trackerY += distanceY * speed;
            $tracker.css('transform', `translate(${trackerX}px, ${trackerY}px)`);

            requestAnimationFrame(updatePosition);
        }
    }
}


// Back To Top Button 
class BackToTopButton {
    constructor() {
        var $backTop = $('.back_to_top');
        const scrollThreshold = 400;

        $(window).scroll(function () {
            if ($(document).scrollTop() > scrollThreshold) {
                $backTop.css('visibility', 'visible');
            }
            else if ($(document).scrollTop() < scrollThreshold) {
                $backTop.css('visibility', 'hidden');
            }
        });

        $backTop.click(function () {
            $('html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    }
}


// Setting Button
class SettingButton {
    constructor() {
        const $sideel = $('#sideel');
        const $colorItem = $('.color-item');

        $sideel.click(function () {
            $(this).parents('.config').toggleClass('active');
        });


        $('body').data('bodyClassList', '');

        $colorItem.click(function () {
            // Remove 'selected' class from all color items
            $colorItem.removeClass('selected');
            // Add 'selected' class to the clicked color item
            $(this).addClass('selected');

            var cls = $(this).data('class');

            $('body').attr('class', $('body').data('bodyClassList'));
            $('body').addClass(cls);
        });
    }
}


// Nav Bar Scrolling
class NavBarScrolling {
    constructor() {
        $('[data-animate="scrolling"]').each(function () {
            var self = $(this);
            var target = $(this).data('target') ? $(this).data('target') : $(this).attr('href');

            self.click(function (e) {
                $('body, html').animate({ scrollTop: $(target).offset().top }, 1000);
                return false;
            });
        });
    }
}


// Home Features
class HomeFeatures {
    constructor() {
        $(".features-post").hover(function () {
            $(this).find(".content-hide").slideToggle("medium");
        });
    }
}


// Counter (Require("jquery.animateNumber.min.js", "jquery.waypoints.min.js"))
class Counter {
    constructor() {
        counterInit();

        function counterInit() {
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

    }
}


// Filter Items Button
class FilterItemsButton {
    constructor() {
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
    }
}


// Testiminials owl-carousel
class TestiminialsCarousel {
    constructor() {
        $('.testi-carousel').owlCarousel({
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 1,
        });
    }
}


// Shake Image 
class ShakeImage {
    constructor() {
        const $imgPlace = $('.site-shake-image .img-place');
        let isDragging = false;

        $imgPlace.on('mousemove touchstart', function (e) {
            e.preventDefault();
            isDragging = true;
        });

        $(document).on('mousemove touchmove', function (e) {
            if (!isDragging) return;

            const clientX = e.clientX || e.originalEvent.touches[0].clientX;
            const clientY = e.clientY || e.originalEvent.touches[0].clientY;

            const xOffset = (clientX / $imgPlace.width() - 0.5) * 30; // Adjust the factor as needed
            const yOffset = (clientY / $imgPlace.height() - 0.5) * 30; // Adjust the factor as needed

            $imgPlace.css('transform', `translate(${xOffset}px, ${yOffset}px)`);
        });

        $(document).on('mouseleave touchend', function () {
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
    }
}




// Usage
$(document).ready(function () {

    // Page animation initialize
    new WOW().init();

    // Cursor Tracker
    const cursorTracker = new CursorTracker();

    // Back To Top Button
    const backToTopButton = new BackToTopButton();

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Setting Button
    const settingButton = new SettingButton();

    // Nav Bar Scrolling
    const navBarScrolling = new NavBarScrolling();

    // Home Features
    const homeFeatures = new HomeFeatures();

    // Counter
    const counter = new Counter();

    // Filter Items Button
    const filterItemsButton = new FilterItemsButton();

    // Testiminials owl-carousel
    const testiminialsCarousel = new TestiminialsCarousel();

    // Shake Image
    const shakeImage = new ShakeImage();

});
