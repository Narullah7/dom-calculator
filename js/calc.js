// for loop for the individual buttons
// numbered 1-9
// function Numbers(){
// var buttons = document.querySelectorAll(".buttonNum");
//
// for (var i = 0; i< buttons.length; i++) {
//   var button = buttons[i];
//
//   button.addEventListener('click',function(event) {
//     var a = console.log(event);
//   })
//   return a;
// }
// }
//button Clear
var buttonClear = document.getElementById('AC');
buttonClear.addEventListener('click', function(event){
  document.getElementById('screen').innerHTML = "0"
})

// operators *,+,/,-
// function Operation() {
// var operators = document.querySelectorAll(".operator");
//
// for (var j = 0; j< operators.length; j++) {
//   var button = operators[j];
//
//   button.addEventListener('click',function(event){
//
//   })
// }
// }
//button equals
// var answer = document.getElementById('equals');
// answer.addEventListener('click',function(event){
//   console.log(finalAnswer);
// })

// //button screen
// var finalAnswer = getElementById('screen');
//
// if (buttonClear) {
// }
