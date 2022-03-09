var secretNumber = parseInt(Math.random()*11)

function Guess(){   

var buttonIntegration = parseInt(document.getElementById("value").value)

if (secretNumber == buttonIntegration){ 
    alert("You won!") 
} else if (buttonIntegration > 10 || buttonIntegration <0) {
   alert("Please type a number from 1 to 10.") 
} else {
    alert("That is not the secret number.")
} 
var h2Integration = document.getElementById("result")
var textInnerh2 = ("The secret number is " + secretNumber)
h2Integration.innerHTML = textInnerh2
}


  





//   if (secretNumber === inputValue){ alert("You won!") }else {alert("You lost.")} 