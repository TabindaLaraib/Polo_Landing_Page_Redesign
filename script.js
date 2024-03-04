document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menuToggle');

    menuIcon.addEventListener('change', function () {
        var fullMenu = document.getElementById('fullMenu');
        fullMenu.style.display = menuIcon.checked ? 'block' : 'none';
    });
});