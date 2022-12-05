// const scroll = document.querySelector('#scroll');
// console.log(scroll);

// function hide() {
//   scroll.style.display = 'none';
//   console.log("it's listening");
// };

// window.addEventListener('scroll', hide);
// console.log('hello');
console.log('its linked');
const openMenu = document.getElementById("openMenu");
console.log(openMenu);
function Menu() {
  document.getElementById('homePage').style.overflow = "hidden";
  document.getElementById('homePage').style.backgroundImage = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('scroll').style.display = "none"; 
  document.getElementById('openMenu').style.display = "none"; 

  document.getElementById('menu').style.display = 'flex';
  document.getElementById('closeMenu').style.display = 'flex';
  // document.getElementById('nav').style.scale = '0.85';
  document.getElementById('nav').style.transform = 'scale(0.85)';
  console.log('Menu')
}
document.getElementById("openMenu").addEventListener('click', Menu);
document.getElementById("openMenu").addEventListener('mouseover', Menu);
// document.getElementById("closeMenu").addEventListener('click', Menu);
// document.getElementById("closeMenu").addEventListener('mouseover', Menu);
