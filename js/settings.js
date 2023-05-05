window.onload = function screen_test() {
  startTheSettings();
  storage();
};

function storage() {
  let localStoragecourse = localStorage["course"];
  let localStorageshortcut = localStorage["shortcut"];
  let localStoragesettings = localStorage["storage-of-settings"];

  var storage =
    localStoragecourse.length +
    localStorageshortcut.length +
    localStoragesettings.length;
  document.getElementById("e-course").innerText = storagelist(
    localStoragecourse.length
  );
  document.getElementById("e-shortcut").innerText = storagelist(
    localStorageshortcut.length
  );
  document.getElementById("e-system").innerText = storagelist(
    localStoragesettings.length
  );
  document.getElementById("e-used").innerText = storagelist(storage);
}

// Button
var lightButton = document.getElementById("light");
var darkButton = document.getElementById("dark");
var logoremoveButton = document.getElementById("logoremove");
var wallpaperButton = document.getElementById("wallpaper-toggle");
var setImageButton = document.getElementById("set-img");
var selectEngineButton = document.getElementById("select-engine");
var shlButton = document.getElementById("shl");
var chlButton = document.getElementById("chl-reset");
var resetButton = document.getElementById("reset");
var resetFullButton = document.getElementById("reset-1");
var censelButton = document.getElementById("censel");
var saveHistoryButton = document.getElementById("save-history-toggle");
var iconRemoveButton = document.getElementById("iconremove");

// Butten Color
var colorRedButton = document.getElementById("color-red");
var colorBlueButton = document.getElementById("color-blue");
var colorOrangeButton = document.getElementById("color-orange");
var colorYellowButton = document.getElementById("color-yellow");
var colorPurpleButton = document.getElementById("color-purple");
var colorGreenButton = document.getElementById("color-green");
var colorGreyButton = document.getElementById("color-grey");

// Button color action
colorRedButton.addEventListener("click", (event) => {
  activation("red", "#f95050");
});

colorBlueButton.addEventListener("click", (event) => {
  activation("blue", "#00c3ffd1");
});

colorOrangeButton.addEventListener("click", (event) => {
  activation("orange", "#fd812e");
});

colorYellowButton.addEventListener("click", (event) => {
  activation("yellow", "#ffd344");
});

colorPurpleButton.addEventListener("click", (event) => {
  activation("purple", "#c339ff");
});

colorGreenButton.addEventListener("click", (event) => {
  activation("green", "#80f950");
});

colorGreyButton.addEventListener("click", (event) => {
  activation("grey", "#a5a5a5");
});

// Button action
lightButton.addEventListener("click", (event) => {
  themeLight();
});

darkButton.addEventListener("click", (event) => {
  themeDark();
});

logoremoveButton.addEventListener("click", (event) => {
  logoRemove();
});

wallpaperButton.addEventListener("click", (event) => {
  wallpaper();
});

setImageButton.addEventListener("click", (event) => {
  setImg();
});

selectEngineButton.addEventListener("change", (event) => {
  selectEngine();
});

shlButton.addEventListener("click", (event) => {
  shl();
});

chlButton.addEventListener("click", (event) => {
  chl();
});

resetButton.addEventListener("click", (event) => {
  reset0();
});

censelButton.addEventListener("click", (event) => {
  resetCensel();
});

resetFullButton.addEventListener("click", (event) => {
  reset1();
});

saveHistoryButton.addEventListener("click", (event) => {
  if (settings("courselist")) {
    EditSettings("courselist", false);
  } else {
    EditSettings("courselist", true);
  }
  startTheSettings();
});

iconRemoveButton.addEventListener("click", (event) => {
  if (settings("remove icon")) {
    EditSettings("remove icon", false);
  } else {
    EditSettings("remove icon", true);
  }
  startTheSettings();
});


document.getElementById("c").innerHTML =
  "© Copyright " + new Date().getFullYear() + " World Search";

function startTheSettings() {
  document.getElementsByClassName("engine")[0].innerHTML = settings("browser");
  if (settings("decreasesearchhistorylog")) {
    document.getElementById("shl").innerHTML = "toggle_on";
    document.getElementById("shl").className = "material-symbols-outlined on";
  } else {
    document.getElementById("shl").innerHTML = "toggle_off";
    document.getElementById("shl").className = "material-symbols-outlined off";
  }

  if (settings("logo")) {
    document.getElementById("logoRemove").innerHTML = "toggle_on";
    document.getElementById("logoRemove").className =
      "material-symbols-outlined on";
  } else {
    document.getElementById("logoRemove").innerHTML = "toggle_off";
    document.getElementById("logoRemove").className =
      "material-symbols-outlined off";
  }

  if (settings("backgroundimageboolean")) {
    document.getElementById("wallpaper").innerHTML = "toggle_on";
    document.getElementById("wallpaper").className =
      "material-symbols-outlined on";
  } else {
    document.getElementById("wallpaper").innerHTML = "toggle_off";
    document.getElementById("wallpaper").className =
      "material-symbols-outlined off";
  }

  if (settings("courselist")) {
    document.getElementById("save-history").innerHTML = "toggle_on";
    document.getElementById("save-history").className =
      "material-symbols-outlined on";
  } else {
    document.getElementById("save-history").innerHTML = "toggle_off";
    document.getElementById("save-history").className =
      "material-symbols-outlined off";
  }

  if (settings("remove icon")) {
    document.getElementById("iconRemove").innerHTML = "toggle_on";
    document.getElementById("iconRemove").className =
      "material-symbols-outlined on";
  } else {
    document.getElementById("iconRemove").innerHTML = "toggle_off";
    document.getElementById("iconRemove").className =
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
  if (settings("decreasesearchhistorylog")) {
    EditSettings("decreasesearchhistorylog", false);
  } else {
    EditSettings("decreasesearchhistorylog", true);
  }
  startTheSettings();
}

function resetCensel() {
  document.getElementById("e-reset").style = "display: block";
  document.getElementById("e-reset-2").style = "display: none";
}

function reset0() {
  document.getElementById("e-reset").style = "display: none";
  document.getElementById("e-reset-2").style = "display: block";
}

function reset1() {
  window.location.href = "";
  localStorage.clear();
}

function selectEngine() {
  var element = document.getElementById("select-engine");
  var value = element.options[element.selectedIndex].value;
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
  if (settings("logo")) {
    EditSettings("logo", false);
  } else {
    EditSettings("logo", true);
  }
  startTheSettings();
}

function wallpaper() {
  if (settings("backgroundimageboolean")) {
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
  startTheSettings();
}

function storagelist(v) {
  var kb = (v / 1024).toFixed(2) * 1;
  var mb = (v / 1048576).toFixed(2) * 1;
  var gb = (v / 1073741824).toFixed(2) * 1;
  var tb = (v / 1099511627776).toFixed(0) * 1;
  var output = v + " Byte";

  if (v >= 1024) {
    output = kb + " KB";
  }

  if (v >= 1048576) {
    output = mb + " MB";
  }

  if (v >= 1073741824) {
    output = gb + " GB";
  }

  if (v >= 1099511627776) {
    output = tb + " TB";
  }

  return output;
}

// End

document.getElementById("v").innerText = system.version;

bib();
function bib() {
  if (settings("backgroundimageboolean")) {
    document.getElementById("content-add-wallpaper").style = "display: block";
  } else {
    document.getElementById("content-add-wallpaper").style = "display: none";
  }
}
