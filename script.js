// script.js — невеликі JS покращення
document.addEventListener('DOMContentLoaded', function(){
  // Highlight current link based on filename
  const links = document.querySelectorAll('.nav a');
  links.forEach(a=>{
    if(a.getAttribute('href')===location.pathname.split('/').pop() || (a.getAttribute('href')==='index.html' && location.pathname.endsWith('/'))){
      a.classList.add('active');
    }
  });
});
