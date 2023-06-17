document.addEventListener("DOMContentLoaded", () => {
  let mainArray = [];

  // Obtém uma referência para o campo de entrada e o botão de envio
  const inputNumber = document.getElementById("inputNumber");
  const submitButton = document.getElementById("submitButton");
  const showArray = document.querySelector("#showArray p");

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
    mainArray.unshift(Number(numberValue));

    // Limpa o campo de entrada
    inputNumber.value = "";

    // Exibe os valores digitados com um espaço entre eles
    showArray.textContent = mainArray.join(" ");
  }
});

function validateNumber() {
  var input = document.getElementById("inputNumber");
  var value = parseInt(input.value);

  if (isNaN(value) || value < 0 || value > 36) {
    input.value = "";
    alert("Digite um número entre 0 e 36.");
  }
}