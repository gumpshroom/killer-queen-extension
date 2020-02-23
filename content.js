var buttons = document.getElementsByTagName('button');
var links = document.getElementsByTagName('a')
for (var i = 0, l = buttons.length; i < l; i++) {
  var x = document.createElement("span")
  x.setAttribute("class", "tooltiptext")
  x.innerHTML = "Wait! Killer Queen has already touched that button!!"
  buttons[i].appendChild(x)
  buttons[i].setAttribute("class", "tooltip")
}
for (var i = 0, l = links.length; i < l; i++) {
  var x = document.createElement("span")
  x.setAttribute("class", "tooltiptext")
  x.innerHTML = "Wait! Killer Queen has already touched that link!!"
  links[i].appendChild(x)
  links[i].setAttribute("class", "tooltip")
}
