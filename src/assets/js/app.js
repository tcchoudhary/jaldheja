
// ---------------
// Toggle Icone hamburger
$(document).ready(function () {
    $('#menuTrigger').click(function () {
        $('#menuTrigger').toggleClass('active');
    })
})


// Greensock Animations

var timeline = new TimelineMax();

timeline.to("#nav-main", 1.5, { right: '1%', ease: Expo.easeInOut });
timeline.staggerFrom("#nav-main ul li", 0.3, { y: 50, opacity: 0 }, 0.1);

timeline.reverse();

$(document).on('click', '#menuTrigger', function () {
    timeline.play();
    $('.header').toggleClass('hideHeader');
    $('#menuOverflow').toggleClass('active');
});
$(document).on('click', '#nav-main a', function () {
    timeline.reverse();
    $('#menuTrigger').toggleClass('active');

    $('#menuOverflow').toggleClass('active');
})
$(document).on('click', '.closeBtn', function () {
    timeline.reverse();
    $('#menuTrigger').toggleClass('active');

    $('#menuOverflow').toggleClass('active');
})
$(document).on('click', '#menuOverflow', function () {
    timeline.reverse();
    $('#menuTrigger').toggleClass('active');

    $('#menuOverflow').toggleClass('active');
})


// Header js END.
