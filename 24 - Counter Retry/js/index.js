var count = 0;

function aidhg() {
	var counter = document.getElementsByTagName('span')[0];
	count += 1;
	counter.innerHTML = count;
}

function shsg() {
	var counter = document.getElementsByTagName('span')[0];
	count -= 1;
	counter.innerHTML = count;
}