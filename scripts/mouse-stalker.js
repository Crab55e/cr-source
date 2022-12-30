$("html").append("<div id=\"cursor\"></div>");

const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

$(".red").hover(function() {
    $("#stalker").css("visibility", "hidden");
    $("#cursor").css("visibility", "visible");
});

$(".unred").hover(function() {
    $("#stalker").css("visibility", "visible");
    $("#cursor").css("visibility", "hidden");
})