// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const buttonTry = document.querySelector('#btnTry')
const buttonPlayAgain = document.querySelector('#btnPlayAgain');
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Events
buttonTry.addEventListener('click', handleTryClick)
buttonPlayAgain.addEventListener('click', handleResetGame)
document.addEventListener('keydown', pressEnter)



//Func
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');
  
  if(Number(inputNumber.value) == "") {
    window.alert("Insira o valor!")
  }
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    window.alert('Insira um número de 0 a 10!')
  }

  else if(Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    
    const h2 = document.querySelector(".screen2 h2");
    h2.innerHTML = `Acertou em ${xAttempts} tentativa${xAttempts === 1 ? "" : "s"}`;
    
    
  }
  inputNumber.value = ""
  xAttempts++;
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleResetGame() { 
  toggleScreen()
  xAttempts = 1
}

function pressEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetGame()
    }
}
