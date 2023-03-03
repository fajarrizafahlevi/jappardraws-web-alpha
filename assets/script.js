// ONE PAGE AT A TIME

function openPage(pageName, element) {
    // Hide all pages by default
    var i, pages;
    pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // Show the specific page content when clicked
    document.getElementById(pageName).style.display = "flex";
}
  
// Make a default first page
document.getElementById("defaultOpen").click();


// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show current image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}