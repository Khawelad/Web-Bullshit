function clr() {
	var body = document.getElementsByTagName('body')[0];
	var clrText = document.getElementById('clr-name');
	var hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
	var random = Math.floor(Math.random() * 16);
	var random1 = Math.floor(Math.random() * 16);
	var random2 = Math.floor(Math.random() * 16);
	var random3 = Math.floor(Math.random() * 16);
	var random4 = Math.floor(Math.random() * 16);
	var random5 = Math.floor(Math.random() * 16);
	var hexColor = "#" + hexArray[random] + hexArray[random1] + hexArray[random2] + hexArray[random3] + hexArray[random4] + hexArray[random5];
	body.style.backgroundColor = hexColor;
	clrText.innerText = hexColor;
	// console.log(random, random1, random2, random3, random4, random5);
	console.log(hexColor);
}