$(document).ready(function() {
    var primaryNav = $('.nav-primary');
    var scrollNav = $('.nav-scroll');
    
    var waypoint = new Waypoint({
        element: primaryNav,
        handler: function(direction) {
          toggleNav();
        }

      })


    function toggleNav() {
        primaryNav.toggle('display');
        scrollNav.toggle('display');

       

};





});
