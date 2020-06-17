/*!
    * Start Bootstrap - Agency v6.0.1 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */
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

    //Selection dropdown changes textfield value
    $(function(){
        $(".dropdown-menu-employee").on('click', 'li', function(){
            $(".dropdown-toggle-employee:first-child").text($(this).text());
            $(".dropdown-toggle-employee:first-child").val($(this).val());
        });
    });
    
    $(function(){
        $(".dropdown-menu-service").on('click', 'li', function(){
            $(".dropdown-toggle-service:first-child").text($(this).text());
            $(".dropdown-toggle-service:first-child").val($(this).val());
        });
    });

    var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]

    const picker = document.getElementById('date');
    const emp = document.getElementById('specialist');

    picker.addEventListener('input', function(e){
        var day = new Date(this.value).getUTCDay();
        if([6,0].includes(day)){
            e.preventDefault();
            alert('Weekends are not available. Please choose a weekday.');
        }
    });

     picker.addEventListener('input', function(e){

        var employee = emp.value;
        
        if(!employee){
            alert('Select an employee before preceeding to choose a date.');
        }
        else {
            var day = new Date(this.value).getUTCDay();

            if(emp.value=="1" && [4,5].includes(day)){
                alert('Kay is not available on this day.');
            }
            else if(emp.value=="2" && [1,5].includes(day)){
                alert('Larry is not available on this day.');
            }
            else if(emp.value=="3" && [1,2].includes(day)){
                alert('Diana is not available on this day.');
            }
            else if(emp.value=="4" && [1,3,5].includes(day)){
                alert('Daniel is not available on this day.');
            }
            else if(emp.value=="5" && [2,3,4].includes(day)){
                alert('Mark is not available on this day.');
            }
            else if(emp.value=="6" && [1,2,4,5].includes(day)){
                alert('Larissa is not available on this day.');
            }

        }
    });

})(jQuery); // End of use strict
