//Variable de control
var slideIndex = 1;
showSlides(slideIndex);


//Función para cambiar de slide (adelante o atrás)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Función que te muestra la slide actual
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Función que cambia de imagen que se esté mostrando para ir a la anterior o la siguiente
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}