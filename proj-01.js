
    function verificarIdade() {
      let idade = document.getElementById("idade").value;
      let resultado = document.getElementById("resultado");

      if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
      } else if (idade > 0) {
        resultado.textContent = "Você é menor de idade.";
      } else {
        resultado.textContent = "Digite uma idade válida.";
      }
    }
