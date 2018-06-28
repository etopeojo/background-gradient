var cssh3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var bodyBackground = window.getComputedStyle(body).getPropertyValue('background');

cssh3.textContent = bodyBackground;

function setGradient() {
	body.style.background = 
							"linear-gradient(to right, " 
							+ color1.value 
							+ ", " 
							+ color2.value
							+ ")";
	button.style.background = 
							"linear-gradient(to right, " 
							+ color1.value 
							+ ", " 
							+ color2.value
							+ ")";

	cssh3.textContent = body.style.background + ";";
}

function setRandomGradient() {
	var randColor1 = getRandomColor()
	var randColor2 = getRandomColor();
	color1.value = randColor1;
	color2.value = randColor2;
	body.style.background = 
							"linear-gradient(to right, " 
							+ randColor1 
							+ ", " 
							+ randColor2
							+ ")";
	button.style.background = 
							"linear-gradient(to right, " 
							+ randColor1 
							+ ", " 
							+ randColor2
							+ ")";


	cssh3.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var newColor = '#';
  for (var i = 0; i < 6; i++) {
    newColor += letters[Math.floor(Math.random() * 16)];
  }
  return newColor;
}

button.addEventListener("click",setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

