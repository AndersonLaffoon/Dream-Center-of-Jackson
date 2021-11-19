$(function () {
  $("button.navbar-toggler").on("click", function () {
    $("nav").toggleClass("toggler-bg");
    $("button.navbar-toggler").addClass("pe-none");
    setTimeout(function() {
      $("button.navbar-toggler").removeClass("pe-none");
    }, 350);
  });
});