$(".mobile-toggle").on("click", function() {
  $(".menu ul").fadeIn();
  $(".dark").fadeIn();
});

$(".dark").on("click", function() {
  $(".menu ul").fadeOut();
  $(".dark").fadeOut();
});
