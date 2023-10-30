document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.navbar');

    if (header) {
        // Element with class 'navbar' was found
        window.onscroll = function() {
            var top = window.scrollY;
            if (top >= 100) {
                header.classList.add('navbarDark');
            } else {
                header.classList.remove('navbarDark');
            }
        }
    } else {
        // Element with class 'navbar' was not found
        console.log("No element with class 'navbar' found in your HTML.");
    }
});