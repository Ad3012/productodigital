let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i< animado.length;  i++ ) {
		let alturaAnimado = animado[i].offsetTop;
		if (alturaAnimado - 300< scrollTop) {
			animado[i].style.opacity = 2;
			animado[i].classList.add("arriba"); 
		}

	  }
	}
window.addEventListener("scroll", mostrarScroll);

