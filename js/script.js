const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
menu.classList.toggle("active");

});


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



$(window).scroll(function(){
  var sticky = $('.creative-nav'),
      scroll = $(window).scrollTop();


  if (scroll >= 1500) sticky.addClass('fixed');

  else sticky.removeClass('fixed');
});


document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("videoContainer");
  const video = document.getElementById("myVideo");
  const thumbnail = document.getElementById("thumbnail");
  const overlay = document.getElementById("overlay");

  container.addEventListener("click", function () {
    thumbnail.style.display = "none";
    overlay.style.display = "none";
    video.style.display = "block";
    video.play();
  });

  video.addEventListener("ended", function () {
    video.style.display = "none";
    thumbnail.style.display = "block";
    overlay.style.display = "flex";
  });

});



