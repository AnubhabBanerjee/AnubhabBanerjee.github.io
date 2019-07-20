$(function() {
  $("#navbar-holder").load("navbar.html");
});

function makeActive(currentClass){
  console.log(currentClass);
  var prevClass = $(document).find(".active");
  console.log(prevClass);
  $(prevClass).removeClass("active");
  $(currentClass).addClass("active");
}
