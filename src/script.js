document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  const mobileNav = document.querySelector("#mobile-nav");
  const mobileNavClose = document.querySelector("#mobile-nav-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (!hamburgerIcon || !mobileNav) return;

  const openNav = () => {
    mobileNav.classList.remove("hidden");
  };

  const closeNav = () => {
    mobileNav.classList.add("hidden");
  };

  hamburgerIcon.addEventListener("click", () => {
    const isHidden = mobileNav.classList.contains("hidden");
    if (isHidden) {
      openNav();
    } else {
      closeNav();
    }
  });

  if (mobileNavClose) {
    mobileNavClose.addEventListener("click", closeNav);
  }

  mobileNavLinks.forEach((link) => {
    s;
    link.addEventListener("click", closeNav);
  });
});
