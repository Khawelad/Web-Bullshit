const Button = document.querySelector('.btn');
const Container = document.querySelector('.container');

window.onload = () => {
	GenerateBoxes(200);
	DistributeBoxes();
}

function GenerateBoxes(n) {
	for (var i = 0; i < n; i++) {
		Container.innerHTML += "<div class='box'></div>"
		var Box = document.querySelectorAll('.box');
		for (var j = 0; j < Container.childElementCount; j++) {
			Box[j].style.width = Math.floor(Math.random() * 200) + 20 + "px"
		}
	}
}

function DistributeBoxes() {
	var Box = document.querySelectorAll('.box');
	for (var i = 0; i < Container.childElementCount; i++) {
		Box[i].style.top = Math.random() * 100 - 1 + "vh";
		Box[i].style.left = Math.random() * 100 - 1 + "vw";
	}
}

Button.addEventListener('click', () => {
	DistributeBoxes();
})

// Button.addEventListener('click', () => {
// 	GenerateBoxes(100);
// 	DistributeBoxes();
// })