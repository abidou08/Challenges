// E-mail validation regular expression
var emailFilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
// Variable stocking email address that has been typed by user
var inputEmail = $("input").keypress();
// Variable with boolean value to be used later to check email validity
var hasError = false;

var email;


// Add event listener that fires when a user clicks a button (execute checking email function)
$("button").on("click", function() {
  checkEmail();
});

// Add event listener that fires when a user clicks the "Enter" key (execute checking email function)
$("input").on("keypress", function(e) {
  // Checking if the key pressed was "Enter" key
  if (e.keyCode == "13") {
    checkEmail();
  }
});

// New background style for button when mouse over it
$("button").mouseover(function() {
  $("button").css("background", "linear-gradient(135deg, hsl(0, 0%, 100%),hsl(0, 80%, 86%))");
});

// Remove the old background style from button when mouse out of it
$("button").mouseout(function() {
  $("button").css("background", "");
});

// Add event listener that fires when a user type in keyboard
$("input").on("keydown", function() {
  // Remove error message when he do that (Typing in keyboard)
  $(".warning").css("visibility", "hidden");
  $(".subscribe-form").css({
    "border-color": "",
    "border-width": "",
  });
});

// Creating function to check if entred email was valid
function checkEmail() {
// Checking if entred email was valid, we will get boolean value which will be saved in the "email" variable
  email = emailFilter.test(inputEmail[0].value);
  //If typed email was valid
   if (email !== hasError) {
    $(".warning").css("visibility", "hidden");
  }
  //If Typed Email Was Wrong
  else if (email === hasError) {
    $(".warning").css("visibility", "visible").fadeIn(500).fadeOut(250).fadeIn(500);
    $(".subscribe-form").css({
      "border-color": "hsl(0, 93%, 68%)",
      "border-width": "2px",
    });
  }
}
