function toggleMode() {
  const currentTheme = document.documentElement.getAttribute("data-cu-theme");
  let newTheme;
  if (currentTheme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }
  setThemePreference(newTheme);
}

function setThemePreference(theme) {
  document.documentElement.setAttribute("data-cu-theme", theme);
  localStorage.setItem("theme", theme);
}

const currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
  setThemePreference("dark");
}

setThemePreference(currentTheme || "light");
setIconBasedOnTheme();