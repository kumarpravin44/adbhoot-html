const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
menu.classList.toggle("active");

});

<<<<<<< HEAD
// Dropdown functionality for mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        // Only prevent default and toggle on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

=======
>>>>>>> ff9abeac689258ab5faa1790d8ff0daf3f5f77d6

$(window).scroll(function(){
  var sticky = $('.creative-nav'),
      scroll = $(window).scrollTop();

<<<<<<< HEAD
  if (scroll >= 1500) sticky.addClass('fixed');
=======
  if (scroll >= 900) sticky.addClass('fixed');
>>>>>>> ff9abeac689258ab5faa1790d8ff0daf3f5f77d6
  else sticky.removeClass('fixed');
});


