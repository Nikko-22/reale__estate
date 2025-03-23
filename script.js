const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".mobile-menu a"); // Select all menu links


function toggleMenu() {
  menuIcon.classList.toggle("active"); // Toggle X animation
  mobileMenu.classList.toggle("active"); // Toggle menu visibility
}

// Clicking the menu icon opens/closes the menu
menuIcon.addEventListener("click", toggleMenu);

// Clicking any menu link closes the menu and scrolls to section
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href").startsWith("#")) {
      // Check if it's an internal link
      e.preventDefault(); // Prevent default jump
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      }
    }
    toggleMenu(); // Close menu after clicking
  });
});

// Clicking the "Inquire" button closes the menu
closeMenuBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  toggleMenu();
});

// JavaScript for Scroll Logic
let lastScrollPosition = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down - hide the header
    header.classList.add("hidden");
  } else {
    // Scrolling up - show the header
    header.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
});
