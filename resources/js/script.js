$(document).ready(function() {      /*starting of every jquery to ensure this code runs only after document is started*/ 
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") 
            {
                $('nav').addClass('sticky');
            } 
        else 
            {
                $('nav').removeClass('sticky');
            }
    }, {
      offset: '60px;'  /*to show sticky panel before the h2 heading*/
    });
    
    /* Scroll on buttons */
    
    
    $('.js--scroll-to-plans').click(function() {
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);  /*1000ms =1sec speed animation scroll*/
    });
    
    
    $('.js--scroll-to-start').click(function() {
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);  /*1000ms =1sec speed animation scroll*/
    });

    
    /*Navigation scroll*/
    
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    /*Animation on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated animate__fadeIn');   /*animate.css web*/ 
    }, {
        offset: '50%;'
    });
    
    
     $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated animate__backInRight');   
    }, {
        offset: '50%;'
    
    });
    
    
     $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated animate__zoomInDown');    
    }, {
        offset: '50%;'
    });
    
    
     $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated animate__tada');   
    }, {
        offset: '50%;'
    });
    
    $('.js--wp-5').waypoint(function(direction) {
       $('.js--wp-5').addClass('animated animate__zoomInLeft');   
    }, {
        offset: '50%;'
    });
    
});


    /*Mobile nav*/
    $('.js--nav-icon').click(function() {
       var nav =$('.js--main-nav');
       var icon =$('.js--nav-icon i');
        
        nav.slideToggle(200);  /*open & close effect a box time req here = 2sec*/
        if (icon.hasClass('ion-navicon-round')) 
            {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');     
        }
        
        
    });
