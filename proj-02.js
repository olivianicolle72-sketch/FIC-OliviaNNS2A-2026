function calcular() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let operacao = document.getElementById("operacao").value;
            let resultado;

            if (isNaN(num1) || isNaN(num2)) {
                resultado = "Ops! Digite os números";
            } else {
                switch (operacao) {
                    case "soma": resultado = num1 + num2; break;
                    case "subtracao": resultado = num1 - num2; break;
                    case "multiplicacao": resultado = num1 * num2; break;
                    case "divisao": 
                        resultado = num2 !== 0 ? (num1 / num2).toFixed(2) : "Não pode dividir por 0! "; 
                        break;
                }
            }
            document.getElementById("resultado").textContent = "Resultado: " + resultado;
        }