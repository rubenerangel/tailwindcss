const html = document.documentElement;
// const lightIcon =
// const darkIcon = document.getElementById("dark-icon");
// const systemIcon = document.getElementById("system-icon");
const themeOptions = document.querySelectorAll("[data-theme-option]");
const themeMenu = document.getElementById("theme-menu");
const icons = {
  light: document.getElementById("light-icon"),
  dark: document.getElementById("dark-icon"),
  system: document.getElementById("system-icon"),
};

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
}

themeOptions.forEach((option) => {
  // alert();
  option.addEventListener("click", () => {
    const theme = option.dataset.themeOption;

    updateThemeUI(theme);
  });
});

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
const systemDarkMode = matchMedia.matches;

// updateTheme(systemDarkMode);

matchMedia.addEventListener("change", ({ matches }) => {
  updateTheme(matches);
});

// function updateTheme(darkMode) {
//   if (darkMode) {
// html.classList.add("dark");
// lightIcon.classList.add("hidden");
// darkIcon.classList.add("hidden");
// systemIcon.classList.remove("hidden");
// } else {
// html.classList.remove("dark");
// lightIcon.classList.add("hidden");
// darkIcon.classList.add("hidden");
// systemIcon.classList.remove("hidden");
//   }
// }

document
  .getElementById("toggle-theme-menu")
  .addEventListener("click", () => themeMenu.classList.toggle("hidden"));

// toggleThemeButton.addEventListener("click", () => {
//   //   toggle dark class
//   html.classList.toggle("dark");
//   sunIcon.classList.toggle("hidden");
//   moonIcon.classList.toggle("hidden");
// });
