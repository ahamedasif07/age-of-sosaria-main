document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");

    // Icon Change
    menuBtn.textContent = menuBtn.textContent === "✖" ? "☰" : "✖";
  });

  // Auto close on mobile link click
  document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navLinks.classList.add("hidden");
        menuBtn.textContent = "☰";
      }
    });
  });
});
