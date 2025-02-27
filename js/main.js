(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Login and Dashboard Toggle Logic
    document.addEventListener("DOMContentLoaded", () => {
        const loginContainer = document.getElementById("login-container");
        const dashboardContainer = document.getElementById("dashboard-container");
        const loginForm = document.getElementById("login-form");
        const logoutButton = document.getElementById("logout-button");
        const uploadButton = document.getElementById("upload-button");
        const fileUpload = document.getElementById("file-upload");
        const documentList = document.getElementById("document-list");
      
        // Default username and password
        const defaultUsername = "admin";
        const defaultPassword = "password";
      
        // Handle Login
        loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const enteredUsername = document.getElementById("username").value;
          const enteredPassword = document.getElementById("password").value;
      
          if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
            loginContainer.classList.add("hidden");
            dashboardContainer.classList.remove("hidden");
          } else {
            alert("Invalid username or password. Try again!");
          }
        });
      
        // Handle Logout
        logoutButton.addEventListener("click", () => {
          dashboardContainer.classList.add("hidden");
          loginContainer.classList.remove("hidden");
        });
      
        // Handle File Upload
        uploadButton.addEventListener("click", () => {
          fileUpload.click();
        });
      
        fileUpload.addEventListener("change", (e) => {
          const file = e.target.files[0];
          if (file) {
            const listItem = document.createElement("li");
            listItem.textContent = file.name;
            documentList.appendChild(listItem);
          }
        });
      });
      
  
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev", "next");
            if (i === index) {
                slide.classList.add("active");
            } else if (i < index) {
                slide.classList.add("prev");
            } else {
                slide.classList.add("next");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        showSlide(currentSlide);
    }

    // Initial setup
    showSlide(currentSlide);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});
