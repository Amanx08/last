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

const TAIL_LENGTH = 50;
const cursor = document.getElementById("cursor");
let mouseX = 0;
let mouseY = 0;
let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });
let cursorTimeout;  // Variable to store the timeout for hiding the cursor

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  showCursor();  // Show the cursor whenever the mouse moves
  resetCursorTimeout();  // Reset the timeout to hide the cursor
}

function onClick(event) {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    cursorHistory[i].x += Math.random() * 100 - 50;
    cursorHistory[i].y += Math.random() * 100 - 50;
  }
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement("div");
    div.classList.add("cursor-circle");
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll(".cursor-circle"));
}

function updateCursor() {
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
  }
  requestAnimationFrame(updateCursor);
}

// Function to show the cursor
function showCursor() {
  cursor.style.opacity = 1;  // Show the cursor
  if (cursorTimeout) {
    clearTimeout(cursorTimeout);  // Clear any existing timeout
  }
  resetCursorTimeout();  // Reset the timeout for hiding the cursor
}

// Function to reset the timeout for hiding the cursor
function resetCursorTimeout() {
  cursorTimeout = setTimeout(hideCursor, 3000);  // Hide cursor after 2 seconds of inactivity
}

// Function to hide the cursor
function hideCursor() {
  cursor.style.opacity = 0;  // Hide the cursor
}

document.addEventListener("mousemove", onMouseMove, false);
document.addEventListener("click", onClick, false);
initCursor();
updateCursor();
