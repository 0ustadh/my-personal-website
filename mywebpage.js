// Global Variables
/* If a variable will be used by 2 or more different functions, make it 
a global variable. Don't Repeat Yourself! */
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const web = document.getElementById('webdev');
const tech = document.getElementById('technic');
const webd = document.getElementById('webD');
const compt = document.getElementById('compT');
const webDev = document.getElementById('webDev');
const compTech = document.getElementById('compTech');
const toggler = document.getElementById('toggle');
const intro = document.getElementById('intro');
const Web = document.getElementById('Web');
const Tech = document.getElementById('Tech'); 
// Global variables end

// Responsive Topnav
function navLinks(){
  document.querySelectorAll(".nav-link").forEach((el) => {
    el.classList.add('text-white');
  });
}
navLinks();
// Responsive Topnav end

// Header button toggle
function showBtn() {
  const lm = document.getElementById('learnMore');
  if(btn1.className.indexOf("d-block") == -1 || 
  btn2.className.indexOf("d-block") == -1){
    lm.classList.remove('d-none');
    lm.className += ' d-block';
  }
}
// Header button toggle end

// Career Toggle
function webDevp(){
  const wd = document.getElementById('wd');
  if(btn1.click){
    tech.classList.remove('active');
    web.className += ' active';
    wd.removeAttribute('href');
    wd.setAttribute('href', '#webdev');
    web.classList.remove('d-none');
    web.className += ' d-visible';
    tech.classList.remove('d-visible');
    tech.className += ' d-none';
    webd.classList.remove('d-none');
    webd.className += ' d-visible';
    compt.classList.remove('d-visible');
    compt.className += ' d-none';
    webDev.classList.remove('d-none');
    webDev.className += ' d-visible';
    compTech.classList.remove('d-visible');
    compTech.className += ' d-none';
    Web.classList.remove('d-none');
    Web.className += ' d-visible';
    Tech.classList.remove('d-visible');
    Tech.className += ' d-none';
    changeBgDev();
  }
}
function compTechn(){
  const ct = document.getElementById('ct');
  if(btn2.click){
    web.classList.remove('active');
    tech.className += ' active';
    ct.removeAttribute('href');
    ct.setAttribute('href', '#technic');
    tech.classList.remove('d-none');
    tech.className += ' d-visible';
    web.classList.remove('d-visible');
    web.className += ' d-none';
    compt.classList.remove('d-none');
    compt.className += ' d-visible';
    webd.classList.remove('d-visible');
    webd.className += ' d-none';
    compTech.classList.remove('d-none');
    compTech.className += ' d-visible';
    webDev.classList.remove('d-visible');
    webDev.className += ' d-none';
    Tech.classList.remove('d-none');
    Tech.className += ' d-visible';
    Web.classList.remove('d-visible');
    Web.className += ' d-none';
    changeBgTech();
  }
}
// Career Toggle end

// Dark mode program
function toggleMode(){
  const bod = document.body;
  bod.classList.toggle('bg-black');
  bod.classList.toggle('text-white');
  // For dark mode button content
  toggleText();
  // For cards
  cardDark();
  // For toggle button
  toggleBtn();
  // For Card headers
  toggleHead();
  // For Footer
  darkFoot();
  // For Buttons
  darkBtn();
  cvBtn();
  // For links
  toggleLinks();
  }
  function toggleText(){
      if (toggler.innerHTML === 'Light'){
        toggler.innerHTML = "Dark";
      } else{
        toggler.innerHTML = "Light";
      }
    }
  // Changes bgcolor of toggler when clicked 
  function toggleBtn(){
    toggler.classList.toggle('w3-black');
    }
  // Custom Dark theme for cards
  function cardDark(){
    document.querySelectorAll(".w3-card").forEach((el) => {
      el.classList.toggle('card-dark');
    });
  }
  // Headers will be white when in Dark Mode
  function toggleHead() {
      document.querySelectorAll(".head").forEach((el) => {
        el.classList.toggle('text-white');
      });
  }
  // Dark Mode Footer 
  function darkFoot() {
    let x = document.getElementById('footer');
    if (x.className.indexOf("w3-metro-darken") == -1) {
      x.className += " w3-metro-darken";
    } else {
      x.className = x.className.replace(" w3-metro-darken", " card-dark");
    }
  }
  // Dark Mode Buttons
  function darkBtn(){
    document.querySelectorAll(".toggle").forEach((el) => {
      if (el.className.indexOf("btn-outline-dark") == -1) {
        el.className += " btn-outline-dark";
      } else {
        el.className = el.className.replace(" btn-outline-dark", 
        " btn-outline-light");
      }
    });
  }
  function cvBtn(){
    const cv = document.getElementById('cv');
     if(cv.className.indexOf('btn-outline-light') == -1){
      cv.className = cv.className.replace(' btn-outline-dark',
      ' btn-outline-light');
    } else {
      cv.className = cv.className.replace(' btn-outline-light',
      ' btn-outline-dark');
    }
  }
  // Links will be white in dark mode
  function toggleLinks(){
    document.querySelectorAll('.a').forEach((el) => {
      el.classList.toggle('text-white');
    });
  }
  // Dark mode by default
  window.onload = function() {
     toggleMode(); 
     // Web Developer by default
     webDevp();
  }
  // Dark mode program end

// Fade-in animation (jQuery)
$(document).ready(function() {
  $(window).scroll( function(){
    $('.revealUp').each( function(i){
    var bottom_of_object = $(this).offset().top + 
    $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + 
    $(window).height();
    if( bottom_of_window > bottom_of_object ){
        $(this).addClass('showme');
    }
    if( bottom_of_window < bottom_of_object ){
        $(this).removeClass('showme');
    }
  });
});
});
// Fade-in animation end

// Tooltip initialization
let tooltipTriggerList = [].slice.call(document.querySelectorAll
  ('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) 
  {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  // Tooltip initialization end

// The Accordion
function accordion(id) {
  let x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className -= 'w3-hide';
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.className += ' w3-hide';
  }
}
 // Accordion Text Toggle
 function accText(id) {
  let txt = document.getElementById(id);
  /* it would be <element onclick='accText("txt1")'><span id='txt1'>
  </span></element> */
  if (txt.innerHTML === 'More'){
    txt.innerHTML = "Less";
  } else{
    txt.innerHTML = "More";
  }
}
// Accordion end

// Change occupation background
function changeBgDev() {
  intro.style.backgroundImage = "url('bgimg.jpg')";
}
function changeBgTech() {
  intro.style.backgroundImage = "url('comptech.jpg')";
}
// Change occupation background end

// Change Font Program
const body = document.body;
const font = document.getElementById('font');
const Roboto = document.getElementById('Roboto');
const Segoe = document.getElementById('Segoe');
 function roboto(){
  body.style.fontFamily = 'Roboto';
  font.innerHTML = Roboto.innerHTML;
 }
 function segoe(){
  body.style.fontFamily = 'Segoe UI';
  font.innerHTML = Segoe.innerHTML;
 }
// Change Font Program end

// Simplify Interactive controls
// Web Developer
function WebDev() {
  showBtn();
  webDevp();
}
// Computer Technician
function ComTech() {
  showBtn();
  compTechn();
}