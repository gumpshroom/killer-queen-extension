var buttons = document.getElementsByTagName('button');
var links = document.getElementsByTagName('a')

for (var i = 0, l = buttons.length; i < l; i++) {
  var x = document.createElement("div")
  x.setAttribute("id", "kqtooltip" + i)
  tippy('#kqtooltip' + i, {
    content: "Wait! Killer Queen has already touched that button!!"
  });
  buttons[i].appendChild(x)
  /*
  x.setAttribute("class", "tooltiptext")
  x.innerHTML = "Wait! Killer Queen has already touched that button!!"
  buttons[i].appendChild(x)
  buttons[i].setAttribute("class", "tooltip")
   */
}
for (var i = 0, l = links.length; i < l; i++) {
  var x = document.createElement("div")
  x.setAttribute("id", "kqtooltip" + i)
  tippy('#kqtooltip' + i, {
    content: "Wait! Killer Queen has already touched that button!!"
  });
  /*
  x.setAttribute("class", "tooltiptext")
  x.innerHTML = "Wait! Killer Queen has already touched that button!!"
  links[i].appendChild(x)
  links[i].setAttribute("class", "tooltip")
  */
  links[i].appendChild(x)
}
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
