var secretNumber = parseInt(Math.random()*11)
alert(secretNumber)


function Guess(){   

var buttonIntegration = parseInt(document.getElementById("value").value)

if (secretNumber == buttonIntegration){ 
    alert("You won!") 
} else if (buttonIntegration > 10 || buttonIntegration <0) {
   alert("Please type a number from 1 to 10.") 
} else {
    alert("That is not the secret number. \n \nTry again.")
} 
}


  





//   if (secretNumber === inputValue){ alert("You won!") }else {alert("You lost.")} 