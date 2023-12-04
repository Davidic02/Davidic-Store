
//$(document).ready(function(){
  //$(".burger-nav").on("click" , function(){
  //$("nav ul").toggleClass(".open");
//})
//})//



const burgernav = 
document.querySelector('.burger-nav');
const navul = document.querySelector('.nav ul');
burgernav.addEventListener('click', function(){
  navul.classList.toggle('open');
})