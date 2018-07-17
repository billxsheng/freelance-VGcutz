$(document).ready(function () {

  var primaryNav = $('.nav-primary');
  var mobileNav = $('.nav-mobile');
  var mobileNavActivateBtn = $('.nav-mobile-btn');
  var mobileNavLinks = $('.nav-link-mobile')
  var scroll = 0;



    var navWaypoint = new Waypoint({
      element: document.getElementsByClassName('container-waypoint'),
      handler: function () {
        toggleNav();
      }, offset: 109
    })


  $(function () {
    mobileNavActivateBtn.on('click', function () {
      mobileNav.toggleClass('load-nav-content')
    });

  });
  $(function () {
    $(window).on('scroll', function () {
      primaryNav.toggleClass('scroll-hidden', ($(window).scrollTop()) > scroll);
      //if second parameter is true, class is added, else removed
      scroll = ($(window).scrollTop());
    })
  });


  $(function () {
    mobileNavLinks.on('click', function () {
      mobileNav.toggleClass('load-nav-content');
    });
  })

  function toggleNav() {
    primaryNav.toggleClass(['navbar-dark', 'navbar-light', 'bg-dark', 'bg-light', 'loaded', 'sticky-top'])

  };













});