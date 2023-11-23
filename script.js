let hgt = document.querySelector('.visota-px');
let first = document.querySelector('.firstf');
let second = document.querySelector('.secondf');
let third = document.querySelector('.thirdf');
let fourth = document.querySelector('.fourthf');
let fifth = document.querySelector('.fifthf');
let which = first

first.onClick = function(){
	which.classList.remove("d-block");
	which.classList.add("d-none");
	first.classList.remove("d-none");
	first.classList.add("d-block");
	which = first
	alert()
};
second.onClick = function(){
	which.classList.remove("d-block");
	which.classList.add("d-none");
	second.classList.remove("d-none");
	second.classList.add("d-block");
	which = second
	alert()
};
third.onClick = function(){
	which.classList.remove("d-block");
	which.classList.add("d-none");
	third.classList.remove("d-none");
	third.classList.add("d-block");
	which = third
};
fourth.onClick = function(){
	which.classList.remove("d-block");
	which.classList.add("d-none");
	fourth.classList.remove("d-none");
	fourth.classList.add("d-block");
	which = fourth
};
fifth.onClick = function(){
	which.classList.remove("d-block");
	which.classList.add("d-none");
	fifth.classList.remove("d-none");
	fifth.classList.add("d-block");
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