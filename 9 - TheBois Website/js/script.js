// var win1 = document.getElementById("windows-1");
// var win2 = document.getElementById("windows-2");
// var win3 = document.getElementById("windows-3");
// var win4 = document.getElementById("windows-4");
// var win5 = document.getElementById("windows-5");

function home() {
	var win1 = document.getElementById("windows-1");
	var win2 = document.getElementById("windows-2");
	var win3 = document.getElementById("windows-3");
	var win4 = document.getElementById("windows-4");
	var win5 = document.getElementById("windows-5");
	document.getElementById('home-link').style.backgroundColor = '#FFC119';
	document.getElementById('shop-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('guide-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('staff-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('rules-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	win1.style.right = '0px';
	win2.style.right = '-100%';
	win3.style.right = '-100%';
	win4.style.right = '-100%';
	win5.style.right = '-100%';
}

function shop() {
	var win1 = document.getElementById("windows-1");
	var win2 = document.getElementById("windows-2");
	var win3 = document.getElementById("windows-3");
	var win4 = document.getElementById("windows-4");
	var win5 = document.getElementById("windows-5");
	document.getElementById('home-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('shop-link').style.backgroundColor = '#FFC119';
	document.getElementById('guide-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('staff-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('rules-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	win2.style.right = '0px';
	win1.style.right = '-100%';
	win3.style.right = '-100%';
	win4.style.right = '-100%';
	win5.style.right = '-100%';
}

function guide() {
	var win1 = document.getElementById("windows-1");
	var win2 = document.getElementById("windows-2");
	var win3 = document.getElementById("windows-3");
	var win4 = document.getElementById("windows-4");
	var win5 = document.getElementById("windows-5");
	document.getElementById('home-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('shop-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('guide-link').style.backgroundColor = '#FFC119';
	document.getElementById('staff-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('rules-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	win3.style.right = '0px';
	win2.style.right = '-100%';
	win1.style.right = '-100%';
	win4.style.right = '-100%';
	win5.style.right = '-100%';
}

function staff() {
	var win1 = document.getElementById("windows-1");
	var win2 = document.getElementById("windows-2");
	var win3 = document.getElementById("windows-3");
	var win4 = document.getElementById("windows-4");
	var win5 = document.getElementById("windows-5");
	document.getElementById('home-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('shop-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('guide-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('staff-link').style.backgroundColor = '#FFC119';
	document.getElementById('rules-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	win4.style.right = '0px';
	win2.style.right = '-100%';
	win3.style.right = '-100%';
	win1.style.right = '-100%';
	win5.style.right = '-100%';
}

function rules() {
	var win1 = document.getElementById("windows-1");
	var win2 = document.getElementById("windows-2");
	var win3 = document.getElementById("windows-3");
	var win4 = document.getElementById("windows-4");
	var win5 = document.getElementById("windows-5");
	document.getElementById('home-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('shop-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('guide-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('staff-link').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('rules-link').style.backgroundColor = '#FFC119';
	win5.style.right = '0px';
	win2.style.right = '-100%';
	win3.style.right = '-100%';
	win4.style.right = '-100%';
	win1.style.right = '-100%';
}

function ranks() {
	document.getElementById('ranks').style.top = '0px';
	document.getElementById('prefix').style.top = '-250%';
	document.getElementById('crate').style.top = '-250%';
	document.getElementById('ranks-button').className = 'active-cat';
	document.getElementById('tags-button').className = ' ';
	document.getElementById('crate-button').className = ' ';
}

function tags() {
	document.getElementById('ranks').style.top = '-250%';
	document.getElementById('prefix').style.top = '0px';
	document.getElementById('crate').style.top = '-250%';
	document.getElementById('ranks-button').className = ' ';
	document.getElementById('tags-button').className = 'active-cat';
	document.getElementById('crate-button').className = ' ';
}

function crate() {
	document.getElementById('ranks').style.top = '-250%';
	document.getElementById('prefix').style.top = '-250%';
	document.getElementById('crate').style.top = '0px';
	document.getElementById('ranks-button').className = ' ';
	document.getElementById('tags-button').className = ' ';
	document.getElementById('crate-button').className = 'active-cat';
}

function admin() {
	document.getElementById('admin-staff').style.opacity = '1';
	document.getElementById('mod-staff').style.opacity = '0';
	document.getElementById('helper-staff').style.opacity = '0';
	document.getElementById('admin-btn').style.backgroundColor = "#e6ad12";
	document.getElementById('admin-btn').style.fontWeight = 'bolder';
	document.getElementById('mod-btn').style.backgroundColor = "#FFC119";
	document.getElementById('mod-btn').style.fontWeight = 'normal';
	document.getElementById('helper-btn').style.backgroundColor = "#FFC119";
	document.getElementById('helper-btn').style.fontWeight = 'normal';
}

function mod() {
	document.getElementById('admin-staff').style.opacity = '0';
	document.getElementById('mod-staff').style.opacity = '1';
	document.getElementById('helper-staff').style.opacity = '0';
	document.getElementById('admin-btn').style.backgroundColor = "#FFC119";
	document.getElementById('admin-btn').style.fontWeight = 'normal';
	document.getElementById('mod-btn').style.backgroundColor = "#e6ad12";
	document.getElementById('mod-btn').style.fontWeight = 'bolder';
	document.getElementById('helper-btn').style.backgroundColor = "#FFC119";
	document.getElementById('helper-btn').style.fontWeight = 'normal';
}

function helper() {
	document.getElementById('admin-staff').style.opacity = '0';
	document.getElementById('mod-staff').style.opacity = '0';
	document.getElementById('helper-staff').style.opacity = '1';
	document.getElementById('admin-btn').style.backgroundColor = "#FFC119";
	document.getElementById('admin-btn').style.fontWeight = 'normal';
	document.getElementById('mod-btn').style.backgroundColor = "#FFC119";
	document.getElementById('mod-btn').style.fontWeight = 'normal';
	document.getElementById('helper-btn').style.backgroundColor = "#e6ad12";
	document.getElementById('helper-btn').style.fontWeight = 'bolder';
}