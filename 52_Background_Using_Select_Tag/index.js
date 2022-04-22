const Select = document.querySelector('select');
const Heading = document.querySelector('h1');

Select.addEventListener('change', () => {
	if (Select.value == "red") {
		document.body.style.backgroundColor = "#AA0114";
		Heading.innerText = "Red";
	}
	else if (Select.value == "yellow") {
		document.body.style.backgroundColor = "#FFDA29";
		Heading.innerText = "Yellow";
	}
	else if (Select.value == "black") {
		document.body.style.backgroundColor = "#1A1A1A";
		Heading.innerText = "Black";
	}
	else {
		document.body.style.backgroundColor = "#AE02DD";
		Heading.innerText = "Purple";
	}
})