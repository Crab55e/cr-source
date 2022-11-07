$(".line .circle").on("click", function() {
    $(".line .circle").remove();
    $("html").append("<div id=\"stalker\"></div>")
    const stalker = document.getElementById('stalker');
});

document.addEventListener('mousemove', function(e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

$(".about").css("visibility", "hidden")

ScrollReveal().reveal('.about', {
    duration: 1200,
    origin: 'bottom',
    viewFactor: 0.25,
    reset: false,
    distance: '200px'
});