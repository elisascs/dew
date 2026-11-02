window.onload = function () {
const inputNome = document.querySelector("#nome");
const btnAvancar = document.querySelector("#btnAvancar");
const blocoNotas = document.querySelector("#blocoNotas");
const btnCalcular = document.querySelector("#calcular");
const inputNota1 = document.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");
const inputNota3 = document.querySelector("#nota3");

  // Botão para mostrar os campos das notas
  btnAvancar.addEventListener("click", function () {
    if (inputNome.value.trim() !== "") {
      blocoNotas.style.display = "block";
    } else {
      alert("Por favor, digite o seu nome primeiro.");
    }
  });

  // Botão para calcular a média
  btnCalcular.addEventListener("click", function () {
    const nota1 = parseFloat(inputNota1.value);
    const nota2 = parseFloat(inputNota2.value);
    const nota3 = parseFloat(inputNota3.value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      alert("Por favor, preencha as três notas antes de calcular.");
      return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    let situacao = ""

    if (media >= 7) {
      situacao = "Aprovado";
    } else {
      situacao = "Reprovado";
    }

    alert(`${inputNome.value}, a sua média é ${media.toFixed(1)}. Situação: ${situacao}!`);
  });

  function limitarNota(input) {
    input.addEventListener("input", function () {
      let valor = parseFloat(input.value);

      if (valor > 10) {
        input.value = 10;
      } else if (valor < 0) {
        input.value = 0;
      }
    });
  }

  limitarNota(inputNota1);
  limitarNota(inputNota2);
  limitarNota(inputNota3);

};