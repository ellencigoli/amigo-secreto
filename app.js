let amigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const inputAmigo = document.getElementById("amigo"); // Pega o elemento pelo ID
    const nomeAmigo = inputAmigo.value.trim(); // Obtém o valor e remove espaços extras

    // Verificar se o campo não está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome!");
        return;
    }

     // Verificar se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada após adicionar
    inputAmigo.value = "";

    // Atualizar a lista exibida no HTML
    atualizarLista();
}

function atualizarLista () {
    const listaAmigos = document.getElementById("listaAmigos"); // Pega o elemento da lista
    listaAmigos.innerHTML = ""; // Limpar a lista existente 

    // Percorrer o array e criar elementos de lista para cada amigo
    for (let amigo of amigos) {
        const novoItem = document.createElement("li");
        novoItem.textContent = amigo; // Define o texto do item
        listaAmigos.appendChild(novoItem); // Adiciona o item à lista
    }
}

function sortearAmigo() {
    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Por favor, adicione nomes à lista!");
        return;
    }

    // Realizar o sorteio
    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Escolhe um índice aleatório
    const amigoSorteado = amigos[indiceSorteado]; // Pega o nome do amigo sorteado

    // Limpar a lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Remove todos os nomes da lista

    // Atualizar o resultado no HTML
    const resultadoSorteio = document.getElementById("resultadoSorteio"); // Seleciona o elemento do resultado
    resultadoSorteio.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;
}