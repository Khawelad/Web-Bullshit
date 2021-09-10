function open_nav() {
	var navpanel = document.querySelector('#nav-panel');
	var openbtn = document.querySelectorAll('.nav-btn');
	var closebtn = document.querySelectorAll('.nav-btn-close');
	navpanel.style.marginTop = 0;
	openbtn[0].style.display = 'none';
	closebtn[0].style.opacity = 1;
	closebtn[0].style.cursor = 'pointer';
}

function close_nav() {
	var navpanel = document.querySelector('#nav-panel');
	var openbtn = document.querySelectorAll('.nav-btn');
	var closebtn = document.querySelectorAll('.nav-btn-close');
	navpanel.style.marginTop = '-17.4rem';
	openbtn[0].style.display = 'inline-block';
	closebtn[0].style.opacity = 0;
	closebtn[0].style.cursor = 'default';
}

function open_login() {
	close_nav();
	var navItem = document.querySelectorAll('.nav-wrapper')[0];
	navItem.style.bottom = '0';
	navItem.style.opacity = '1';
	navItem.style.zIndex = '12';
	document.getElementsByTagName('html')[0].style.overflowY = "hidden";
	window.addEventListener('scroll', noScroll);
}

function open_terms() {
	close_nav();
	var navItem = document.querySelectorAll('.nav-wrapper')[1];
	navItem.style.bottom = '0';
	navItem.style.opacity = '1';
	navItem.style.zIndex = '12';
	document.getElementsByTagName('html')[0].style.overflowY = "hidden";
	window.addEventListener('scroll', noScroll);
}

function open_policy() {
	close_nav();
	var navItem = document.querySelectorAll('.nav-wrapper')[2];
	navItem.style.bottom = '0';
	navItem.style.opacity = '1';
	navItem.style.zIndex = '12';
	document.getElementsByTagName('html')[0].style.overflowY = "hidden";
	window.addEventListener('scroll', noScroll);
}

function close_navPanel() {
	var navItems = document.querySelectorAll('.nav-wrapper');
	for (let i = 0; i < navItems.length; i++) {
		navItems[i].style.bottom = '-150%';
 		navItems[i].style.opacity = '0';
 		navItems[i].style.zIndex = '-1';
	}
	document.getElementsByTagName('html')[0].style.overflowY = "scroll";
	window.removeEventListener('scroll', noScroll);
}

// THIS IS NOT MY CODE

function noScroll() {
  window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);

// Remove listener to re-enable scroll
window.removeEventListener('scroll', noScroll);