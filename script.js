//

window.onload = function () {
  window.scrollTo(0, 0)
};


// toggleMenu 

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


// Cursor 


document.addEventListener("DOMContentLoaded", () => {
  const cursorSm = document.querySelector('.js-cursor_sm');
  const cursorLg = document.querySelector('.js-cursor_lg');
  const positionRef = {
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  };

  document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    if (cursorSm && cursorLg) {
      positionRef.mouseX = mouseX - cursorSm.offsetWidth / 2;
      positionRef.mouseY = mouseY - cursorSm.offsetHeight / 2;
      positionRef.mouseX = mouseX - cursorLg.offsetWidth / 2;
      positionRef.mouseY = mouseY - cursorLg.offsetHeight / 2;
    }
  });

  const followMouse = () => {
    positionRef.key = requestAnimationFrame(followMouse);
    const {
      mouseX,
      mouseY,
      destinationX,
      destinationY,
      distanceX,
      distanceY,
    } = positionRef;

    if (!destinationX || !destinationY) {
      positionRef.destinationX = mouseX;
      positionRef.destinationY = mouseY;
    } else {
      positionRef.distanceX = (mouseX - destinationX) * 0.1;
      positionRef.distanceY = (mouseY - destinationY) * 0.1;
      if (
        Math.abs(positionRef.distanceX) + Math.abs(positionRef.distanceY) < 0.1
      ) {
        positionRef.destinationX = mouseX;
        positionRef.destinationY = mouseY;
      } else {
        positionRef.destinationX += distanceX;
        positionRef.destinationY += distanceY;
      }
    }

    if (cursorSm) {
      cursorSm.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    }

    if (cursorLg) {
      cursorLg.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    }
  };

  followMouse();
});


