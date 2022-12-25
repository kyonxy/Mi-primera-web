const icono = document.querySelector('.btn__menu');
const enlaces = document.querySelector('.enlaces');
const iconoAnimacion = document.querySelectorAll('.btn__menu span')
const enlaceMenu = document.querySelector('.menu__text')

icono.addEventListener('click',() => {
	enlaces.classList.toggle('activado');
	iconoAnimacion.forEach(child => {child.classList.toggle('animado')});
});
enlaces.addEventListener('click',() => {
  enlaces.classList.toggle('activado');
  iconoAnimacion.forEach(child => {child.classList.toggle('animado')});
});

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("abajo",window.scrollY>20);
})
window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
    for(var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
});

