let parallax = document.querySelector('.parallax');
let persona = document.querySelector('.persona');
let banner1 = document.querySelector('.banner1');
let banner_parallax = document.querySelector('.banner_parallax');



function ScrollParallax() {
	let scrollTop =document.documentElement.scrollTop;
	parallax.style.transform = 'translateY('+ scrollTop * -0.5 + 'px)';
	persona.style.transform = 'translateY('+ scrollTop * 0.1 + 'px)';
	banner1.style.transform = 'translateY('+ scrollTop * -0.5 + 'px)';
	banner_parallax.style.transform = 'translateY('+ scrollTop * 0.2 + 'px)';
	
	
}




window.addEventListener('scroll',ScrollParallax);