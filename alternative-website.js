
// Progressbar vid scroll
window.addEventListener("scroll", () => {
  const progress = document.querySelector(".progress-bar");
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  progress.style.width = `${scrolled * 100}%`;
});


// Starttema (day som bas)
document.body.classList.add("day");


// Tema-hantering (global pga inline onclick i HTML)
function handleThemeClick(radio) {
  if (radio.value === "night") {
    document.body.classList.add("night");
    document.body.classList.remove("day");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("night");
    document.body.classList.add("day");
    localStorage.setItem("theme", "light");
  }
}
window.handleThemeClick = handleThemeClick;

// Ladda sparat tema
(function applySavedTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("night");
    document.body.classList.remove("day");
    const nightRadio = document.querySelector('input[name="theme"][value="night"]');
    if (nightRadio) nightRadio.checked = true;
  }
})();

function setTheme(mode) { // "light" | "dark"
  const btn  = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const isDark = mode === "dark";

  document.body.classList.toggle("night", isDark);
  document.body.classList.toggle("day", !isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Byt ikonfil: vit ikon i dark, svart ikon i light
  icon.src = isDark ? "public/icons/light-toggle.svg"
                    : "public/icons/dark-toggle.svg";

  // Tillgänglighetsattribut
  btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function toggleTheme() {
  const isDark = document.body.classList.contains("night");
  setTheme(isDark ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const start = saved || (prefersDark ? "dark" : "light");
  setTheme(start);

  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
});





// Starttema (svenska som bas)

const translations = {
  swe: {
    "nav.home": "Hem",
    "nav.about": "Om mig",
    "nav.projects": "Projekt",

    

    "swe":"SV",
    "en":"ENG",

    "hero.title": "Frontendutvecklare",
    "btn.downloadCv": "Ladda ner CV",
    "btn.contactMe": "Kontakta mig",

    "hero.info" : `Jag studerar till <strong>Frontendutvecklare</strong> på Nackademin, och nu letar jag efter LIA-/praktikplats
        mellan <strong>2025-12-08 – 2026-04-24.</strong>`,

    "about.heading": "Om mig",
    "about.p1": `          Hej! Jag heter Lo River Lööf och studerar just nu till <strong>Frontendutvecklare</strong> på
          <strong>Nackademin</strong>. I december börjar min ca 5 månader långa praktikperiod, och jag söker en plats där
          jag får möjlighet att växa, lära mig mer i samarbete med kollegor och bidra till projekt med mina kunskaper.`,
    "about.p2": `Jag har alltid haft ett stort intresse för att förstå grunden till saker och för att skapa – både praktiskt och visuellt. Tidigare arbetade jag som snickare och fotograf/bildjournalist, och i frontendutveckling har jag hittat den perfekta kombinationen av struktur, problemlösning och kreativt uttryck. Det öga för detaljer, känsla för struktur och problemlösningsförmåga jag fått med mig från mina tidigare yrken är idag en av mina styrkor i rollen som frontend-utvecklare.`,
    "about.p3": `Under utbildningen har jag arbetat med <strong>HTML, CSS/SCSS, JavaScript och React</strong>, samt <strong>UX/UI-design i Figma</strong>. Jag uppskattar samarbete, idéutbyte och kreativitet – men är också van vid och trygg i att ta eget ansvar. Genom projekten har jag upptäckt hur mycket jag trivs i ett agilt arbetssätt.`,

    // "lia.info": "Läs om vad Nackademins LIA innebär:",
    "lia.info": "Läs mer om LIA här",

    "p.project": `<strong>Några projekt jag jobbat med ↓</strong>`,

    "project.1": `Productivity App - "Groundly" (Grupprojekt)`,
   
    "project.2": `Tamagotchi spel - "Offigotchi"`,
   
    "project.3": `Quiz App - "Space Quiz"`, 

    "cta.try": "<strong>Testa</strong>",


    "backToTop": "Till toppen"
  },
    eng: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",

    "swe":"SWE",
    "en":"EN",

    "hero.title": "Frontend Developer",
    "btn.downloadCv": "Download CV",
    "btn.contactMe": "Contact Me",

    "hero.info" : `I’m currently studying to become a <strong>Frontend Developer</strong> at Nackademin, and I’m now looking for an internship (LIA) 
            between <strong>2025-12-08 – 2026-04-24.</strong>`,

    "about.heading": "About me",
    "about.p1": `Hi! My name is Lo River Lööf and I’m currently studying to become a <strong>Frontend Developer</strong> at <strong>Nackademin</strong>. In December my six-month internship starts, and I’m looking for a place where I can grow, learn alongside colleagues, and contribute to projects with my skills.`,
    "about.p2": `I’ve always loved understanding how things work and creating — both practically and visually. I previously worked as a carpenter and as a photographer/photojournalist, and in frontend development I’ve found the perfect mix of structure, problem-solving, and creative expression. The eye for detail, sense of structure, and problem-solving ability I bring from past roles are now some of my strengths as a frontend developer.`,
    "about.p3": `During my education I’ve worked with <strong>HTML, CSS/SCSS, JavaScript and React</strong>, as well as <strong>UX/UI design in Figma</strong>. I enjoy collaboration, idea exchange, and creativity — and I’m also used to and comfortable taking responsibility. Through projects I’ve discovered how much I thrive in an agile way of working.`,

    // "lia.info": "Information about what Nackademin’s internship (LIA) involves:",
    // "lia.info": "Download Nackademin's pdf about what internship (LIA) involves:",
    "lia.info": "Read more about internship/LIA",

    "p.project": `<strong>Some projects I’ve made ↓</strong>`,

    "project.1": `Productivity App - "Groundly" (Group project)`,

    "project.2": `Tamagotchi game - "Offigotchi"`,

    "project.3": `Quiz App - "Space Quiz" `,

    "cta.try": "<strong>Try it out</strong>",

    "backToTop": "Back to top"
  }
};

// Switcha språk
const defaultLang = "swe";

function applyLang(lang) {
const texts = translations[lang] || translations[defaultLang];


//Byter språk på texterna
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.dataset.t;
    if (texts[key] != null) el.innerHTML = texts[key];
  });

  document.documentElement.lang = (lang === "eng") ? "en" : "swe"
  localStorage.setItem("lang", lang);


//Uppdaterar aktiv knapp
document.querySelectorAll(".lang-btn").forEach(btn => {
  const active = btn.dataset.lang === lang;
  btn.classList.toggle("is-active", active);
  btn.setAttribute("aria-pressed", active ? "true" : "false");
});
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang-btn");
  if (!btn) return;
  applyLang(btn.dataset.lang);
});


document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || defaultLang;
  applyLang(saved);
});



// Back-to-top
const btn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll-trigger för fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.18 }
);
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
