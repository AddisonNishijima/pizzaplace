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
    var sizeChoice = $( "#size option:selected" ).text();
    var sauceChoice = $( "#sauce option:selected" ).text();
    var cheeseChoice = $( "#cheese option:selected" ).text();
    var meatChoiceOne = $( "#meat1 option:selected" ).text();
    var meatChoiceTwo = $( "#meat2 option:selected" ).text();
    var veggieChoiceOne = $( "#veggie1 option:selected" ).text();
    var veggieChoiceTwo = $( "#veggie2 option:selected" ).text();
    var newPrice = (inputtedSize + inputtedSauce + inputtedCheese + inputtedMeatOne + inputtedMeattwo + inputtedVeggieOne + inputtedVeggieTwo);
    $("#total").fadeIn();
    $(".total").text(" " + "$" + newPrice);
    $(".size").text(" " + sizeChoice);
    $(".sauce").text(" " + sauceChoice);
    $(".cheese").text(" " + cheeseChoice);
    $(".meat1").text(" " + meatChoiceOne);
    $(".meat2").text(" " + meatChoiceTwo);
    $(".veggie1").text(" " + veggieChoiceOne);
    $(".veggie2").text(" " + veggieChoiceTwo);
  });
});
