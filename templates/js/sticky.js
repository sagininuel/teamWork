var nav = document.getElementById("nav");

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        nav.style.position = "fixed";
        nav.style.top = 0;
        nav.style.background = "rgba(0,0,0,0.84";
        nav.style.width = "100%";
    } else {
        // nav.style.position = "absolute";
        nav.style.position = "relative"; //fixed
        nav.style.top = 100;
    }
};