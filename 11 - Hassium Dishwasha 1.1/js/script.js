function sidebar_open() {
	var content = document.getElementsByClassName('content');
	var sidebar = document.getElementsByClassName('sidebar');
	var openbtn = document.getElementsByClassName('btn')[0];
	var closebtn = document.getElementsByClassName('btn')[1];
	content[0].style.width = '80%';
	sidebar[0].style.left = '0px';
	openbtn.style.display = 'none';
	closebtn.style.display = 'inline';
}

function sidebar_close() {
	var content = document.getElementsByClassName('content');
	var sidebar = document.getElementsByClassName('sidebar');
	var openbtn = document.getElementsByClassName('btn')[0];
	var closebtn = document.getElementsByClassName('btn')[1];
	content[0].style.width = '96.5%';
	sidebar[0].style.left = '-16.5%';
	openbtn.style.display = 'inline';
	closebtn.style.display = 'none';
}