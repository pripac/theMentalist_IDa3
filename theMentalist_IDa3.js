var secretNumber = parseInt(Math.random()*11)

function Guess(){   

var h2Integration = document.getElementById("result")

var buttonIntegration = parseInt(document.getElementById("value").value)

if (secretNumber == buttonIntegration){ 
    h2Integration.innerHTML ="You won!" 
} else if (buttonIntegration > 10 || buttonIntegration <0) {
   h2Integration.innerHTML ="Please type a number from 1 to 10."
} else {
    h2Integration.innerHTML ="That is not the secret number. \n \n The secret number is " + secretNumber
} 
}


  

//var textInnerh2 = ("The secret number is " + secretNumber)



//   if (secretNumber === inputValue){ alert("You won!") }else {alert("You lost.")} 