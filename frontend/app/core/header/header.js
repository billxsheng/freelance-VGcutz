$(document).ready(function () {


  var primaryNav = $('.nav-primary');

  var waypoint = $('.container-waypoint');

  new Waypoint({
    element: waypoint,
    handler: function (direction) {
      toggleNav();
    }, offset: 109

  })


  function toggleNav() {
    primaryNav.toggleClass(['navbar-dark', 'navbar-light', 'bg-dark', 'bg-light', 'loaded', 'sticky-top'])

  };

var scroll = 0;
$(window).on('scroll', function() {
  primaryNav.toggleClass('scroll-hidden', $(window).scrollTop() > scroll);
  //if second parameter is true, class is added, else removed
  scroll = $(window).scrollTop();
})



});