function votar(){
 let idade = parseInt(document.getElementById("idade").value);

 switch (true){
     case (idade < 16):
        alert("Não pode votar!");
        break;

        case (idade => 16):
            alert("Hora de votar!");
            
            let numero;

            do {
                numero = parseInt(
                    prompt("Digite o numero do candidato: ")
                );

                if(numero !== 80 ){
                    alert("Numero incorreto!Digite novamente.");
                }
                while(numero !== 80);
                    alert("Voto registrado com sucesso!");
                    break;   
            }
 
        }
    }
