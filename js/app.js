$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".sidebar").slideToggle();
        $(".main").toggleClass('active');
        $(this).toggleClass('active');
    })

    $(".menu h4").click(function () {
        var parent = $(this).parent();
        $("ul", parent).slideToggle();
    })
    hljs.highlightAll();
});