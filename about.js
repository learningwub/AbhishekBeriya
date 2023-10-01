console.log('its linked');
//Close Menu
function closeMenu() {
document.getElementById('aboutPage').style.overflow = "visible";
// document.getElementById('aboutPage').style.backgroundImage = "url(bg.png)";
// document.getElementById('aboutIntro').style.display = "flex";
document.getElementById('aboutIntro').style.opacity = "1";
document.getElementById('scroll').style.display = "flex"; 
document.getElementById('openMenu').style.display = "flex"; 

document.getElementById('menu').style.display = 'none';
document.getElementById('closeMenu').style.display = 'none';
document.getElementById('nav').style.transform = 'none';
console.log('closeMenu')
}

//Open Menu
function openMenu() {
  document.getElementById('aboutPage').style.overflow = "hidden";
  document.getElementById('aboutPage').style.backgroundImage = "none";
  // document.getElementById('aboutIntro').style.display = "none";
  // document.getElementById('aboutIntro').style.opacity = "0";
  document.getElementById('scroll').style.display = "none"; 
  document.getElementById('openMenu').style.display = "none"; 

  document.getElementById('menu').style.display = 'flex';
  document.getElementById('closeMenu').style.display = 'flex';
  // document.getElementById('nav').style.scale = '0.85';
  document.getElementById('nav').style.transform = 'scale(0.85)';
  console.log('openMenu')
}
document.getElementById("openMenu").addEventListener('click', openMenu);
document.getElementById("closeMenu").addEventListener('click', closeMenu);


// Hover styling on text
function hover(){
  document.getElementById('l2').classList.remove("selected");
}
//Hover styling on text
function unhover(){
  document.getElementById('l2').classList.add("selected");
}
document.getElementById('l1').addEventListener('mouseover', hover)
document.getElementById('l1').addEventListener('mouseout', unhover)

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