function menuopen() {
	var openbtn = document.getElementById('menuopen');
	var closebtn = document.getElementById('menuclose');
	var sidebar = document.getElementById('sidebar');
	var sidebarcontent = document.getElementById('sidebar-content');
	var maincontent = document.getElementById('main-content');
	openbtn.style.display = "none";
	sidebar.style.width= "20%";
	sidebar.style.textAlign = "left";
	sidebar.style.padding = "20px";
	sidebarcontent.style.display = 'block';
	sidebarcontent.style.opacity = '1';
	maincontent.style.width = '80%';
}

function menuclose() {
	var openbtn = document.getElementById('menuopen');
	var closebtn = document.getElementById('menuclose');
	var sidebar = document.getElementById('sidebar');
	var sidebarcontent = document.getElementById('sidebar-content');
	var maincontent = document.getElementById('main-content');
	openbtn.style.display = "block";
	sidebar.style.width= "3.5%";
	sidebar.style.textAlign = "center";
	sidebar.style.padding = "20px 0px";
	sidebarcontent.style.display = 'none';
	sidebarcontent.style.opacity = "0";
	maincontent.style.width = '96.5%';
}