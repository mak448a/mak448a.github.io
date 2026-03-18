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

// Do dynamic resizing with the hamburger menu stuff
var windowBigger = false
const interval = setInterval(function() {
    var x = document.getElementById("myLinks");
    if (window.innerWidth >= 680) {
        x.style.display = "flex";
        windowBigger = true

    }
}, 500);


// Handle discord contact popup
function toggleDiscordPopup() {
    var popup = document.getElementById("discord-popup");
    if ( popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

// Bind it to the discord icon
document.getElementById("discord-icon").addEventListener("click", toggleDiscordPopup);