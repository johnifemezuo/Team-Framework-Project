let bars = document.querySelectorAll('#bars');

bars.forEach(bar =>{
  bar.addEventListener('click', (e)=>{
   let nav =  bar.parentElement.previousElementSibling.querySelector('#nav')
    bar.classList.toggle('change');
  
    nav.className == 'header_close'? nav.classList.add('header_open') :  nav.classList.remove('header_open');
  });
  
})
