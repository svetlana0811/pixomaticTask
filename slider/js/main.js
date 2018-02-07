$(document).ready(function() {
  $(".slider").on("input change", function() {
    var val = $(".slider").val();
    var grad = "linear-gradient(to right, #1dd89b " + val + "%, lightgray " + val + "%)";
    $(this).css("background", grad);
  });
});