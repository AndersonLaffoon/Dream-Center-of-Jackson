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

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
	progressScrollBar()
};

function progressScrollBar() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("progressbar").style.width = scrolled + "%";
}

document.addEventListener("gesturestart", function (e) {
	e.preventDefault();
	// special hack to prevent zoom-to-tabs gesture in safari
	document.body.style.zoom = 0.99;
});

document.addEventListener("gesturechange", function (e) {
	e.preventDefault();
	// special hack to prevent zoom-to-tabs gesture in safari
	document.body.style.zoom = 0.99;
});

document.addEventListener("gestureend", function (e) {
	e.preventDefault();
	// special hack to prevent zoom-to-tabs gesture in safari
	document.body.style.zoom = 0.99;
});


// Zoom in on cursor
// var scale = 1,
// 	panning = false,
// 	xoff = 0,
// 	yoff = 0,
// 	start = {
// 		x: 0,
// 		y: 0
// 	},
// 	doc = document.querySelectorAll(".zoom");
	
// function setTransform() {
// 	doc.style.transform =
// 		"translate(" + xoff + "px, " + yoff + "px) scale(" + scale + ")";
// }

// doc.onmousedown = function (e) {
// 	e.preventDefault();
// 	start = {
// 		x: e.clientX - xoff,
// 		y: e.clientY - yoff
// 	};
// 	panning = true;
// };

// doc.onmouseup = function (e) {
// 	panning = false;
// };

// doc.onmousemove = function (e) {
// 	e.preventDefault();
// 	if (!panning) {
// 		return;
// 	}
// 	xoff = e.clientX - start.x;
// 	yoff = e.clientY - start.y;
// 	setTransform();
// };

// doc.onwheel = function (e) {
// 	e.preventDefault();
// 	// take the scale into account with the offset
// 	var xs = (e.clientX - xoff) / scale,
// 		ys = (e.clientY - yoff) / scale,
// 		delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;

// 	// get scroll direction & set zoom level
// 	delta > 0 ? (scale *= 1.2) : (scale /= 1.2);

// 	// reverse the offset amount with the new scale
// 	xoff = e.clientX - xs * scale;
// 	yoff = e.clientY - ys * scale;

// 	setTransform();
// };