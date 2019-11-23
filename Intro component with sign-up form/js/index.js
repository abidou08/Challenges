// Prevent form submission on page loading
$(document).ready(function() {
  $(".signup-form").submit(function(e) {
    e.preventDefault();
  });
});

// Function to check if typed email address was valid (return boolean value)
function checkEmail() {
  var emailFilter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var typedEmail = $("#email").keypress()[0].value;
  isValid = emailFilter.test(typedEmail);
  return isValid;
}

// Function to check if form inputs were filled out correctly
function checkFormData() {
  checkEmail();
  //For loop to select form input one by one
  for (var i = 0; i < $(".input-text").length; i++) {
    // variable to hold input value in terms of i
    typedData = $(".input-text")[i].value;
    // variable to hold input ID in terms of i
    targetInput = $(".input-text")[i].id;
    // variable to hold warning text element in terms of i
    targetWarningMessage = $("p.warning-text")[i].id;
    // set condition to check if form input value is empty
    if (typedData === "") {
      //adding custom error message below empty input field
      $("#" + targetWarningMessage).text($(".input-text")[i].placeholder + " cannot be empty");
      //adding class to the empty input field in order to style it(check css file)
      $("#" + targetInput).addClass("warning").css({
        "background-image": "url('images/icon-error.svg')",
        "background-repeat": "no-repeat",
        "background-position": "95% 50%",
      });
    }
    // set condition to check if email value is valid (to show different error message)
    else if (typedData !== "" && i === 2) {
      //if email entered wasn't valid
      if (isValid === false) {
        $("#" + targetWarningMessage).text("Looks like this is not an email");
        $("input#email").addClass("warning");
      }
      //if email entered was valid
      else if (isValid === true) {
        $("#" + targetWarningMessage).text("");
        $("input#email").removeClass("warning");
        $(".signup-form").unbind('submit');
      }
    }
    // If input was filled then remove error message shown below it
    else if (typedData !== "") {
      $("#" + targetWarningMessage).text("");
      $("#" + targetInput).removeClass("warning").css({
        "background-image": "",
        "background-repeat": "",
        "background-position": "",
      });
    }
    // if input was filled & email is valid then remove error message and submit form
    else if (typedData !== "" && isValid === "true") {
      $("#" + targetInput).css({
        "background-image": "",
        "background-repeat": "",
        "background-position": "",
      });
      //Allow form submission
      $(".signup-form").unbind('submit');
    }
  }
}
