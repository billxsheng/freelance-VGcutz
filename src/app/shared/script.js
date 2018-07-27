$(document).ready(function () {

  var primaryNav = $('.nav-primary');
  var mobileNav = $('.nav-mobile');
  var mobileNavActivateBtn = $('.nav-mobile-btn');
  var mobileNavLinks = $('.nav-link-mobile')
  var scroll = 0;
  var modalOpen = $('.modal-open');
  var modal = $('#sigModal');


  var waypoint = new Waypoint({
    element: $('.container-waypoint'),
    handler: function () {
      toggleNav();
    },
    offset: -1
  });

  // $(function () {
  //   modalOpen.on('click', function () {
  //     console.log('clicked');
  //     modal.modal('show');
  //   });
  // });

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
    primaryNav.toggleClass(['loaded', 'sticky-top'])

  };













});
