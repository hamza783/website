var numOne = document.getElementById("num1");
var numTwo = document.getElementById("num2");
var ans = document.getElementById("ans");
var image = document.getElementsByClassName("feature_image")[0];
var topFeature = document.getElementsByClassName("topFeature")[0];
var func = document.getElementById("funct");
var button = document.getElementById("randCalc");

numOne.addEventListener("input", calc);
numTwo.addEventListener("input", calc);
func.addEventListener("change", calc);
topFeature.addEventListener("mouseenter", showPic);
topFeature.addEventListener("mouseleave", hidePic);
button.addEventListener("click", branch);

function calc() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	if (func.value == "add") {
		ans.innerHTML = one + two;
	}
	else if (func.value == "subtract") {
		ans.innerHTML = one - two;
	}
	else if (func.value == "multiply") {
		ans.innerHTML = one * two;
	}
	else if (func.value == "divide") {
		ans.innerHTML = one / two;
	}
}

function showPic() {
	image.className = "";
}
function hidePic() {
	image.className = "feature_image";
}
function branch() {
	window.location.href = '#num1';
}