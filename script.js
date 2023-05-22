$(document).ready(function() {
    $(".toggle-icon").click(function() {
    $("nav").toggleClass("active");
    });
});

function toggleMenu(event) {
    event.preventDefault();
    document.body.classList.toggle('menu-open');
};

