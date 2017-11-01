// for loop for the individual buttons
// numbered 1-9
var buttons = document.querySelectorAll(".buttonNum");

for (var i = 0; i< buttons.length; i++) {
  var button = buttons[i];

  button.addEventListener('click',function(event) {
    console.log(this.value + " was clicked!");
  })

}
//button Clear
var buttonClear = document.getElementById('AC');
buttonClear.addEventListener('click', function(event){
  console.log(this.value + " button was clicked");
  return
})

// operators *,+,/,-



//button equals


//button screen


// final answer
