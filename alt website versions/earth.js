//  Progress bar scroll (robust + passive) 
function updateProgress(){
  const progress = document.querySelector(".progress-bar");
  if(!progress) return;
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || window.pageYOffset || 0;
  const scrollHeight = Math.max(doc.scrollHeight - doc.clientHeight, 0);
  const scrolled = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  progress.style.width = `${scrolled * 100}%`;
}

window.addEventListener("scroll", updateProgress, { passive:true });
window.addEventListener("resize", updateProgress);
document.addEventListener("DOMContentLoaded", updateProgress);

//  Theme handling 
function setTheme(mode){ // "light" | "dark"
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const isDark = mode === "dark";

  document.body.classList.toggle("night", isDark);
  document.body.classList.toggle("day", !isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");

  if(icon){
    icon.src = isDark ? "public/icons/dark-toggle.svg"
                      : "public/icons/dark-toggle.svg";
  }
  if(btn){
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
}

function toggleTheme(){
  const isDark = document.body.classList.contains("night");
  setTheme(isDark ? "light" : "dark");
}

//  Language
const translations = {
  swe:{
    "nav.home":"Hem",
    "nav.about":"Om mig",
    "nav.projects":"Projekt",
    "swe":"SV",
    "en":"ENG",
    "hero.title":"Frontendutvecklare",
    "btn.downloadCv":"Ladda ner CV",
    "btn.contactMe":"Kontakta mig",
    "hero.info":`Jag studerar till <strong>Frontendutvecklare</strong> på Nackademin, och nu letar jag efter LIA-/praktikplats
        mellan <strong>2025-12-08 – 2026-04-24.</strong>`,
    "about.heading":"Om mig",
    "about.p1":`Hej! Jag heter Lo River Lööf och studerar just nu till <strong>Frontendutvecklare</strong> på
          <strong>Nackademin</strong>. I december börjar min ca 5 månader långa praktikperiod, och jag söker en plats där
          jag får möjlighet att växa, lära mig mer i samarbete med kollegor och bidra till projekt med mina kunskaper.`,
    "about.p2":`Jag har alltid haft ett stort intresse för att förstå grunden till saker och för att skapa – både praktiskt och visuellt. Tidigare arbetade jag som snickare och fotograf/bildjournalist, och i frontendutveckling har jag hittat den perfekta kombinationen av struktur, problemlösning och kreativt uttryck. Det öga för detaljer, känsla för struktur och problemlösningsförmåga jag fått med mig från mina tidigare yrken är idag en av mina styrkor i rollen som frontend-utvecklare.`,
    "about.p3":`Under utbildningen har jag arbetat med <strong>HTML, CSS/SCSS, JavaScript och React</strong>, samt <strong>UX/UI-design i Figma</strong>. Jag uppskattar samarbete, idéutbyte och kreativitet – men är också van vid och trygg i att ta eget ansvar. Genom projekten har jag upptäckt hur mycket jag trivs i ett agilt arbetssätt.`,
    "lia.title":"Ladda ner och läs mer om vad det innebär att ta emot en praktikant från Nackademin.",
    "lia.hint":"PDF • 1–2 min läsning",
    "p.project":"<strong>Några projekt jag jobbat med ↓</strong>",
    "project.1":`Productivity App - "Groundly" (Grupprojekt)`,
    "project.2":`Tamagotchi spel - "Offigotchi"`,
    "project.3":`Quiz App - "Space Quiz"`,
    "cta.try":"<strong>Testa</strong>",
    // "backToTop":"Till toppen"
  },
  eng:{
    "nav.home":"Home",
    "nav.about":"About",
    "nav.projects":"Projects",
    "swe":"SWE",
    "en":"EN",
    "hero.title":"Frontend Developer",
    "btn.downloadCv":"Download CV",
    "btn.contactMe":"Contact Me",
    "hero.info":`I’m currently studying to become a <strong>Frontend Developer</strong> at Nackademin, and I’m now looking for an internship (LIA) 
            between <strong>2025-12-08 – 2026-04-24.</strong>`,
    "about.heading":"About me",
    "about.p1":`Hi! My name is Lo River Lööf and I’m currently studying to become a <strong>Frontend Developer</strong> at <strong>Nackademin</strong>. In December my six-month internship starts, and I’m looking for a place where I can grow, learn alongside colleagues, and contribute to projects with my skills.`,
    "about.p2":`I’ve always loved understanding how things work and creating — both practically and visually. I previously worked as a carpenter and as a photographer/photojournalist, and in frontend development I’ve found the perfect mix of structure, problem-solving, and creative expression. The eye for detail, sense of structure, and problem-solving ability I bring from past roles are now some of my strengths as a frontend developer.`,
    "about.p3":`During my education I’ve worked with <strong>HTML, CSS/SCSS, JavaScript and React</strong>, as well as <strong>UX/UI design in Figma</strong>. I enjoy collaboration, idea exchange, and creativity — and I’m also used to and comfortable taking responsibility. Through projects I’ve discovered how much I thrive in an agile way of working.`,
    "lia.title":" Download and learn more about what it means to host an intern from Nackademin.",
    "lia.hint":"PDF • 1–2 min read",
    "p.project":"<strong>Some projects I’ve made ↓</strong>",
    "project.1":`Productivity App - "Groundly" (Group project)`,
    "project.2":`Tamagotchi game - "Offigotchi"`,
    "project.3":`Quiz App - "Space Quiz" `,
    "cta.try":"<strong>Try it out</strong>",
    // "backToTop":"Back to top"
  }
};

const defaultLang = "swe";

function applyLang(lang){
  const texts = translations[lang] || translations[defaultLang];

  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.dataset.t;
    if(texts[key] != null){
      el.innerHTML = texts[key];
    }
  });

  document.documentElement.lang = (lang === "eng") ? "en" : "sv";
  localStorage.setItem("lang", lang);
  document.body.dataset.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  const backBtn = document.querySelector(".back-to-top");
  if(backBtn && texts["backToTop"]){
    backBtn.setAttribute("title", texts["backToTop"]);
    backBtn.setAttribute("aria-label", texts["backToTop"]);
  }
}

// Init / DOM ready 
document.addEventListener("DOMContentLoaded", () => {
  // Theme — LIGHT FIRST
  const saved = localStorage.getItem("theme");
  const start = saved || "light"; // <-- light-first
  setTheme(start);

  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn){
    themeBtn.addEventListener("click", toggleTheme);
  }

  // Language
  const savedLang = localStorage.getItem("lang") || defaultLang;
  applyLang(savedLang);

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if(!btn) return;
    applyLang(btn.dataset.lang);
  });

  // Back-to-top
  const backBtn = document.querySelector(".back-to-top");
  if(backBtn){
    const toggleBackBtn = () => {
      backBtn.style.display = (window.scrollY > 300) ? "block" : "none";
    };
    window.addEventListener("scroll", toggleBackBtn, { passive:true });
    toggleBackBtn();
    backBtn.addEventListener("click", () => {
      window.scrollTo({ top:0, behavior:"smooth" });
    });
  }

  // Scroll-trigger fade-in
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold:0.18 }
  );

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
});


/* ========== Earthpeople-lika mikrointeraktioner (vanilla JS) ========== */

/* 3.1 Magnetiska knappar (mouse follow inom knapp) */
(function magneticButtons(){
  const mags = document.querySelectorAll('.button[data-magnetic]');
  mags.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const moveX = (x - r.width / 2) * 0.12;
      const moveY = (y - r.height / 2) * 0.22;
      btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
      btn.classList.add('is-hover');
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
      btn.classList.remove('is-hover');
    });
  });
})();

/* 3.2 Cursor blob (lerp/inertia) */
(function cursorBlob(){
  const blob = document.querySelector('.cursor-blob');
  if(!blob) return;
  let x = window.innerWidth * 0.5;
  let y = window.innerHeight * 0.5;
  let tx = x;
  let ty = y;
  const ease = 0.12;
  const raf = () => {
    x += (tx - x) * ease;
    y += (ty - y) * ease;
    blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(raf);
  };
  window.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
  }, { passive:true });
  raf();
})();

/* 3.3 Tiltade kort + shine (mousemove på kort) */
(function tiltCards(){
  const cards = document.querySelectorAll('.card[data-tilt]');
  const damp = 14;
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * damp;
      const ry = (0.5 - px) * damp;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      card.classList.add('tilting');
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
      card.classList.remove('tilting');
    });
  });
})();

/* 3.4 Marquee – duplicera innehåll så bandet blir sömlöst */
(function marqueeDup(){
  const belt = document.querySelector('.belt.marquee .track');
  if(!belt) return;
  // upprepa innehållet en gång till för loop
  const text = Array.from(belt.children).map(n => n.textContent.trim()).filter(Boolean).join('   ');
  belt.setAttribute('data-dup', '   ' + text + '   ' + text + '   ');
})();

/* 3.5 Parallax på profilbild vid scroll (subtil) */
(function parallaxPortrait(){
  const el = document.querySelector('.profile-img-bg');
  if(!el) return;
  const onScroll = () => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    // -1…1 där 0 = center
    const t = ((rect.top + rect.height * 0.5) - vh * 0.5) / vh;
    const translate = Math.max(-10, Math.min(10, -t * 18)); // clamp
    el.style.transform = `translateY(${translate}px)`;
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
})();

/* 3.6 Nav underline “magnet” – följ musen per länk */
(function navUnderline(){
  const links = document.querySelectorAll('.header-nav a');
  links.forEach(a => {
    a.addEventListener('mousemove', (e) => {
      const r = a.getBoundingClientRect();
      const x = e.clientX - r.left;
      a.style.setProperty('--uX', `${x}px`);
    });
    a.addEventListener('mouseleave', () => {
      a.style.removeProperty('--uX');
    });
  });
})();


