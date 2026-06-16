// --- MENAMPILKAN MENU MOBILE (HAMBURGER MENU) ---
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // Animasi icon berganti antara bar dan X
  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Menutup menu mobile saat link diklik
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

// --- HIGHLIGHT NAV MENU SAAT DI-SCROLL (SCROLL SPY) ---
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Memberikan offset agar link aktif sebelum benar-benar di ujung atas screen
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// --- VALIDASI FORM KONTAK SEDERHANA ---
const contactForm = document.getElementById("compForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulasi pengiriman data
    alert(
      "Terima kasih! Pesan Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda.",
    );
    contactForm.reset();
  });
}
