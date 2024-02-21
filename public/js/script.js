document.addEventListener("DOMContentLoaded", function () {
	"use strict";

	var init = "Aún no agregas artículos";
	var contador = 0;

	// Initial Cart
	var counterElement = document.querySelector(".contador");
	counterElement.innerHTML = init;

	// Add Items To Basket
	function addToBasket() {
		contador++;
		counterElement.innerHTML = contador;
		animateCounter();
	}

	// Animation for Counter
	function animateCounter() {
		counterElement.style.opacity = "0";
		setTimeout(function () {
			counterElement.style.opacity = "1";
		}, 300);
	}

	// Add To Basket Animation
	var buttons = document.querySelectorAll("button");
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			addToBasket();
			var productOverlay = this.parentElement.parentElement.querySelector(".producto_overlay");
			productOverlay.style.transform = " translateY(0px)";
			productOverlay.style.opacity = "1";
			productOverlay.style.transition = "all ease-in-out .45s";

			setTimeout(function () {
				productOverlay.style.transform = "translateY(-500px)";
				productOverlay.style.opacity = "0";
				productOverlay.style.transition = "all ease-in-out .45s";
			}, 1100);
		});
	});
});
