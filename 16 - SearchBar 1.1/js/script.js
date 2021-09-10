function meow() {
	var searchValue = document.getElementById('search').value;
	var coffee = document.querySelectorAll('.coffee');
	var pc = document.querySelectorAll('.pc');
	var pets = document.querySelectorAll('.pets');
	var invalid = document.querySelectorAll('h1');
	var i;
	if (searchValue == "coffee") {
		for (i = 0; i < coffee.length; i++) {
			coffee[i].style.display = 'flex';
		}
		for (i = 0; i < pc.length; i++) {
			pc[i].style.display = 'none';
		}
		for (i = 0; i < pets.length; i++) {
			pets[i].style.display = 'none';
		}
		invalid[0].style.display = 'none';
	} else if (searchValue == "computer") {
		for (i = 0; i < coffee.length; i++) {
			coffee[i].style.display = 'none';
		}
		for (i = 0; i < pc.length; i++) {
			pc[i].style.display = 'flex';
		}
		for (i = 0; i < pets.length; i++) {
			pets[i].style.display = 'none';
		}
		invalid[0].style.display = 'none';
	} else if (searchValue == "pets") {
		for (i = 0; i < coffee.length; i++) {
			coffee[i].style.display = 'none';
		}
		for (i = 0; i < pc.length; i++) {
			pc[i].style.display = 'none';
		}
		for (i = 0; i < pets.length; i++) {
			pets[i].style.display = 'flex';
		}
		invalid[0].style.display = 'none';
	} else {
		for (i = 0; i < coffee.length; i++) {
			coffee[i].style.display = 'none';
		}
		for (i = 0; i < pc.length; i++) {
			pc[i].style.display = 'none';
		}
		for (i = 0; i < pets.length; i++) {
			pets[i].style.display = 'none';
		}
		invalid[0].style.display = 'block';
	}
}