const randomnumber=console.log(Math.round(Math.random()*100 +1))
const submit=document.querySelector("#subt")
const userinput=document.querySelector("#guessField")
const guessesslot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const startover=document.querySelector(".resultParas")
const p=document.createElement('p')
let prevguess=[];
let numguess=1;

let playgame = true;

if(playgame){
    submit.addEventListener("click",function(e){
e.preventDefault()
let guess=parseInt(userinput.value)
validateGuess(guess)
    })
}

function validateGuess(guess){
if(isNaN(guess)){
alert("please enter a valid number")
}else if (guess<1){
    alert("please enter a number more then 1")
}else if (guess>100){
    alert("please enter a number less then 100")
}else{
    prevguess.push(guess)
    if(numguess===11){
        displayGuess(guess)
        displayMessage(`Game over. Random number was ${randomnumber}`)
     endgame()
    }else{
        displayGuess(guess)
        CheckGuess(guess)
    }
}
}
function CheckGuess(guess){
    if(guess=== randomnumber){
        displayMessage(`you guessed it right`)
        endgame()
    }else if(guess<randomnumber){
    displayMessage(`Number is Too low`)
}else if(guess>randomnumber){
    displayMessage(`Number is Too high`)
}

}
function displayGuess(guess){
userinput.value="";
guessesslot.innerHTML+=`${ guess }`
numguess++;
remaining.innerHTML=`${11-numguess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userinput.value=""
}
function newgame(){
    // 
}

// at the end project are incomplete 
// because message is not displayed 
// so we stop the workong on this project 
