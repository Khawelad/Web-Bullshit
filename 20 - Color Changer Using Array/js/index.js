function clr() {
	let body = document.getElementsByTagName('body')[0];
	let clrname = document.getElementById('clr-name');
	let btn = document.getElementById('btn');
	let clrs = ["lightblue", "purple", "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Brown", "BlueViolet", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson"]
	let rndclrname = Math.floor(Math.random() * 20);
	body.style.backgroundColor = clrs[rndclrname];
	clrname.innerHTML = clrs[rndclrname];
}