var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
    speedAsDuration: true,
    offset: 60,
});

$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})