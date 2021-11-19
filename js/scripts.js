
// Back to top button code via W3 Schools (https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Fullscreen code via W3 Schools (https://www.w3schools.com/howto/howto_js_fullscreen.asp)
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE11 */
		elem.msRequestFullscreen();
	}
}

/* Close fullscreen */
function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		/* Safari */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		/* IE11 */
		document.msExitFullscreen();
	}
}

// Scroll Zoom in & out original script via Dotted Squirrel (https://www.dottedsquirrel.com/zoom-scroll-tutorial/)
// Modal Image Scroll Zoom with Buttons
const zoomElement = document.querySelectorAll(".zoom");
let zoom = 1;
const ZOOM_SPEED = 0.005;
document.addEventListener("wheel", function (e) {
	if (e.deltaY > 0) {
		zoomElement.forEach((e) => (e.style.transform = `scale(${(zoom += ZOOM_SPEED)})`))
	} else if (zoom > 0.01) {
		zoomElement.forEach((e) => (e.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`))
	};
});

/* Zoom In */
function zoomIn() {
	zoomElement.forEach((e) => (e.style.transform = `scale(${(zoom += ZOOM_SPEED)})`));
}

/* Zoom Out */
function zoomOut() {
	if (zoom > 0.01) {
		zoomElement.forEach((e) => (e.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`));
	}
}

/* Reset Zoom*/
function resetZoom() {
	zoomElement.forEach((e) => (e.style.transform = `scale(${(zoom = 1)})`));
}
