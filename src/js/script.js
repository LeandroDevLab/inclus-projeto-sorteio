const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");
const randomButton = document.getElementById("randomButton");
const result = document.getElementById("result");

const randomNumberWithClick = () => {
  let min = parseInt(inputMin.value);
  const max = parseInt(inputMax.value);

  if (isNaN(min)) {
    min = 0;
  }

  if (isNaN(min) || isNaN(max)) {
    result.textContent = "Por favor, insira números válidos.";
    return;
  }

  if (min > max) {
    result.textContent =
      "O valor mínimo deve ser menor ou igual ao valor máximo.";
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  result.textContent = `Número sorteado: ${randomNumber}`;
};
