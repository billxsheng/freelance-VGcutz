$(document).ready(function () {
  $(this).scrollTop(0);
  var primaryNav = $('.nav-primary');

  new Waypoint({
    element: primaryNav,
    handler: function (direction) {
      toggleNav();
    }

  }, {
    offset: '8px'
  })


  function toggleNav() {
    primaryNav.toggleClass(['navbar-dark', 'navbar-light', 'bg-dark', 'bg-light', 'loaded'])

  };





});