//Meus Problemas Psiquiátricos...
let listaElemento = document.getElementById("lista");
let botao = document.getElementById("botao");
let botaoCor = document.getElementById("botao02");
let botaoAnalisar = document.getElementById("adicionar");


//Registro de Doenças Mentais do Chico Ivo
let listaPessoas = [];

function adicionarPessoa() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    
    if (nome === "" || idade === 0) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (idade >= 18) {
        alert("Maior de Idade");
    } else {
        alert("Menor de idade");
    }

    listaPessoas.push({ nome: nome, idade: idade });
    listaPessoas.sort((a, b) => a.nome.localeCompare(b.nome));

    listaElemento.innerHTML = "";

    listaPessoas.forEach(pessoa => {
        let item = document.createElement("li");
        item.innerText = `${pessoa.nome} - ${pessoa.idade} anos`;
        listaElemento.appendChild(item);
    });
}

function analisar() {
    let soma = 0;
    let maiores = 0;
    
    //Média: Nessa função, ele soma todas as notas e divide pela quantidade de pessoas registradas. Ex: Se adicionar duas pessoas, uma de 42 e outro de 12, soma dando 52 e depois dividi pela quantidade qje é 2, o resultado será 27.
    for (let i = 0; i < listaPessoas.length; i++) {
        soma += listaPessoas[i].idade;
        if (listaPessoas[i].idade >= 18) {
            maiores++;
        }
    }
    let media = listaPessoas.length > 0 ? soma / listaPessoas.length : 0;
    
    alert("Média de idade: " + media);
    
    //Quantidade de Maiores: Nessa função, ele conta quantas pessoas possuem 18 anos ou mais. Ex: Se adicionar duas pessoas, uma de 42 e outra de 20, o resultado será 2 pessoas maiores de idade.
    alert("A quantidade de pessoas maiores de idade é: " + maiores);
    
}

//Botões 🆗️

botao.addEventListener("click", adicionarPessoa);
botaoAnalisar.addEventListener("click", analisar);

botaoCor.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "yellow") {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
});
