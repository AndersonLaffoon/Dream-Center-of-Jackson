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
	var expand = document.getElementById("Expand");
	expand.onclick = closeFullscreen;
	expand.innerHTML = "<i class='fas fa-compress fa-2x lightboxhover'></i>";
	expand.id = "Compress";
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
	var compress = document.getElementById("Compress");
	compress.onclick = openFullscreen;
	compress.innerHTML = "<i class='fas fa-expand fa-2x lightboxhover'></i>";
	compress.id = "Expand";
}