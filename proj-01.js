
   function registrarIdade() {
    const inputNome = document.getElementById("nome");
    const inputIdade = document.getElementById("idade");
    const tabelaBody = document.querySelector("#tabelaRegistros tbody");

    const nome = inputNome.value.trim();
    const idadeTexto = inputIdade.value.trim();

    // 1. Validação de campos vazios
    if (nome === "" || idadeTexto === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // 2. NOVA VALIDAÇÃO: Impede números ou símbolos no nome
    // Aceita apenas letras (incluindo acentos) e espaços
    const apenasLetras = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!apenasLetras.test(nome)) {
        alert("O campo Nome deve conter apenas letras.");
        return;
    }

    const idade = parseInt(idadeTexto, 10);

    // 3. Validação do número da idade
    if (isNaN(idade) || idade < 0 || idade > 130) {
        alert("Por favor, insira uma idade válida (entre 0 e 130).");
        return;
    }

    // Regra de maioridade
    const ehMaior = idade >= 18;
    const statusText = ehMaior ? "Maior de idade" : "Menor de idade";
    const classeEstilo = ehMaior ? "status-maior" : "status-menor";

    // Geração da linha na tabela
    const novaLinha = document.createElement("tr");
    novaLinha.className = classeEstilo;

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${idade} anos</td>
        <td><strong>${statusText}</strong></td>
    `;

    tabelaBody.appendChild(novaLinha);

    // Limpeza de campos
    inputNome.value = "";
    inputIdade.value = "";
    inputNome.focus();
}