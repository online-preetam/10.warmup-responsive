const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');




menuToggle.addEventListener('click', (e) =>{
  
  menuToggle.classList.toggle('active');
  mainMenu.classList.toggle('open');
});


 document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !mainMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        mainMenu.classList.remove('open');
      }
});

document.querySelectorAll('.main-menu a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); 
        menuToggle.classList.remove('active');  
        mainMenu.classList.remove('open');    
       
      });
    });