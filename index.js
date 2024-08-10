const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passLen = 8

let password1 = []
let password2 = []

passwordLengthH2 = document.getElementById("length-h2")
passwordLengthSlider = document.getElementById("pass-len")
errorDivEl = document.getElementById("error-div")

generateBtn = document.getElementById("generate-btn")

lettersButton = document.getElementById("letters-btn")
numbersButton = document.getElementById("numbers-btn")
symbolsButton = document.getElementById("symbols-btn")

passOneEl = document.getElementById("pass-one")
passTwoEl = document.getElementById("pass-two")

let isLettersPressed = true
let isNumbersPressed = true
let isSymbolsPressed = false

passwordLengthH2.textContent += " " + passLen

passwordLengthSlider.addEventListener("input", function(){
    passwordLengthH2.textContent = `Password length: ${passwordLengthSlider.value}`
    passLen = passwordLengthSlider.value
})


lettersButton.addEventListener("click",function(){
    if(isLettersPressed){
        isLettersPressed = false;
        lettersButton.style.background = "#FB7185" //turn red
    }
    else{
        isLettersPressed = true;
        lettersButton.style.background = "#10B981"
    }
})


numbersButton.addEventListener("click",function(){
    if(isNumbersPressed){
        isNumbersPressed = false;
        numbersButton.style.background = "#FB7185" //turn red
    }
    else{
        isNumbersPressed = true;
        numbersButton.style.background = "#10B981"
    }
})

symbolsButton.addEventListener("click",function(){
    if(isSymbolsPressed){
        isSymbolsPressed = false;
        symbolsButton.style.background = "#FB7185" //turn red
    }
    else{
        isSymbolsPressed = true;
        symbolsButton.style.background = "#10B981"
    }
})

function logHEllo(){
    console.log("HELLO")
}

generateBtn.addEventListener("click",function(){
    let characterArray = []
    password1 = []
    password2 = []
    if(isLettersPressed){
        characterArray = characterArray.concat(letters)
    }
    if(isNumbersPressed){
        characterArray = characterArray.concat(numbers)
    }
    if(isSymbolsPressed){
        characterArray = characterArray.concat(symbols)
    }
    if(characterArray.length === 0){
        errorDivEl.innerHTML = `<p style="color:red">Error. No include option selected</p>`
    }
    else{
        errorDivEl.innerHTML = null
        let randomNum
        let i = 0
        for(i=0;i<passLen;i++){
            randomNum = Math.floor( Math.random()*characterArray.length )
            password1.push(characterArray[randomNum])
            randomNum = Math.floor( Math.random()*characterArray.length )
            password2.push(characterArray[randomNum])
        }
    }
    passOneEl.textContent = password1.join("")
    passTwoEl.textContent = password2.join("")
})

passOneEl.addEventListener("click",function (){
    navigator.clipboard.writeText(passOneEl.textContent)
    document.getElementById("inform-p").textContent = "Copied to clipboard!"
})
passTwoEl.addEventListener("click", function(){
    navigator.clipboard.writeText(passTowEl.textContent)
    document.getElementById("inform-p").textContent = "Copied to clipboard!"
})
