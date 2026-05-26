let pessoas = [];

function adicionar() {
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);

    
    if (nome === "" || isNaN(idade) || idade < 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }
  
    pessoas.push({ nome: nome, idade: idade });

    let item = document.createElement("li");
    item.textContent = nome + " - " + idade + " anos";
    document.getElementById("lista").appendChild(item);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}

function exibirNomes() {
  
    pessoas.forEach(function(pessoa) {
        console.log("forEach1: " + pessoa.nome);
    });

    pessoas.forEach(function(pessoa) {
        console.log("forEach2: " + pessoa.nome);
    });

    for (let pessoa of pessoas) {
        console.log("for let: " + pessoa.nome);
    }
}

function analisar() {
   
    pessoas.sort((a, b) => {
        if (a.nome !== b.nome) {
            return a.nome.localeCompare(b.nome);
        }
        return a.idade - b.idade;
    });
    
    console.log("Lista ordenada:", pessoas);
}
