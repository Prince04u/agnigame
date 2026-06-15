document.addEventListener('click',function(e){
  var t=e.target.closest('.menu-toggle');
  if(t){var n=document.querySelector('.nav');if(n)n.classList.toggle('open');}
});