
const root = document.documentElement;

// ==========================================
// 1. THEME SWITCHING
// ==========================================

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);

  themeToggle.setAttribute(
    "aria-label",
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  );

  try {
    localStorage.setItem("ishaan-theme", theme);
  } catch (e) {}
}

setTheme(root.getAttribute("data-theme") || "dark");

themeToggle.addEventListener("click", () => {
  setTheme(
    root.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark"
  );
});

// ==========================================
// 2. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const willOpen = mobileNav.hidden;

  mobileNav.hidden = !willOpen;

  menuToggle.setAttribute(
    "aria-expanded",
    String(willOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    willOpen ? "Close navigation" : "Open navigation"
  );
});

mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// ==========================================
// 3. PROJECT FILTERING
// ==========================================

const filters = [...document.querySelectorAll(".filter-btn")];
const cards = [...document.querySelectorAll(".project-card")];
const empty = document.getElementById("noProjects");

function filterProjects(category) {
  let count = 0;

  
  cards.forEach((card) => {
    const matches =
      category === "All" ||
      card.dataset.category === category;
  
    // Remove any inline display override
    card.style.removeProperty("display");
  
    // Let the existing CSS manage grid/flex layouts
    card.hidden = !matches;
  
    if (matches) count++;
  });


  // Update active filter button
  filters.forEach((button) => {
    const active = button.dataset.filter === category;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  // Show empty state only when appropriate
  if (empty) {
    empty.hidden = count > 0;
  }
}

// Filter when a category button is clicked
filters.forEach((button) => {
  button.addEventListener("click", () => {
    filterProjects(button.dataset.filter);
  });
});

// IMPORTANT FIX:
// Show all 11 projects when the page initializes.
filterProjects("All");

// ==========================================
// 4. COPYRIGHT YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// 5. ACTIVE NAVIGATION ON SCROLL
// ==========================================

const sectionLinks = [
  ...document.querySelectorAll(".desktop-nav a")
];

if ("IntersectionObserver" in window) {
  const sections = [
    ...document.querySelectorAll("main section[id]")
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionLinks.forEach((a) => {
            a.classList.toggle(
              "active",
              a.getAttribute("href") ===
                "#" + entry.target.id
            );
          });
        }
      });
    },
    {
      rootMargin: "-25% 0px -65% 0px"
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}
