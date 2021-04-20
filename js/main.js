const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /** click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  // owl-crousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });

  // click to scroll top
  $(".move-up span").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // AOS Instance
  AOS.init();

  // click como llegar

  $(".mina-de-oro-llegar").on("click", function () {
    window.open(
      "https://ul.waze.com/ul?ll=10.24393651%2C-84.99763727&navigate=yes&zoom=17&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location"
    );
  });
});
