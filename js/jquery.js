$(function () {
  // Prevent Navbar Toggler Button from being Pressed until Transition is Finished
  $("button.navbar-toggler").on("click", function () {
    $("nav").toggleClass("toggler-bg");
    $("button.navbar-toggler").addClass("pe-none");
    setTimeout(function () {
      $("button.navbar-toggler").removeClass("pe-none");
    }, 350);
  });

  // Slide Up/Down Dropdown Menu on Hover
  $(".nav-item.dropdown").on("mouseenter", function () {
    $(this).children(".dropdown-menu").stop().slideDown("fast");
  }).on("mouseleave", function () {
    $(this).children(".dropdown-menu").stop().slideUp("fast");
  });

  // Show Current Slide Number out of Total Slides
  var totalItems = $(".slideNumber").length;
  var currentIndex = $("div.active").index() + 1;
  $("#num").html("" + currentIndex + "/" + totalItems + "");
  $("#galleryCarousel").on("slid.bs.carousel", function () {
    currentIndex = $("div.active.slideNumber").index() + 1;
    $("#num").html("" + currentIndex + "/" + totalItems + "");
  });

  // Initialize Toast
  $("#toastBtn").on("click", function () {
    $("#toaster").toast("show");
  });

  // FitText
  $(".amore-header").fitText(2);
  $(".review-header").fitText(1.2);
  $(".index-header").fitText(1.4);
  $(".index-subheader").fitText(3.5);

  var scale = 1,
    panning = false,
    xoff = 0,
    yoff = 0,
    start = {
      x: 0,
      y: 0,
    };

  $.fn.setTransform = function () {
    $(".zoom").css({
      transform: "translate(" + xoff + "px, " + yoff + "px) scale(" + scale + ")"
    });
  }
  // Allows Panning with Mouse
  $(".modal").on("mousedown", function (e) {
    e.preventDefault();
    start = {
      x: e.clientX - xoff,
      y: e.clientY - yoff,
    };
    panning = true;
  })

  $(".modal").on("mouseup", function (e) {
    panning = false;
  })

  $(".modal").on("mousemove", function (e) {
    e.preventDefault();
    if (!panning) {
      return;
    }
    xoff = e.clientX - start.x;
    yoff = e.clientY - start.y;
    $.fn.setTransform();
  })

  // Allows Panning with Touch
  $(".zoom").on("touchstart", function (e) {
    e.preventDefault();
    start = {
      x: e.touches[0].clientX - xoff,
      y: e.touches[0].clientY - yoff,
    };
    panning = true;
  })

  $(".zoom").on("touchend", function (e) {
    panning = false;
  })

  $(".zoom").on("touchmove", function (e) {
    e.preventDefault();
    if (!panning) {
      return;
    }
    xoff = e.touches[0].clientX - start.x;
    yoff = e.touches[0].clientY - start.y;
    $.fn.setTransform();
  })

  // Zoom In & Out on Cursor
  $(".zoom").on("wheel", function (e) {
    e.preventDefault();
    // take the scale into account with the offset
    var xs = (e.clientX - xoff) / scale,
      ys = (e.clientY - yoff) / scale;
    if (e.originalEvent.deltaY !== 0) {
      if (e.originalEvent.deltaY < 0) {
        // wheel up / zoom in
        scale *= 1.2;
      } else {
        // wheel down / zoom out
        scale /= 1.2;
      }
      // reverse the offset amount with the new scale
      xoff = e.clientX - xs * scale;
      yoff = e.clientY - ys * scale;
      $.fn.setTransform();
    }
  })

  // Reset Zoom Button
  $(".resetZoom").on("click", function () {
    $(".zoom").css({
      transform: "translate(" + (xoff = 0) + "px, " + (yoff = 0) + "px) scale(" + (scale = 1) + ")"
    });
  });

  // Zoom In Button for Center
  $(".zoomIn").on("click", function (e) {
    e.preventDefault();
    // Get Center of element
    var $zoom = $(".carousel-item.active .zoom"),
      centerX = $zoom.width() / 2,
      headerHeight = $(".modal-header").height(),
      bodyHeight = $zoom.height() / 2,
      centerY = headerHeight + bodyHeight,
      // take the scale into account with the offset
      xs = (centerX - xoff) / scale,
      ys = (centerY - yoff) / scale;
    console.log(centerX, centerY);
    console.log();
    scale *= 1.2;
    // reverse the offset amount with the new scale
    xoff = centerX - xs * scale;
    yoff = centerY - ys * scale;

    $.fn.setTransform();
  });

  // Zoom Out Button for Center
  $(".zoomOut").on("click", function (e) {
    e.preventDefault();
    // Get Center of element
    var $zoom = $(".carousel-item.active .zoom"),
      centerX = $zoom.width() / 2,
      headerHeight = $(".modal-header").height(),
      bodyHeight = $zoom.height() / 2,
      centerY = headerHeight + bodyHeight,
      // take the scale into account with the offset
      xs = (centerX - xoff) / scale,
      ys = (centerY - yoff) / scale;
    scale /= 1.2;
    // reverse the offset amount with the new scale
    xoff = centerX - xs * scale;
    yoff = centerY - ys * scale;

    $.fn.setTransform();
  });
});