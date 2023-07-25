document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const bodyBackground = getComputedStyle(document.body).background;
  
    function updateMenuBackground() {
      const scrolled = window.scrollY;
  
      if (scrolled === 0) {
        // When not scrolled, make the menu background transparent
        menu.style.backgroundColor = "transparent";
      } else {
        // When scrolled, set the menu background to match the body background
        menu.style.backgroundColor = bodyBackground;
      }
    }
  
    // Update menu background on page load
    updateMenuBackground();
  
    // Update menu background when scrolling
    window.addEventListener("scroll", updateMenuBackground);
  });
  