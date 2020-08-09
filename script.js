var css = document.querySelector("h3")
var firstColor = document.getElementById("firstColor")
var secondColor = document.getElementById("secondColor")
var body = document.getElementById("gradient")
var vertical = document.getElementById("vertical")

function settingGradient() {
	body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
	css.innerHTML = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
}
function verticalGradient() {
	body.style.background = "linear-gradient( " + firstColor.value + ", " + secondColor.value + ")";
	css.innerHTML = "linear-gradient( " + firstColor.value + ", " + secondColor.value + ")";
}


firstColor.addEventListener("input", settingGradient)
secondColor.addEventListener("input", settingGradient)
vertical.addEventListener("click", verticalGradient)