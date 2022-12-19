// Enter search
document.addEventListener("keydown", (event) => {
  var inputempty = true;
  var inputvalue = document.getElementById("input-search-bar").value;
  if (inputvalue == "") {
    inputempty = true;
  } else {
    inputempty = false;
  }
  const keyCode = event.key;
  if (event.keyCode == 13 && inputempty == false) {
    let value = [inputvalue.replace(/ /g, "+")];
    var link = "";

    if (settings("browser") == "Google") {
      link = "https://google.com/search?q=";
    }

    if (settings("browser") == "Bing") {
      link = "https://bing.com/search?q=";
    }

    if (settings("browser") == "Ecosia") {
      link = "https://ecosia.org/search?q=";
    }

    if (settings("browser") == "Duckduckgo") {
      link = "https://google.com/";
    }

    if (settings("browser") == "Baidu") {
      link = "https://baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";
    }

    window.location.href = link + value;
    document.getElementById("input-search-bar").value = "";
  }
});

function removeShortcut(n) {
  document.getElementById("li-" + n).remove();
  let localStorageshortcut = localStorage["shortcut"];
  let sc = JSON.parse(localStorageshortcut);
  let newsc = [];
  for (let i = 0; i < n; ++i) {
    newsc[i] = sc[i];
  }

  for (let i = n + 1; i < sc.length; ++i) {
    newsc[i - 1] = sc[i];
  }
  console.log(sc);
  console.log(newsc);
  localStorage.setItem("shortcut", JSON.stringify(newsc));
}

// Shortcut list
function shortcutlist() {
  let localStorageshortcut = localStorage["shortcut"];
  let sc = JSON.parse(localStorageshortcut);
  document.getElementById("ul").innerHTML = "";

  for (let i = 0; i < sc.length; ++i) {
    var title = sc[i].name[0];
    if (title.length > 7) {
      title = title.substr(0, 7) + "...";
    }
    document.getElementById("ul").innerHTML +=
      `<li id="li-` +
      i +
      `">
        <div class="banner">
        <a id="remove" href="##" onclick="removeShortcut(` +
      i +
      `)" class="material-symbols-outlined banner-icon">bookmark_remove</a>
        <a class="banner-a" id="href-0" href="` +
      sc[i].name[1] +
      `">
        <img src="` +
      sc[i].name[2] +
      `" alt="">
        </a>
        </div>
        <span id="title-0">` +
      title +
      `</span></li>`;
  }
  document.getElementById(
    "ul"
  ).innerHTML += `<li><div class="banner"><a class="banner-a" id="href-0" href="##" onclick="addshortcut()"><div class="material-symbols-outlined">add_circle</div></a></div><span>Shortcut</span></li>`;
}

function test() {
  document.getElementById("title").innerText = "Neuer Tab";
  document.getElementById("icon").href = "./image/world-search-icon-white.webp";
}

function dark() {
  document.getElementById("background-img").src =
    "./image/world-search-logo-white.webp";
  document.getElementById(
    "body"
  ).style = `--color-input-border: #3f3f3f; --background: #262731; --color-text: #ffffff;  --color-activating-elements: #2f313e59;  --color-button: #484747;`;
}

// add shortcut
var save = false;
function addshortcut() {
  document.getElementById("opne-nev").style = "display: block";
  loopstart();
  function loopstart() {
    setTimeout(time_evend, 100);
    function time_evend() {
      loop();
      loopstart();
    }
  }
  function loop() {
    var inputName = document.getElementById("box-input-0").value;
    var inputUrl = document.getElementById("box-input-1").value;
    if (inputUrl.length > 0 && inputName.length > 0) {
      save = true;
      document.getElementById("button-0").style =
        "background-color: var(--color-activation);";
    } else {
      document.getElementById("button-0").style =
        "background-color: var(--color-button);";
      save = false;
    }
  }
}

function scCancel() {
  document.getElementById("box-input-0").value = "";
  document.getElementById("box-input-1").value = "";
  document.getElementById("opne-nev").style = "display: none";
}

function scSave() {
  let localStorageshortcut = localStorage["shortcut"];
  let sc = JSON.parse(localStorageshortcut);
  var scimage = "";

  if (save == true) {
    var inputName = document.getElementById("box-input-0").value;
    var inputUrl = document.getElementById("box-input-1").value + "/";

    var clearLine = inputUrl.replace("//", "--");
    var endofDomain = clearLine.indexOf("/") + 1;
    var icon = inputUrl.substr(0, endofDomain) + "favicon.ico";
    console.log(icon);
    testImage(icon);
    function testImage(url) {
      var img = new Image();
      img.onerror = img.onabort = function () {
        scimage = "./image/globus-64.png";
        saveData(scimage);
      };
      img.onload = function () {
        scimage = icon;
        saveData(scimage);
      };
      img.src = url;
    }

    function saveData(img) {
      console.log(img);
      sc[sc.length] = { name: [inputName, inputUrl, img] };
      localStorage.setItem("shortcut", JSON.stringify(sc));
      document.getElementById("box-input-0").value = "";
      document.getElementById("box-input-1").value = "";
      document.getElementById("opne-nev").style = "display: none";
      shortcutlist();
    }
  }
}
