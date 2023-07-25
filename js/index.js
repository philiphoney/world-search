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
  if (event.keyCode == 13 && !inputempty) {
    let value = [inputvalue.replace(/ /g, "+")];
    let coursevalue = inputvalue.substr(0, inputvalue.length);
    var length = 80;
    if (coursevalue.length > lengthinputlist) {
      coursevalue = coursevalue.substr(0, lengthinputlist) + "...";
    }
    if (Searchtechnology(inputvalue) == false) {
    window.location.href = browser() + value;
      courseList(coursevalue);
    } else {
      for (let i = Searchtechnology(inputvalue).length - 1; i > -1; --i) {
        if (Searchtechnology(inputvalue).length == 1) {
          window.location.href = Searchtechnology(inputvalue)[i];
        } else {
          window.open(Searchtechnology(inputvalue)[i], '_blank');
        }
      }
        courseList(inputvalue);
    }
    document.getElementById("input-search-bar").value = "";
  }
});

var lengthinputlist = 72;

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

  if (settings("browser") == "Yandex") {
    url = "https://yandex.com/search/?text=";
  }

  if (settings("browser") == "Ask") {
    url = "https://www.ask.com/web?q=";
  }

  if (settings("browser") == "Search Brave") {
    url = "https://search.brave.com/search?q=";
  }

  if (settings("browser") == "Wikipedia") {
    url = "https://en.wikipedia.org/wiki/";
  }

  if (settings("browser") == "Ebay") {
    url = "https://www.ebay.de/sch/i.html?_nkw=";
  }

  if (settings("browser") == "Amazon") {
    url = "https://www.amazon.com/s?k=";
  }

  return url;
}

function removeShortcut(n) {
  n = n * 1;
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

// Button
var saveButton = document.getElementById("button-0");
var cancelButton = document.getElementById("button-1");
var input = document.getElementById("input-search-bar");
var addshortcutButton;
var removeButton;

var shortcutL = 0;

// Shortcut list
function shortcutlist() {
  let localStorageshortcut = localStorage["shortcut"];
  let sc = JSON.parse(localStorageshortcut);
  var removeIcon = ""
  shortcutL = sc.length;
  document.getElementById("ul").innerHTML = "";
  if (!settings("remove icon")) {
    removeIcon = "display: none"
  } else {
   removeIcon = ""
  }

  for (let i = 0; i < sc.length; ++i) {
    var title = sc[i].name[0];
    var imageID = ""
    if (title.length > 7) {
      title = title.substr(0, 7) + "...";
    }
    if (sc[i].name[2] == "./image/globus-64.png" && settings("theme") == "dark") {
      imageID = "light-image"
    }
    document.getElementById("ul").innerHTML +=
      `<li id="li-` +
      i +
      `">
        <div class="banner">
        <a id="remove" style="`+removeIcon+`" href="#n` +
      i +
      `" class="material-symbols-outlined banner-icon">bookmark_remove</a>
        <a class="banner-a" id="href-0" href="` +
      sc[i].name[1] +
      `">
        <img id="`+imageID+`" src="` +
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
  ).innerHTML += `<li><div class="banner"><a class="banner-a" id="addS" href="##"><div class="material-symbols-outlined">add_circle</div></a></div><span>Shortcut</span></li>`;

  addshortcutButton = document.getElementById("addS");
  addshortcutButton.addEventListener("click", (event) => {
    addshortcut();
  });

  loopstart1();
}
function loopstart1() {
  setTimeout(time_evend, 300);
  function time_evend() {
    hreftest();
    loopstart1();
  }
}

var theendN = null;
function hreftest() {
  let localStorageshortcut = localStorage["shortcut"];
  let sc = JSON.parse(localStorageshortcut);
  shortcutL = sc.length;
  var liveEnd = location.href.indexOf("#n");
  if (liveEnd > 0) {
    theendN = location.href.substr(liveEnd + 2, location.href.length) * 1;
    removeShortcut(theendN);
    location.href = "";
  }
}

function dark() {
  document.getElementById("background-img").src =
    "./image/world-search-logo-white.webp";
  document.getElementById("body").style =
    `--color-activation:` +
    settings("activation")[1] +
    `; --color-input-border: #3f3f3f;  --background: #212121; --color-text: #ffffff;  --color-activating-elements: #2f313e59;  --color-button: #484747;   --color-border: #808080;   --background-2: #3a3a3a;`;
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
        "background-color: var(--color-activation); border: 2px solid var(--color-activation);";
    } else {
      document.getElementById("button-0").style =
        "background-color: var(--color-button);";
      save = false;
    }
  }
}

saveButton.addEventListener("click", (event) => {
  scSave();
});

cancelButton.addEventListener("click", (event) => {
  document.getElementById("box-input-0").value = "";
  document.getElementById("box-input-1").value = "";
  document.getElementById("opne-nev").style = "display: none";
  document.getElementById("button").style = "margin-top: 20px";
  document.getElementById("error").innerText = "";
});

function scSave() {
  let localStorageshortcut = localStorage["shortcut"];
  let sc = JSON.parse(localStorageshortcut);
  var scimage = "";

  if (save) {
    var inputName = document.getElementById("box-input-0").value;
    var inputUrl = document.getElementById("box-input-1").value;

    if (Searchtechnology(inputUrl) == false) {
      document.getElementById("button").style = "margin-top: 0px";
      document.getElementById("error").innerText = "this is not a url";
    } else {
      document.getElementById("button").style = "margin-top: 20px";
      document.getElementById("error").innerText = "";
      inputUrl = Searchtechnology(inputUrl)[0];
      var icon = "https://www.google.com/s2/favicons?domain="+inputUrl+"&sz=128"
      saveData(icon);
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
}
input.addEventListener("click", (event) => {
  inputClick();
});

input.addEventListener("keyup", (event) => {
  inputlist();
});

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
      var a = ""
      if (course[i].split("").length > lengthinputlist) {
        a = course[i].substr(0, lengthinputlist) + "...";

      } else {
        a = course[i]
      }
      document.getElementById("course").innerHTML +=
        `<a href="` +
        urlLink(course[i]) +
        `" class="course-a" id="course-` +
        i +
        `">`+
        a
        +
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
        var a = ""
        if (course[i].split("").length > lengthinputlist) {
          a = course[i].substr(0, lengthinputlist) + "...";
  
        } else {
          a = course[i]
        }
        document.getElementById("course").innerHTML +=
          `<a href="` +
          urlLink(course[i]) +
          `" class="course-a" id="course-` +
          i +
          `">` +
          a +
          `</a>`;
      }
    } else {
      for (let i = 0; i < course.length; ++i) {
        document.getElementById("course").innerHTML = "";
        document.getElementById("course").style = "display: none;";
        document.getElementById("input-search-bar").style =
          "border-radius: 10px;";
        for (let i = 0; i < courselength; ++i) {
          var a = ""
          if (course[i].split("").length > lengthinputlist) {
            a = course[i].substr(0, lengthinputlist) + "...";
    
          } else {
            a = course[i]
          } 
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
              a +
              `</a>`;
          }
        }
      }
    }
  }
}

function courseList(value) {
  if (settings("courselist")) {
    let localStoragecourse = localStorage["course"];
    let courselist = JSON.parse(localStoragecourse);
    courselist[courselist.length] = value;
    localStorage.setItem("course", JSON.stringify(courselist));
  }
}

function urlLink(value) {
  let valuePlus = value.replace(/ /g, "+");
  var valueEnd = Searchtechnology(valuePlus);
  if (valueEnd == false) {
    return browser() + valuePlus;
  } else {
    return valueEnd;
  }
}

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 50) {
    document.getElementsByClassName("input-search")[0].style.display = "none";
  } else {
    document.getElementsByClassName("input-search")[0].style.display = "block";
  }
});

start();
shortcutlist();
courseLow();
function start() {
  if (settings("theme") == "dark") {
    dark();
    document.getElementById("icon").href =
      "./image/world-search-icon-white.webp";
  } else {
    document.getElementById("body").style =
      `--color-activation:` + settings("activation")[1] + `;`;
  }

  if (!settings("logo")) {
    document.getElementById("background-img").style = "display: none";
    document.getElementsByClassName("content")[0].style.paddingTop = "252px";
  }

  if (settings("backgroundimage") == "") {
  } else {
    if (settings("backgroundimageboolean")) {
      document.getElementById("wallpaper-image").style =
        "background-image: url(" + settings("backgroundimage") + ")";
    }
  }

  document
    .getElementById("input-search-bar")
    .setAttribute("placeholder", "Search with " + settings("browser"));
}
document.querySelector("#content-nav").addEventListener("click", () => {
  document.getElementById("course").style = "display: none;";
  document.getElementById("input-search-bar").style = "border-radius: 10px;";
});

function Searchtechnology(value) {
  var output = [];
  var c = -1;
  var urlRegex =
    /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;
  value.replace(urlRegex, function (url) {
    if (url.indexOf("http") == -1) {
      url = "https://" + url;
    }
    c += 1;
    output[c] = url;
  });
  if (output[0] == undefined) {
    return false;
  } else {
    return output;
  }
}
var a = 1

// offline
loopstart(); function loopstart() {setTimeout (time_evend, 0); function time_evend() {
  if (window.navigator.onLine == false || a == 0) {
    document.getElementById("off").innerHTML = `<div id="wifi-off"><img src="./image/wifi-off.svg" alt=""></br><span>The world is offline</span></div>`
    document.getElementById("select").style = "display: none"
    document.getElementById("off").style = "display: block"
    document.getElementById("wallpaper-image").style = "";
  } else {
    document.getElementById("off").innerHTML = `<span></span>`
    document.getElementById("select").style = "display: flex"
    document.getElementById("wallpaper-image").style =
    "background-image: url(" + settings("backgroundimage") + ")";
  }
loopstart();
}}