(function ($) {
  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#home",
    offset: 75,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#home").offset().top > 100) {
      $("#home").addClass("navbar-scrolled");
    } else {
      $("#home").removeClass("navbar-scrolled");
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery);
