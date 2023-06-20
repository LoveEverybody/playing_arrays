document.addEventListener("DOMContentLoaded", () => {
  let mainArray = [];
  let oddArray = [];
  let evenArray = [];
  let zeroGame = [];
  const zeroGameArray = [0, 2, 3, 4, 7, 12, 15, 18, 19, 21, 22, 25, 26, 28, 29, 32, 35];
  let consecutiveOddCount = 0;
  let consecutiveEvenCount = 0;
  let isPreviousNumberOdd = false;
  let isPreviousNumberEven = false;
  let notInZeroGameCount = 0; // Variável para contar o número de vezes que um número não está presente em zeroGameArray

  // Obtém uma referência para o campo de entrada e o botão de envio
  const inputNumber = document.getElementById("inputNumber");
  const submitButton = document.getElementById("submitButton");
  const showArray = document.querySelector("#showArray p");
  const showOddArray = document.querySelector("#showOddArray p");
  const showEvenArray = document.querySelector("#showEvenArray p");
  const showOddSum = document.getElementById("oddSumValue");
  const showEvenSum = document.getElementById("evenSumValue");
  const showZeroGame = document.getElementById("showZeroGame").querySelector("p");
  const showNotInZeroGameCount = document.getElementById("showNotInZeroGameCount").querySelector("p");

  // Adiciona um ouvinte de evento para o clique no botão de envio
  submitButton.addEventListener("click", () => {
    submitNumber();
  });

  // Adiciona um ouvinte de evento para a tecla pressionada no campo de entrada
  inputNumber.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      submitNumber();
    }
  });

  // Função para enviar o número digitado
  function submitNumber() {
    // Obtém o valor digitado no campo de entrada
    const numberValue = inputNumber.value;

    // Valida o número antes de adicioná-lo ao array
    if (validateNumber(numberValue)) {
      const confirmAdd = confirm("Deseja adicionar o número " + numberValue + " ao array?");
      if (confirmAdd) {
        const number = Number(numberValue);
        mainArray.unshift(number);

        if (number % 2 === 1) {
          if (isPreviousNumberOdd) {
            consecutiveOddCount++;
          } else {
            isPreviousNumberOdd = true;
            consecutiveOddCount = 1;
          }
        } else {
          if (isPreviousNumberOdd) {
            isPreviousNumberOdd = false;
            oddArray.unshift(consecutiveOddCount);
          }
        }

        if (number % 2 === 0) {
          if (isPreviousNumberEven) {
            consecutiveEvenCount++;
          } else {
            isPreviousNumberEven = true;
            consecutiveEvenCount = 1;
          }
        } else {
          if (isPreviousNumberEven) {
            isPreviousNumberEven = false;
            evenArray.unshift(consecutiveEvenCount);
          }
        }

        if (!zeroGameArray.includes(number)) {
          notInZeroGameCount++;
          zeroGame.unshift(notInZeroGameCount);
        } else {
          notInZeroGameCount = 0;
         // zeroGame.unshift(0);
        }

        // Limpa o campo de entrada
        inputNumber.value = "";

        // Exibe os valores digitados com um espaço entre eles
        showArray.textContent = numberValue + " | " + showArray.textContent;

        // Exibe a array dos números ímpares
        showOddArray.textContent = oddArray.join(", ");

        // Exibe a array dos números pares
        showEvenArray.textContent = evenArray.join(", ");

        // Exibe a array zeroGame
        showZeroGame.textContent = zeroGame.join(", ");

        
      }
    } else {
      inputNumber.value = "";
      alert("Digite um número entre 0 e 36.");
    }
    showOddSum.textContent = consecutiveOddCount;
    showEvenSum.textContent = consecutiveEvenCount;
    showNotInZeroGameCount.textContent = notInZeroGameCount;
  }
});

function validateNumber(value) {
  var parsedValue = parseInt(value);

  if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 36) {
    return false;
  }

  return true;
}
