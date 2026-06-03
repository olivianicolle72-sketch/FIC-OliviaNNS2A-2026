 
        function calcular() {
            let num1 = document.getElementById("num1").value;
            let num2 = document.getElementById("num2").value;
            let operacao = document.getElementById("operacao");
            let resultado;

            if(isNaN (num1) || isNaN (num2)){
                resultado = "Digite corretamente";
            }
            else{
              switch(operacao){
                case "soma": resultado = num1 + num2; break;
                case "subtracao": resultado = num1 - num2; break;
                case "multiplicacao": resultado = num1*num2; break;
                case "divisao":
                    resultado: num2 ==! 0 ? (num1/num2): "Não pode dividir por 0!"; 
              }
              document.getElementById("resultado") = "Resultado: " + resultado;
        }
    }