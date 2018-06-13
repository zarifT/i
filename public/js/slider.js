	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;

	function nextSlide() {
		goToSlide(currentSlide+1);
	}

	function previousSlide() {
		goToSlide(currentSlide-1);
	}

	function goToSlide(n) {
		slides[currentSlide].className = 'slide';
		currentSlide = (n+slides.length)%slides.length;
		var tab_image = document.getElementById('tab-image');
		tab_image.style.backgroundImage = 'url("img/solutions-vehicle-solutions-'+currentSlide+'.png")';
		slides[currentSlide].className = 'slide showing';
	}
	var next = document.getElementById('next');
		var previous = document.getElementById('previous');

	next.onclick = function() {
		 nextSlide();
	};
	previous.onclick = function() {
		previousSlide();
	};
