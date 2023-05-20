$(document).ready(function() {
    $(".toggle-icon").click(function() {
    $(".main-mobile_navbar_child").toggleClass("active");
    });
});

function toggleMenu(event) {
    event.preventDefault();
    document.body.classList.toggle('menu-open');
};

