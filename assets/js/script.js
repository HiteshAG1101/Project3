//window scroll
// window.addEventListener("scroll", function() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop >= 100) {
//         document.body.classList.add('fixed-header');
//     } else {
//         document.body.classList.remove('fixed-header');
//     }
// });



$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    console.log('Scroll position:', scrollTop); // Debugging line
    if (scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// document ready
// $(document).ready(function(){

//     // typing animation 
//     new Typed('#type-it',{
//         strings:['Web Developer', 'Designer' ],
//         typeSpeed: 100,
//         loop:true
//     });

// });

$(document).ready(function() {
    // Typing animation
    new Typed('#type-it', {
        strings: ['Web Developer', 'Designer'],
        typeSpeed: 100,  // Speed of typing
        backSpeed: 50,   // Speed of deleting
        loop: true       // Loop the typing animation
    });

    // Owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 2,
        margin:30,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
        }
    })

    // One Page Scroll
    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70          // offste (in px) for fixed top navigation
    });
});
