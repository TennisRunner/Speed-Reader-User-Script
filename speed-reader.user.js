// ==UserScript==
// @name     Speed Reader
// @version  1
// @include *
// @grant       GM.setValue
// @grant       GM.getValue
// ==/UserScript==




function SetSetting(name, value) {
    (async () => {

        await GM.setValue(name, value);

    })();
}

function GetSetting(name, callback) {
    (async () => {

        let result = await GM.getValue(name);

        callback(result);
      
    })();
}

function ready(callback) {
    if (document.readyState != "loading") callback();
	
    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", callback);
	
    else document.attachEvent("onreadystatechange", function() {
        if (document.readyState == "complete") callback();
    });
}

ready(function() {
    var s = document.createElement("script");

    s.src = "https://gauntletofire.com/read/read.js";

    document.head.appendChild(s);
});



















