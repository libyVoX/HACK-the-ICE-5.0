let hgt = document.querySelector('.visota-px');
let first = document.querySelector('.firstf');
let second = document.querySelector('.secondf');
let third = document.querySelector('.thirdf');
let fourth = document.querySelector('.fourthf');
let fifth = document.querySelector('.fifthf');
let which = first

first.onClick = function(){
	which.classList.add("d-none");
	first.classList.remove("d-block");
	which = first
};
second.onClick = function(){
	which.classList.add("d-none");
	first.classList.remove("d-block");
	which = second
};
third.onClick = function(){
	which.classList.add("d-none");
	first.classList.remove("d-block");
	which = third
};
fourth.onClick = function(){
	which.classList.add("d-none");
	first.classList.remove("d-block");
	which = fourth
};
fifth.onClick = function(){
	which.classList.add("d-none");
	first.classList.remove("d-block");
	which = fifth
};

function hgtch(){
	hgt.style.height = document.documentElement.clientHeight + 'px'
	hgt.style.width = document.documentElement.clientWidth + 'px'
	if(document.documentElement.clientWidth < 768){
		document.querySelector('.per-main').style.display = "none"
		document.querySelector('.flrs-btn').style.left = '85%'
	}else{
		document.querySelector('.per-main').style.display = "block"
		document.querySelector('.flrs-btn').style.left = '95%'
	}
}
setInterval(hgtch, 1)