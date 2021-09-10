let placeHolder = document.querySelector('p');
let input = document.querySelector('input');

input.addEventListener("focus", () => {
	placeHolder.className = "meow";
})

// validateInput = () => {
// 	if(input.value == "") {
// 		return true;
// 	} else if (input.value !== "") {
// 		return false;
// 	}
// }

input.addEventListener("blur", () => {
	// console.log("blur event happened");

	// if (validateInput()) {
	// 	// do nothing
	// 	console.log("empty value");
	// 	placeHolder.classList.toggle("meow");
	// } else {
	// 	console.log("something is in value");
	// }

	if (input.value == "") {
		placeHolder.classList.toggle("meow");
	} else {
		// dance
	}
})