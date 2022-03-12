let blur = document.querySelectorAll(".blur");

function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i< blur.length;  i++ ) {
		let alturaBlur = blur[i].offsetTop;
		if (alturaBlur  -300 < scrollTop) {
	
			blur[i].classList.add("blurcero"); 
		}

	  }
	}
window.addEventListener("scroll", mostrarScroll);
