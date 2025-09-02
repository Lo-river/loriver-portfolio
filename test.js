// Scroll progress bar
window.addEventListener("scroll", () => {
  const progress = document.querySelector(".progress-bar");
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  progress.style.width = `${scrolled * 100}%`;
});

// Scroll to top button
const topBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Theme toggle
const toggleBtn = document.querySelector("#toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Scroll-trigger animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
