//reponsive nav
$(document).ready(function () {
  $("#inner-menu-link").click(function () {
    $(".inner-menu").toggleClass("visible");
    $("#inner-menu-link").toggleClass("close");
  });
  $(".inner-menu").click(function (event) {
    event.stopPropagation();
  });
  $("body").click(function () {
    $(".inner-menu").removeClass("visible");
    $("#inner-menu-link").removeClass("close");
  });
});

//reponsive nav
$(document).ready(function () {
  $(".toggler").click(function () {
    $(".navigation-bar").toggleClass("visible");
    $(".toggler").toggleClass("close");
  });
});
