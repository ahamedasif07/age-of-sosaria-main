document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!menuBtn || !navLinks) {
    console.log("Menu button or nav links not found!");
    return;
  }

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");

    // Icon Toggle
    menuBtn.textContent = menuBtn.textContent === "☰" ? "✖" : "☰";
  });

  // Auto close on mobile click
  document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navLinks.classList.add("hidden");
        menuBtn.textContent = "☰";
      }
    });
  });
});
