const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
menu.classList.toggle("active");

});


$(window).scroll(function(){
  var sticky = $('.creative-nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 900) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


