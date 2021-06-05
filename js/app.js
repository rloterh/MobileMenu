const header = document.querySelector('.header'); 
const menuItems= document.querySelector('.desktop-nav');
const showMenu = document.querySelector('.menu-bars');
const closeMenu = document.querySelector('.close-menubars');


const displayMenu = () => {
  showMenu.classList.add('display-none');  
  closeMenu.classList.add('display-block'); 
  menuItems.classList.add('display-flex'); 
  header.classList.add('mobileHeader-height');   
}

const hideMenu = () => {
  showMenu.classList.remove('display-none');  
  closeMenu.classList.remove('display-block');
  menuItems.classList.remove('display-flex'); 
  header.classList.remove('mobileHeader-height');
  header.classList.add('normalHeader-height');
}

showMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', hideMenu);
