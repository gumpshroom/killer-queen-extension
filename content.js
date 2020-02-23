var buttons = document.getElementsByTagName('button');
var links = document.getElementsByTagName('a')

/*var buttonText = []
for(var x = 0; x < buttons.length; i++) {
  buttonText.push(buttons[x].innerText)
}
var linkText = []
for(var x = 0; x < links.length; i++) {
  linkText.push(links[x].innerText)
}*/
for (var i = 0, l = buttons.length; i < l; i++) {
  //var x = document.createElement("div")
  //x.setAttribute("id", "kqtooltip" + i)
  /*tippy('#kqtooltip' + i, {
    content: "Wait! Killer Queen has already touched that button!!"
  });
  buttons[i].appendChild(x)*/

  /*x.setAttribute("class", "tooltiptext")
  x.innerHTML = "Wait! Killer Queen has already touched that button!!"
  buttons[i].appendChild(x)
  buttons[i].setAttribute("class", "tooltip")*/

  buttons[i].setAttribute("onmouseover", "kqtouchedb(this)")
  //buttons[i].setAttribute("onmouseout", "remkqtouchedb(this, " + i + ")")
}
for (var i = 0, l = links.length; i < l; i++) {
  /*var x = document.createElement("div")
  x.setAttribute("id", "kqtooltip" + i)*/
  /*tippy('#kqtooltip' + i, {
    content: "Wait! Killer Queen has already touched that button!!"
  });*/

  /*x.setAttribute("class", "tooltiptext")
  x.innerHTML = "Wait! Killer Queen has already touched that button!!"
  links[i].appendChild(x)
  links[i].setAttribute("class", "tooltip")

  links[i].appendChild(x)*/
  links[i].setAttribute("onmouseover", "kqtouchedl(this)")
  //links[i].setAttribute("onmouseout", "remkqtouchedl(this, " + i + ")")
}
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remkqtouchedb (elem, index) { /* added argument */
  elem.innerText = buttonText[index]
}
function remkqtouchedl (elem, index) { /* added argument */
  elem.innerText = linkText[index]
}
function kqtouchedb (elem) {  /* added argument */
  elem.innerText="Wait!! Killer Queen has already touched that button!!"; /* changed variable to argument */
}
function kqtouchedl (elem) {  /* added argument */
  elem.innerText="Wait!! Killer Queen has already touched that link!!"; /* changed variable to argument */
}
