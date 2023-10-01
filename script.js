// const scroll = document.querySelector('#scroll');
// console.log(scroll);

// window.addEventListener('scroll', hide);
// console.log('hello');

// console.log('its linked');
// const openMenu = document.getElementById("openMenu");
// console.log(openMenu);

console.log('its linked');

//Close Menu
function closeMenu() {
document.getElementById('homePage').style.overflow = "visible";
document.getElementById('homePage').style.backgroundImage = "url(bg.png)";
document.getElementById('intro').style.display = "flex";
document.getElementById('scroll').style.display = "flex"; 
document.getElementById('openMenu').style.display = "flex"; 

document.getElementById('menu').style.display = 'none';
document.getElementById('closeMenu').style.display = 'none';
document.getElementById('nav').style.transform = 'none';
console.log('closeMenu')
}

//Open Menu
function openMenu() {
  document.getElementById('homePage').style.overflow = "hidden";
  document.getElementById('homePage').style.backgroundImage = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('scroll').style.display = "none"; 
  document.getElementById('openMenu').style.display = "none"; 

  document.getElementById('menu').style.display = 'flex';
  document.getElementById('closeMenu').style.display = 'flex';
  // document.getElementById('nav').style.scale = '0.85';
  document.getElementById('nav').style.transform = 'scale(0.85)';
  console.log('openMenu')
}
<<<<<<< HEAD
document.getElementById("openMenu").addEventListener('click', openMenu);
// document.getElementById("openMenu").addEventListener('mouseover', openMenu)

document.getElementById("closeMenu").addEventListener('click', closeMenu);
// document.getElementById("closeMenu").addEventListener('mouseout', closeMenu);

//development started again 01/10/23

// Hover styling on text
function hover(){
  document.getElementById('l1').classList.remove("selected");
}
//Hover styling on text
function unhover(){
  document.getElementById('l1').classList.add("selected");
}
document.getElementById('l2').addEventListener('mouseover', hover)
document.getElementById('l2').addEventListener('mouseout', unhover)

//Remove the scroll svg
function remove(){
  document.getElementById('scroll').style.display = 'none'
}
window.addEventListener('scroll', remove)

function up(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.getElementById('UpArrow').addEventListener('click', up)
=======
document.getElementById("openMenu").addEventListener('click', Menu);
document.getElementById("openMenu").addEventListener('mouseover', Menu);
// document.getElementById("closeMenu").addEventListener('click', Menu);
// document.getElementById("closeMenu").addEventListener('mouseover', Menu);

//testing gitlens
>>>>>>> 9f116b96f42136074a94cb32dbf89a7224be2f8c
