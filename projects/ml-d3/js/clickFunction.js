var inputData = "data/winequality-red.csv";

$(document).ready(function(){
  $('#red').click(function(){
   $(".datavis").empty();
   inputData = "winequality-red.csv";
   $('#red').css("font-weight", "bolder");
   $('#white').css("font-weight", "normal");
   $('.IV').css("font-weight", "normal");
 });
  $('#white').click(function(){
   $(".datavis").empty();
   inputData = "data/winequality-white.csv"
   $('#white').css("font-weight", "bolder");
   $('#red').css("font-weight", "normal");
   $('.IV').css("font-weight", "normal");
 });

  $('#fa').click(function(){
   $(".datavis").empty();
   graph("fixed acidity");
   $('.IV').css("font-weight", "normal");
   $('#fa').css("font-weight", "bolder");
 });
  $('#va').click(function(){
   $(".datavis").empty();
   graph("volatile acidity");
   $('.IV').css("font-weight", "normal");
   $('#va').css("font-weight", "bolder");
 });
  $('#ca').click(function(){
   $(".datavis").empty();
   graph("citric acid");
   $('.IV').css("font-weight", "normal");
   $('#ca').css("font-weight", "bolder");
 });
  $('#rs').click(function(){
   $(".datavis").empty();
   graph("residual sugar");
   $('.IV').css("font-weight", "normal");
   $('#rs').css("font-weight", "bolder");
 });
  $('#ch').click(function(){
   $(".datavis").empty();
   graph("chlorides");
   $('.IV').css("font-weight", "normal");
   $('#ch').css("font-weight", "bolder");
 });
  $('#fsd').click(function(){
   $(".datavis").empty();
   graph("free sulfur dioxide");
   $('.IV').css("font-weight", "normal");
   $('#fsd').css("font-weight", "bolder");
 });
  $('#tsd').click(function(){
   $(".datavis").empty();
   graph("total sulfur dioxide");
   $('.IV').css("font-weight", "normal");
   $('#tsd').css("font-weight", "bolder");
 });
  $('#dn').click(function(){
   $(".datavis").empty();
   graph("density");
   $('.IV').css("font-weight", "normal");
   $('#dn').css("font-weight", "bolder");
 });
  $('#ph').click(function(){
   $(".datavis").empty();
   graph("pH");
   $('.IV').css("font-weight", "normal");
   $('#ph').css("font-weight", "bolder");
 });
  $('#sp').click(function(){
   $(".datavis").empty();
   graph("sulphates");
   $('.IV').css("font-weight", "normal");
   $('#sp').css("font-weight", "bolder");
 });
  $('#al').click(function(){
   $(".datavis").empty();
   graph("alcohol");
   $('.IV').css("font-weight", "normal");
   $('#al').css("font-weight", "bolder");
 });
});