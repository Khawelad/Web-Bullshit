// JavaScript Document

function meow() {
	var searchValue = document.getElementById('search').value;
	if(searchValue == "coffee") {
		document.getElementById('coffee1').style.display = "inline-block";
		document.getElementById('coffee2').style.display = "inline-block";
		document.getElementById('coffee3').style.display = "inline-block";
		document.getElementById('coffee4').style.display = "inline-block";
		document.getElementById('computer1').style.display = "none";
		document.getElementById('computer2').style.display = "none";
		document.getElementById('computer3').style.display = "none";
		document.getElementById('computer4').style.display = "none";
		document.getElementById('pets1').style.display = "none";
		document.getElementById('pets2').style.display = "none";
		document.getElementById('pets3').style.display = "none";
		document.getElementById('pets4').style.display = "none";
		document.getElementById('invalidsearch').style.display = "none";	
		} else if (searchValue == "computer") {
			document.getElementById('coffee1').style.display = "none";
			document.getElementById('coffee2').style.display = "none";
			document.getElementById('coffee3').style.display = "none";
			document.getElementById('coffee4').style.display = "none";
			document.getElementById('computer1').style.display = "inline-block";
			document.getElementById('computer2').style.display = "inline-block";
			document.getElementById('computer3').style.display = "inline-block";
			document.getElementById('computer4').style.display = "inline-block";
			document.getElementById('pets1').style.display = "none";
			document.getElementById('pets2').style.display = "none";
			document.getElementById('pets3').style.display = "none";
			document.getElementById('pets4').style.display = "none";
			document.getElementById('invalidsearch').style.display = "none";	
		} else if (searchValue == "pets") {
			document.getElementById('coffee1').style.display = "none";
			document.getElementById('coffee2').style.display = "none";
			document.getElementById('coffee3').style.display = "none";
			document.getElementById('coffee4').style.display = "none";
			document.getElementById('computer1').style.display = "none";
			document.getElementById('computer2').style.display = "none";
			document.getElementById('computer3').style.display = "none";
			document.getElementById('computer4').style.display = "none";
			document.getElementById('pets1').style.display = "inline-block";
			document.getElementById('pets2').style.display = "inline-block";
			document.getElementById('pets3').style.display = "inline-block";
			document.getElementById('pets4').style.display = "inline-block";
			document.getElementById('invalidsearch').style.display = "none";	
		} else {
			document.getElementById('coffee1').style.display = "none";
			document.getElementById('coffee2').style.display = "none";
			document.getElementById('coffee3').style.display = "none";
			document.getElementById('coffee4').style.display = "none";
			document.getElementById('computer1').style.display = "none";
			document.getElementById('computer2').style.display = "none";
			document.getElementById('computer3').style.display = "none";
			document.getElementById('computer4').style.display = "none";
			document.getElementById('pets1').style.display = "none";
			document.getElementById('pets2').style.display = "none";
			document.getElementById('pets3').style.display = "none";
			document.getElementById('pets4').style.display = "none";
			document.getElementById('invalidsearch').style.display = "block";	
		}
	}