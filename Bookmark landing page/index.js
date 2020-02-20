var hamburger = document.querySelector(".icon-hamburger");
var navItems = document.querySelector(".nav-items");
var navbarLogoPath1= document.querySelector(".navbar-logo-path01");
var navbarLogoPath2= document.querySelector(".navbar-logo-path02");
var navbarLogoCircle= document.querySelector("circle");
var tabToggle = document.querySelectorAll(".tab-toggle-list-txt");
var tabContent = document.getElementsByClassName("features-tab");
var arrowIcon = document.getElementsByClassName("icon-arrow");
var arrowIconColor = document.getElementsByClassName("icon-arrow-path");
var answers = document.querySelectorAll(".answers");
var email = document.querySelector(".form-email");
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Detecting click on hamburger icon
hamburger.addEventListener('click', function(){
  this.classList.toggle("close");
  this.classList.toggle("white");
  navItems.classList.toggle("show");
  navbarLogoPath1.classList.toggle("white");
  navbarLogoPath2.classList.toggle("dark-blue");
  navbarLogoCircle.classList.toggle("white");
});

// Hide features tab content except first tab
for (var i = 1; i < tabContent.length; i++) {
  tabContent[i].style.display = "none";
}

// Function that will executed when tab toggle is clicked
function changeTab(evt, tabNum) {
// Hide all tabs content
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
// Remove red underline from all tab toggle
    for (var i = 0; i < tabToggle.length; i++) {
    tabToggle[i].classList.remove("selected");
  }
// Show tab content corresponding to tab toggle clicked
  document.getElementById(tabNum).style.display = "flex";
// Underline clicked tab toggle
  evt.currentTarget.className += " selected";
}


function showAnswer(num){
  // Rotate arrow icon
  arrowIcon[num].classList.toggle("rotate");
  // Change arrow icon color
  arrowIconColor[num].classList.toggle("stroke");
  // Show answer
  answers[num].classList.toggle("showans");
}


function ValidateEmail()
{
  //Test if entred email is valid
 if (regex.test(email.value) === true)
  {
    // If valid email then remove error message
    email.classList.remove("wrong");
    document.querySelector(".error-msg").classList.remove("visible");
  }else{
    // If wrong email then show error message
    email.classList.add("wrong");
    document.querySelector(".error-msg").classList.add("visible");
  }
}

// when Contact Us button has been clicked we validate email
document.querySelector(".form-btn").addEventListener('click', ValidateEmail);
