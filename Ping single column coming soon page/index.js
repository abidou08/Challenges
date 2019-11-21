// Function that allow us to check if entered email address was valid
function checkEmail() {
  var emailFilter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var typedEmail = $(".email-input").keypress()[0].value;
  hasError = emailFilter.test(typedEmail);
  return hasError;
}

// Function that describe action to do when user hit notify button
function subscribeButton(){
  checkEmail();
  // If email address entered was valid => show success message
  if (hasError === true) {
    $(".warning-text").text("Thank you for subscribing").css({
      "visibility": "visible",
      "color": "green",
    });
  }
  // If email address entered was wrong => show error message
  else if (hasError === false) {
   $(".warning-text").text("Please provide a valid email address").css("visibility", "visible");
   $(".email-input").css({
     "border-color": "hsl(354, 100%, 66%)",
     "border-width": "2px",
   });
 }
}

// Execute check email function when user press "Enter" key
$("input").on("keypress", function(e) {
  if (e.keyCode == "13") {
    e.preventDefault();
    subscribeButton();
  }
});

// Hide message error when user modify email address
$("input").on("keydown", function() {
  $(".warning-text").text("").css({
    "visibility": "hidden",
    "color": "",
  });
  $(".email-input").css({
    "border-color": "",
    "border-width": "",
  });
});
