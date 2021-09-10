function gen() {
	var heading = document.getElementsByTagName('input')[0].value;
	var description = document.getElementsByTagName('input')[1].value;
	var container = document.getElementsByClassName('container')[0];
	var text =	"<div class='box'>" +
					"<img src='img/" + Math.floor(Math.random() * 11) + ".jpg'>" +
					"<h2>" + heading + "</h2>" +
					"<p>" + description + "</p>" +
				"</div>" ;
	// if (heading == "" || description == "") {
	// 	document.getElementsByTagName('h1')[0].style.display = 'block';
	// } else {
	// 	container.innerHTML += text;
	// 	document.getElementsByTagName('input')[0].value = '';
	// 	document.getElementsByTagName('input')[1].value = '';
	// 	// Why does this not work?
	// 	// heading = '';
	// 	// description = '';
	// 	document.getElementsByTagName('h1')[0].style.display = 'none';
	// }
	container.innerHTML += text;
}