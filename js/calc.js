// var buttonClear = document.getElementById('1');
// buttonClear.addEventListener('click', function(event){
//   document.getElementById('screen').innerHTML = "1"
// })

// for loop for the individual buttons
// numbered 1-9
function Numbers(){
var buttons = document.querySelectorAll(".buttonNum");

for (var i = 0; i< buttons.length; i++) {
  var button = buttons[i];

  button.addEventListener('click',function(event){

    var digit1 = document.getElementById('1');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "1"
    })

    var digit2 = document.getElementById('2');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "2"
    })

    var digit3 = document.getElementById('3');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "3"
    })

    var digit4 = document.getElementById('4');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "4"
    })

    var digit5 = document.getElementById('5');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "5"
    })

    var digit6 = document.getElementById('6');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "6"
    })

    var digit7 = document.getElementById('7');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "7"
    })

    var digit8 = document.getElementById('8');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "8"
    })

    var digit9 = document.getElementById('9');
    buttonClear.addEventListener('click', function(event){
    document.getElementById('screen').innerHTML = "9"
  })
  })
}
}

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

// button equals
var answer = document.getElementById('equals');
answer.addEventListener('click',function(event){
  document.getElementById('screen').innerHTML = "="
})
