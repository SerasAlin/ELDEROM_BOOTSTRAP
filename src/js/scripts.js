(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    $(document).ready(function(){

    // Get current page URL
    var url = window.location.href
    // remove # from URL
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    // remove parameters from URL
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    // select file name
    url = url.substr(url.lastIndexOf("/") + 1)
    url = '/' + url;
    // If file name not avilable
    if(url == ''){
    url = '/';
    }
    // Loop all menu items
    $('.navbar-nav.ml-auto li').each(function(){
     // select href
     var href = $(this).find('a').attr('href');
     console.log(href)
     console.log(url)
     // Check filename
     if(url == href){
      // Add active class
      $(this).find('a').addClass('active');
     }
    });

});
  
})(jQuery); // End of use strict
