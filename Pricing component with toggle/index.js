// Detect mouse click on toggle button
$(".switch").on("click", changeText);

// Detect "TAB" key press in keyboard
$("body").on("keydown", function(e){
  if (e.keyCode === 9 && $("input")[0].checked===true){
    $(".switch").focus();
    $("input")[0].checked = false;
    changeText();
  }else if (e.keyCode === 9 && $("input")[0].checked === false){
    $(".switch").focus();
    $("input")[0].checked = true;
    changeText();
  }
});

// Change price depending on cycle
function changeText(){
  var isChecked = $("input")[0].checked;
  if (isChecked === true){
    $(".pricing-basic h1").html("&dollar;19.99");
    $(".pricing-pro h1").html("&dollar;24.99");
    $(".pricing-master h1").html("&dollar;39.99");
  }else if(isChecked === false){
    $(".pricing-basic h1").html("&dollar;199.99");
    $(".pricing-pro h1").html("&dollar;249.99");
    $(".pricing-master h1").html("&dollar;399.99");
  }
}
