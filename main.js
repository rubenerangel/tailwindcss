const toggleThemeButton = document.getElementById("toggle-dark-mode");
const html = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

const systemDarkMode = matchMedia.matches;

updateTheme(systemDarkMode);

matchMedia.addEventListener("change", ({ matches }) => {
  updateTheme(matches);
});

function updateTheme(darkMode) {
  if (darkMode) {
    html.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    html.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

toggleThemeButton.addEventListener("click", () => {
  //   toggle dark class
  html.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});
