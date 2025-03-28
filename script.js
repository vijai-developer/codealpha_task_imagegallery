// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 4 || document.documentElement.scrollTop > 4) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}


function goToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}