/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
        burgerToggled = false;
    } else {
        x.style.display = "flex";
        burgerToggled = true;
    }
}


var windowBigger = false
const interval = setInterval(function() {
    var x = document.getElementById("myLinks");
    if (window.innerWidth >= 680) {
        x.style.display = "flex";
        windowBigger = true

    }
}, 500);