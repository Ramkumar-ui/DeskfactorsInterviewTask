//Menu js
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

//Cricle js
var colors = [
    ['#dfe3e7', '#00A5FF'], ['#dfe3e7', '#00A5FF'], ['#dfe3e7', '#00A5FF'], ['#dfe3e7', '#2ab7ee'], ['#dfe3e7', '#00719d']
], circles = [];
for (var i = 1; i <= 3; i++) {
    var child = document.getElementById('circles-' + i),
        percentage = 50 + (i * 30);

    circles.push(Circles.create({
        id: child.id,
        value: percentage,
        radius: 50,
        width: 16,
        borderRadius: 10,
        colors: colors[i - 1],
        textClass: 'circles-text',
        styleText: true
    }));
}