const toggleThemeButton = document.getElementById("toggle-dark-mode");
const html = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

toggleThemeButton.addEventListener("click", () => {
  //   toggle dark class
  html.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});
