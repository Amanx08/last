function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Slider 

$(document).ready(function ($) {
  $('.slider_container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});


// Loader 


// // Show loading message for 1 second before transitioning to the loader
// setTimeout(() => {
//   document.getElementById("js_loadingMessage").style.display = "none"; // Hide Loading...
//   document.getElementById("js_loader").style.display = "block"; // Show loader
//   document.body.classList.add("reveal"); // Trigger loader animation and page reveal
// }, 1000);

// // Toggle reveal state on click to simulate user interaction
// document.addEventListener("click", () => {
//   document.body.classList.toggle("reveal");
// });



let hasLoaded = false;

// Show loading message for 1 second before transitioning to the loader
setTimeout(() => {
  document.getElementById("js_loadingMessage").style.display = "none"; // Hide Loading...
  document.getElementById("js_loader").style.display = "block"; // Show loader
  document.body.classList.add("reveal"); // Trigger loader animation and page reveal
  hasLoaded = true; // Mark that the page has loaded
}, 1000);

// Prevent transition effect on subsequent clicks if page is already loaded
document.addEventListener("click", () => {
  if (hasLoaded && !document.body.classList.contains("reveal")) {
    // Only toggle class if it has been loaded and reveal class is not present
    document.body.classList.add("reveal");
  }
});


