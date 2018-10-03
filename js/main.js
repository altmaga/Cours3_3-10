var heightHeader = 200;
var myHeader = document.querySelector('header');
window.addEventListener("scroll", function(event) {
  if (window.scrollY > heightHeader) {
    myHeader.classList.add('scrolled');
  } else {
    myHeader.classList.remove('scrolled');
  }
});