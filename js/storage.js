if (localStorage["storage-of-settings"] != null) {
} else {
  localStorage.setItem("storage-of-settings", JSON.stringify(startSettings));
}

if (localStorage["shortcut"] != null) {
} else {
  localStorage.setItem("shortcut", JSON.stringify(scl));
}

if (localStorage["course"] != null) {
} else {
  localStorage.setItem("course", JSON.stringify(course));
}

function settings(value) {
  let localStorageSettings = localStorage["storage-of-settings"];
  let settings = JSON.parse(localStorageSettings);

  if (settings[value] == undefined) {
    newSettings(value);
  }

  if (value == "browser") {
    return settings.browser;
  }

  if (value == "courselist") {
    return settings.courseList;
  }

  if (value == "decreasesearchhistorylog") {
    return settings.decreasesearchhistorylog;
  }

  if (value == "theme") {
    return settings.theme;
  }

  if (value == "logo") {
    return settings.logo;
  }

  if (value == "activation") {
    return settings.activation;
  }

  if (value == "backgroundimage") {
    return settings.backgroundimage;
  }

  if (value == "backgroundimageboolean") {
    return settings.backgroundimageboolean;
  }

  if (value == "#n") {
    return settings["#n"];
  }

  if (value == "version") {
    return settings.version;
  }
}

function EditSettings(value, newValue, newLink) {
  let localStorageSettings = localStorage["storage-of-settings"];
  let settings = JSON.parse(localStorageSettings);

  if (value == "browser") {
    console.log(newValue, value);
    settings.browser = newValue;
  }

  if (value == "courselist") {
    settings.courseList = newValue;
  }

  if (value == "addlink") {
    settings.shortcut[settings.shortcut.length + 1] = [newValue, newLink];
    settings.shortcut.length = settings.shortcut.length + 1;
  }

  if (value == "decreasesearchhistorylog") {
    settings.decreaseSearchHistoryLog = newValue;
  }

  if (value == "theme") {
    settings.theme = newValue;
  }

  if (value == "logo") {
    settings.logo = newValue;
  }

  if (value == "activation") {
    settings.activation[0] = newValue;
    settings.activation[1] = newLink;
  }

  if (value == "backgroundimage") {
    settings.backgroundimage = newValue;
  }

  if (value == "backgroundimageboolean") {
    settings.backgroundimageboolean = newValue;
  }

  if (value == "#n") {
    settings["#n"] = newValue;
  }

  localStorage.setItem("storage-of-settings", JSON.stringify(settings));
}

function newSettings(value) {
  let localStorageSettings = localStorage["storage-of-settings"];
  let settingsJson = JSON.parse(localStorageSettings);
  settingsJson[value] = startSettings[value];
  console.log(value)
  localStorage.setItem("storage-of-settings", JSON.stringify(settingsJson));
  settings(value);
}


function courseLow() {
  let localStoragecourse = localStorage["course"];
  let course = JSON.parse(localStoragecourse);

  if (settings("decreasesearchhistorylog") == true && 99 < course.length) {
    let newcourse = [];
    var b = course.length - 100;
    for (let i = 0; i < course.length - b; ++i) {
      newcourse[i] = course[b + i];
    }
    localStorage.setItem("course", JSON.stringify(newcourse));
  }
}