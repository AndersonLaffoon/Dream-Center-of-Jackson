// Prevent Toggle Button from being Pressed until Transition is Finished
$(function () {
  $("button.navbar-toggler").on("click", function () {
    $("nav").toggleClass("toggler-bg");
    $("button.navbar-toggler").addClass("pe-none");
    setTimeout(function () {
      $("button.navbar-toggler").removeClass("pe-none");
    }, 350);
  });
});

// Show Dropdown Menu on Hover
$(function () {
  $(".nav-item.dropdown").hover(function () {
    $(this).children(".dropdown-menu").stop().slideToggle("fast");
  })
})

// Scroll Zoom In & Out original script via Dotted Squirrel (https://www.dottedsquirrel.com/zoom-scroll-tutorial/)
$(function () {
  let zoom = 1;
  const ZOOM_SPEED = 0.1;

  // Zoom In on Mouse Wheel Up & Zoom Out on Mouse Wheel Down
  $(".zoom").on("wheel", function (e) {
    if (e.originalEvent.deltaY !== 0) {
      if (e.originalEvent.deltaY < 0) {
        $(".zoom").css({
          transform: `scale(${(zoom += ZOOM_SPEED)})`,
        });
      } else if (zoom > 0.11) {
        $(".zoom").css({
          transform: `scale(${(zoom -= ZOOM_SPEED)})`,
        });
      }
    }
  });

  // Zoom In Button
  $(".zoomIn").on("click", function () {
    $(".zoom").css({
      transform: `scale(${(zoom += 2*ZOOM_SPEED)})`,
    });
  });

  // Zoom Out Button
  $(".zoomOut").on("click", function () {
    if (zoom > 0.11) {
      $(".zoom").css({
        transform: `scale(${(zoom -= ZOOM_SPEED)})`,
      });
    }
  });

  // Reset Zoom Button
  $(".resetZoom").on("click", function () {
    $(".zoom").css({
      transform: `scale(${(zoom = 1)})`,
    });
  });
});

// Make Element Draggable
$(function () {
  $(".draggable").draggable();
  $(".draggable").data({
    originalLeft: $(".draggable").css("left"),
    origionalTop: $(".draggable").css("top"),
  });

  // Reset Element's Position
  $(".resetPos").on("click", function () {
    $(".draggable").css({
      left: $(".draggable").data("originalLeft"),
      top: $(".draggable").data("origionalTop"),
    });
  });
});

// Show Current Slide Number out of Total Slides
$(function () {
  var totalItems = $(".slideNumber").length;
  var currentIndex = $("div.active").index() + 1;
  $("#num").html("" + currentIndex + "/" + totalItems + "");
  $("#galleryCarousel").on("slid.bs.carousel", function () {
    currentIndex = $("div.active.slideNumber").index() + 1;
    $("#num").html("" + currentIndex + "/" + totalItems + "");
  });
});

// Initialize Toast
$(function() {
  $("#toastBtn").on("click", function () {
    $("#toaster").toast("show");
  });
})

