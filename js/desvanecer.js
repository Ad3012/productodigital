let desvanecer = document.querySelectorAll(".desvanecer");

function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i< desvanecer.length;  i++ ) {
		let alturaDesvanecer = desvanecer[i].offsetTop;
		if (alturaDesvanecer  -300 < scrollTop) {
			desvanecer[i].style.opacity = 0;
			desvanecer[i].classList.add("arriba"); 
		}

	  }
	}
window.addEventListener("scroll", mostrarScroll);
