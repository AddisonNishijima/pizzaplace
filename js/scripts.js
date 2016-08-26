//business logic
function Pizza(size, sauce, cheese, meat1, meat2, veggie1, veggie2) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat1 = meat1;
  this.meat2 = meat2;
  this.veggie1 = veggie1;
  this.veggie2 = veggie2;
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("#size").val());
    var inputtedSauce = parseInt($("#sauce").val());
    var inputtedCheese = parseInt($("#cheese").val());
    var inputtedMeatOne = parseInt($("#meat1").val());
    var inputtedMeattwo = parseInt($("#meat2").val());
    var inputtedVeggieOne = parseInt($("#veggie1").val());
    var inputtedVeggieTwo = parseInt($("#veggie2").val());
    var newPrice = (inputtedSize + inputtedSauce + inputtedCheese + inputtedMeatOne + inputtedMeattwo + inputtedVeggieOne + inputtedVeggieTwo);
    $(".total").text(" " + "$" + newPrice);
  });
});
