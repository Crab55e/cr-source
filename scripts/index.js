if (document.cookie.indexOf("circleClicked") == -1) {
    $(".line .circle").addClass("clickable");
} else {
    console.log("circle is already clicked")
    $("#stalker").css("visibility", "hidden");
    $("html").append("<div id=\"stalker\"></div>")
};
$(".line .circle.clickable").on("click", function() {
    $(".line .circle").remove();
    $("html").append("<div id=\"stalker\"></div>")
    const stalker = document.getElementById('stalker');
})
document.addEventListener('mousemove', function(e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

$(".about").css("visibility", "hidden")

ScrollReveal().reveal('.panel', {
    duration: 400,
    origin: 'bottom',
    viewFactor: 0.5,
    reset: false,
    distance: '200px'
});

document.cookie = "circleClicked = true";