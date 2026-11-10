const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');




menuToggle.addEventListener('click', (e) =>{
  
  menuToggle.classList.toggle('active');
  mainMenu.classList.toggle('open');
});


 document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !mainMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
      }
});

mainMenu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    menuToggle.classList.remove('active');
  }
});
/*document.querySelectorAll('.main-menu a').forEach(link => {
      link.addEventListener('click', (e) => {
        
        menuToggle.classList.remove('active');  
        mainMenu.classList.remove('open');    
       
      });
    });*/