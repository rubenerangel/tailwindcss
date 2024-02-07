const html = document.documentElement;
const themeOptions = document.querySelectorAll("[data-theme-option]");
const themeMenu = document.getElementById("theme-menu");
const icons = {
  light: document.getElementById("light-icon"),
  dark: document.getElementById("dark-icon"),
  system: document.getElementById("system-icon"),
};
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
let currentTheme = "system";
// const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
// const lightIcon =
// const darkIcon = document.getElementById("dark-icon");
// const systemIcon = document.getElementById("system-icon");

updateThemeUI(currentTheme);
updateTheme(currentTheme);

function updateThemeUI(theme) {
  // TODO: Hide all ICONS
  // console.log(Object.entries(icons), "line 18");
  Object.entries(icons).forEach(([key, icon]) =>
    // console.log(key, "key", icon);
    theme === key
      ? icon.classList.remove("hidden")
      : icon.classList.add("hidden")
  );

  // [lightIcon, darkIcon, systemIcon].forEach((icon) => {
  //   icon.classList.add("hidden");
  // });
  // TODO: Show selected ICON
  // document.getElementById(`${theme}-icon`).classList.remove("hidden");

  // TODO: Hide theme MENU
  themeMenu.classList.add("hidden");

  updateTheme(theme);
}

function updateTheme(theme) {
  if (theme === "dark" || (theme === "system" && isDarkMode.matches)) {
    html.classList.add("dark");
    // sunIcon.classList.add("hidden");
    // moonIcon.classList.remove("hidden");
  } else if (theme === "light" || (theme === "system" && !isDarkMode.matches)) {
    html.classList.remove("dark");
    // sunIcon.classList.remove("hidden");
    // moonIcon.classList.add("hidden");
  }

  currentTheme = theme;
}

isDarkMode.addEventListener("change", ({ matches }) => {
  // updateTheme(matches);
  if (currentTheme === "system") {
    matches ? html.classList.add("dark") : html.classList.remove("dark");
  }
});

themeOptions.forEach((option) => {
  // alert();
  option.addEventListener("click", () => {
    const theme = option.dataset.themeOption;

    updateThemeUI(theme);
  });
});

// const systemDarkMode = matchMedia.matches;

// updateTheme(systemDarkMode);

document
  .getElementById("toggle-theme-menu")
  .addEventListener("click", () => themeMenu.classList.toggle("hidden"));

// toggleThemeButton.addEventListener("click", () => {
//   //   toggle dark class
//   html.classList.toggle("dark");
//   sunIcon.classList.toggle("hidden");
//   moonIcon.classList.toggle("hidden");
// });
