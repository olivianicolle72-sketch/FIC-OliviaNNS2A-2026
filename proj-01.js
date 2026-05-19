let ListaPessoas = "Ana-15,Bruno-20,Carla-25,Diego-30";
let nomes = ListaPessoas.split(",");
let pessoas = [];

function adicionar() {
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);

    if ( nome == "" || idade < 0) {
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
    nomes.forEach(function(nome) {
        console.log("forEach1: " + nome);
    });

    nomes.forEach(function(nome) {
        console.log("forEach2: " + nome);
    });

    for (let nome of nomes) {
        console.log("for let: " + nome);
    }
}

function Analisar() {
   pessoas.sort(function(a, b) {
        return a.idade - b.idade;
    });

let lista= document.getElementById("lista");
lista.innerHTML = "";

for (let i = 0; i < nomes.length; i++) {
    let item = document.createElement("li");
   item.innerText = pessoas[i].nome + " - " + pessoas[i].idade + " anos";
    lista.appendChild(item);
}
}

