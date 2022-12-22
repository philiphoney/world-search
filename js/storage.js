if (localStorage["storage-of-settings"] != null) {}
else {localStorage.setItem('storage-of-settings', JSON.stringify(startSettings));}

if (localStorage["shortcut"] != null) {}
else {localStorage.setItem('shortcut', JSON.stringify(scl));}

if (localStorage["course"] != null) {}
else {localStorage.setItem('course', JSON.stringify(course));}

function settings(value) {
    let localStorageSettings = (localStorage["storage-of-settings"]);
    let settings = JSON.parse(localStorageSettings);

     if (value == "browser") {
      return settings.browser;
     }

     if (value == "courselist") {
        return settings.courseList;
        }
}


function EditSettings(value, newValue, newLink) {
    let localStorageSettings = (localStorage["storage-of-settings"]);
    let settings = JSON.parse(localStorageSettings);

    if (value == "browser") {
    settings.browser = newValue;
    }

    if (value == "courselist") {
    settings.courseList = newValue;
    }

    if (value == "addlink") {
        settings.shortcut[settings.shortcut.length +1] = [newValue, newLink];
        settings.shortcut.length = settings.shortcut.length +1
}

localStorage.setItem('storage-of-settings', JSON.stringify(settings));
}

