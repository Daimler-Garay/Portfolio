document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.navbar');

    if (header) {
        window.onscroll = function() {
            var top = window.scrollY;
            if (top >= 0) {
                header.classList.add('navbarDark');
            } else {
                header.classList.remove('navbarDark');
            }
        }
    } else {
        console.log("No element with class 'navbar' found in your HTML.");
    }
});