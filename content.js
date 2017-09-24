// content.js
var firstBar = document.getElementById(":mp");

// if (firstBar != null) {
//   var lyftButton = document.createElement("a");
//   lyftButton.setAttribute("href", "#");
//   lyftButton.setAttribute("class", "_ck rrenl");
//   var innerDiv = document.createElement("div");
//   innerDiv.setAttribute("class", "_Sf");
//   var innerSpan = document.createElement("span");
//   innerSpan.setAttribute("style", "background-image: " + chrome.extension.getURL('sprites.png'));
//   var innerinnerDiv = document.createElement("div");
//   innerinnerDiv.setAttribute("class", "_Bx");
//   innerDiv.appendChild(innerSpan);
//   innerDiv.appendChild(innerinnerDiv);
//   lyftButton.appendChild(innerDiv);
//   firstBar.appendChild(lyftButton);
// }

<div class="wG J-Z-I" data-tooltip="Setup a Lyft" aria-label="Setup a Lyft" tabindex="1" id=":q6" role="button" aria-pressed="false" aria-haspopup="true" aria-expanded="false" style="user-select: none;"><div class="J-J5-Ji J-Z-I-Kv-H" style="user-select: none;"><div class="J-J5-Ji J-Z-I-J6-H" style="user-select: none;"><div id=":q5" class="a1 aaA aMZ" style="user-select: none;"><div class="a3I" style="user-select: none;">&nbsp;</div></div></div></div></div>

if (firstBar != null) {
  var lyftButton = document.createElement("a");
  lyftButton.setAttribute("href", "#");
  lyftButton.setAttribute("class", "_ck rrenl");
  var innerDiv = document.createElement("div");
  innerDiv.setAttribute("class", "_Sf");
  var innerSpan = document.createElement("span");
  innerSpan.setAttribute("style", "background-image: " + chrome.extension.getURL('sprites.png'));
  var innerinnerDiv = document.createElement("div");
  innerinnerDiv.setAttribute("class", "_Bx");
  innerDiv.appendChild(innerSpan);
  innerDiv.appendChild(innerinnerDiv);
  lyftButton.appendChild(innerDiv);
  firstBar.appendChild(lyftButton);
}
