var hamburger = document.getElementById("hamburger");
var navContainer = document.querySelector(".navbar-container");
var introImage = document.querySelector(".intro-img");
var navBarButton = document.querySelector(".navbar-btn");
var emailInput= document.querySelector(".email-input");
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

hamburger.addEventListener("click", function(){
  this.classList.toggle("close");
  navContainer.classList.toggle("show");
  introImage.classList.toggle("hide");
  navBarButton.classList.toggle("hide");
});

function checkEmail(){
  if (regex.test(emailInput.value) === false){
    emailInput.classList.add("error");
  }else {
    emailInput.classList.remove("error");
  }
}

document.querySelector(".go-btn").addEventListener('click', checkEmail);
