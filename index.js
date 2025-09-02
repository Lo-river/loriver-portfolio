window.addEventListener("scroll", () => {
  const progress = document.querySelector(".progress-bar");
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  progress.style.width = `${scrolled * 100}%`;
});

document.body.classList.add('day');

function handleClick(radio) {
  if (radio.value === "night") {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  } else {
    document.body.classList.remove("night");
    document.body.classList.add("day");
  }
}

// window.addEventListener('scroll', () => {
//   const progress = document.querySelector('.progress-bar');
//   const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//   progress.style.width = `${scroll * 100}%`;
// });

const btn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
