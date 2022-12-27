window.onload = function screen_test() {
  startTheSettings();
  storage();
};

function storage() {
  let localStoragecourse = localStorage["course"];
  let localStorageshortcut = localStorage["shortcut"];
  let localStoragesettings = localStorage["storage-of-settings"];

  var courseStorage = (localStoragecourse.length / 1000).toFixed(3) * 1;
  var shortcutStorage = (localStorageshortcut.length / 1000).toFixed(3) * 1;
  var systemStorage = (localStoragesettings.length / 1000).toFixed(3) * 1;
  var storage = (courseStorage + shortcutStorage + systemStorage).toFixed(3);

  // percent to 5000
  (storage / 0.5).toFixed(1).replace(".", "") * 1;

  document.getElementById("e-course").innerText = courseStorage + " Bit";
  document.getElementById("e-shortcut").innerText = shortcutStorage + " Bit";
  document.getElementById("e-system").innerText = systemStorage + " Bit";
  document.getElementById("e-used").innerText = storage + " Bit";
}

function startTheSettings() {
  document.getElementsByClassName("engine")[0].innerHTML = settings("browser");
  if (settings("decreasesearchhistorylog") == true) {
    document.getElementById("shl").innerHTML = "toggle_on";
    document.getElementById("shl").className = "material-symbols-outlined on";
  } else {
    document.getElementById("shl").innerHTML = "toggle_off";
    document.getElementById("shl").className = "material-symbols-outlined off";
  }

  if (settings("logo") == true) {
    document.getElementById("logoRemove").innerHTML = "toggle_on";
    document.getElementById("logoRemove").className =
      "material-symbols-outlined on";
  } else {
    document.getElementById("logoRemove").innerHTML = "toggle_off";
    document.getElementById("logoRemove").className =
      "material-symbols-outlined off";
  }

  if (settings("backgroundimageboolean") == true) {
    document.getElementById("wallpaper").innerHTML = "toggle_on";
    document.getElementById("wallpaper").className =
      "material-symbols-outlined on";
  } else {
    document.getElementById("wallpaper").innerHTML = "toggle_off";
    document.getElementById("wallpaper").className =
      "material-symbols-outlined off";
  }

  if (settings("theme") == "auto") {
  }

  if (settings("theme") == "dark") {
    document.getElementById("icon").href =
      "../image/world-search-icon-white.webp";
    document.getElementById("dark").style =
      "border: 3px solid var(--color-activation);";
    document.getElementById("background-img").src =
      "../image/world-search-logo-white.webp";
    document.getElementById("body").style =
      `--color-activation:` +
      settings("activation")[1] +
      `; --color-input-border: #3f3f3f;  --background: #212121; --color-text: #ffffff;  --color-activating-elements: #2f313e59;  --color-button: #484747;   --color-border: #808080;   --background-2: #3a3a3a;`;
  }

  if (settings("theme") == "light") {
    document.getElementById("light").style =
      "border: 3px solid var(--color-activation);";
    document.getElementById("body").style =
      `--color-activation:` + settings("activation")[1];
  }

  if (settings("backgroundimage") == "") {
  } else {
    document.getElementById("image-input-value").value =
      settings("backgroundimage");
  }
}

function shl() {
  if (settings("decreasesearchhistorylog") == true) {
    EditSettings("decreasesearchhistorylog", false);
  } else {
    EditSettings("decreasesearchhistorylog", true);
  }
  startTheSettings();
}

function resetCensel() {
  document.getElementById(
    "e-reset"
  ).innerHTML = `<a id="reset" href="##" onclick="reset0()"><span href="">Reset to default</span></a>`;
}

function reset0() {
  document.getElementById(
    "e-reset"
  ).innerHTML = `<a id="reset" href="##"><span href="" onclick="reset1()">Reset to default</span><span id="censel" onclick="resetCensel()" href="##" >Censel</span></a>`;
}

function reset1() {
  window.location.href = "";
  localStorage.clear();
}

function selectEngine() {
  var element = document.getElementById("select-engine");
  var value = element.options[element.selectedIndex].value;
  console.log(value);
  EditSettings("browser", value);
  startTheSettings();
}

function themeAuto() {
  EditSettings("theme", "auto");
  startTheSettings();
}

function themeDark() {
  EditSettings("theme", "dark");
  startTheSettings();
}

function themeLight() {
  EditSettings("theme", "light");
  startTheSettings();
}

function logoRemove() {
  if (settings("logo") == true) {
    EditSettings("logo", false);
  } else {
    EditSettings("logo", true);
  }
  startTheSettings();
}

function wallpaper() {
  if (settings("backgroundimageboolean") == true) {
    EditSettings("backgroundimageboolean", false);
  } else {
    EditSettings("backgroundimageboolean", true);
  }
  bib();
  startTheSettings();
}

function activation(value, colorid) {
  EditSettings("activation", value, colorid);
  startTheSettings();
}

function chl() {
  localStorage.setItem("course", "[]");
  storage();
}

function setImg() {
  var value = document.getElementById("image-input-value").value;
  EditSettings("backgroundimage", value);
  console.log(settings("backgroundimage"));
  startTheSettings();
}
