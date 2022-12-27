// Enter search
document.addEventListener("keydown", (event) => {
  var inputempty = true;
  let inputvalue = document.getElementById("input-search-bar").value;
  if (inputvalue == "") {
    inputempty = true;
  } else {
    inputempty = false;
  }
  const keyCode = event.key;
  if (event.keyCode == 13 && inputempty == false) {
    let value = [inputvalue.replace(/ /g, "+")];
    let coursevalue = inputvalue.substr(0, inputvalue.length);
    courseList(coursevalue);
    window.location.href = browser() + value;
    document.getElementById("input-search-bar").value = "";
  }
});

function browser() {
  if (settings("browser") == "Google") {
    url = "https://google.com/search?q=";
  }

  if (settings("browser") == "Bing") {
    url = "https://bing.com/search?q=";
  }

  if (settings("browser") == "Ecosia") {
    url = "https://ecosia.org/search?q=";
  }

  if (settings("browser") == "Duckduckgo") {
    url = "https://duckduckgo.com/?q=";
  }

  if (settings("browser") == "Baidu") {
    url = "https://baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";
  }

  return url;
}

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

function dark() {
  document.getElementById("background-img").src ="./image/world-search-logo-white.webp";
  document.getElementById(
    "body"
  ).style = `--color-activation:`+settings("activation")[1]+`; --color-input-border: #3f3f3f;  --background: #212121; --color-text: #ffffff;  --color-activating-elements: #2f313e59;  --color-button: #484747;   --color-border: #808080;   --background-2: #3a3a3a;`;
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
    var inputUrl = document.getElementById("box-input-1").value;
    if (inputUrl.split("")[inputUrl.length - 1] == "/") {
    } else {
      inputUrl + "/";
    }

    var clearLine = inputUrl.replace("//", "--");
    var endofDomain = clearLine.indexOf("/") + 1;
    var icon = inputUrl.substr(0, endofDomain) + "favicon.ico";
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
      sc[sc.length] = { name: [inputName, inputUrl, img] };
      localStorage.setItem("shortcut", JSON.stringify(sc));
      document.getElementById("box-input-0").value = "";
      document.getElementById("box-input-1").value = "";
      document.getElementById("opne-nev").style = "display: none";
      shortcutlist();
    }
  }
}

function inputClick() {
  let localStoragecourse = localStorage["course"];
  let course = JSON.parse(localStoragecourse);
  var courseToList = 3;

  if (course.length > 10) {
    courselength = 10;
    courseToList = 11;
  } else {
    courselength = course.length;
    courseToList = course.length + 1;
  }

  if (course.length > 0) {
    document.getElementById("input-search-bar").style =
      "border-radius: 10px 10px 0px 0px;";
    document.getElementById("course").style = "display: flex";
    document.getElementById("course").innerHTML = "";

    // start list
    for (let i = course.length - 1; course.length - courseToList < i; --i) {
      document.getElementById("course").innerHTML +=
        `<a href="` +
        urlLink(course[i]) +
        `" class="course-a" id="course-` +
        i +
        `">` +
        course[i] +
        `</a>`;
    }
  }
}

function inputlist() {
  let localStoragecourse = localStorage["course"];
  let course = JSON.parse(localStoragecourse);
  var input = document.getElementById("input-search-bar").value;
  var courseToList = 3;

  if (course.length > 10) {
    courselength = 10;
    courseToList = 11;
  } else {
    courselength = course.length;
    courseToList = course.length + 1;
  }

  if (course.length > 0) {
    // start list
    if (input == "") {
      document.getElementById("course").innerHTML = "";
      for (let i = course.length - 1; course.length - courseToList < i; --i) {
        document.getElementById("course").innerHTML +=
          `<a href="` +
          urlLink(course[i]) +
          `" class="course-a" id="course-` +
          i +
          `">` +
          course[i] +
          `</a>`;
      }
    } else {
      for (let i = 0; i < course.length; ++i) {
        document.getElementById("course").innerHTML = "";
        document.getElementById("course").style = "display: none;";
        document.getElementById("input-search-bar").style =
          "border-radius: 10px;";
        for (let i = 0; i < courselength; ++i) {
          if (course[i].indexOf(input) > -1) {
            document.getElementById("course").style = "display: flex";
            document.getElementById("input-search-bar").style =
              "border-radius: 10px 10px 0px 0px;";
            document.getElementById("course").innerHTML +=
              `<a href="` +
              urlLink(course[i]) +
              `" class="course-a" id="course-` +
              i +
              `">` +
              course[i] +
              `</a>`;
          }
        }
      }
    }
  }
}

function courseList(value) {
  if (settings("courselist") == true) {
    let localStoragecourse = localStorage["course"];
    let courselist = JSON.parse(localStoragecourse);
    courselist[courselist.length] = value;
    localStorage.setItem("course", JSON.stringify(courselist));
  }
}

function urlLink(value) {
  let valueEnd = [value.replace(/ /g, "+")];
  return browser() + valueEnd;
}


window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 50) {
    document.getElementsByClassName("input-search")[0].style.display = "none";
  } else {
    document.getElementsByClassName("input-search")[0].style.display = "block";
  }
});