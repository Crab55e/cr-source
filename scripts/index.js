$(".line .circle").on("click", function() {
    $(".line .circle").remove();
    $("html").append("<div id=\"stalker\"></div>")
    const stalker = document.getElementById('stalker');
});
document.addEventListener('mousemove', function(e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});


window.addEventListener('scroll', function() {
    if (396 <= window.scrollY) {
        $(".about").css("visibility", "visible !important")
    }
});