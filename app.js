let listaDeNomes = []

// adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else {
        // adiciona o nome ao array
        listaDeNomes.push(nome);

        // atualiza a lista
        atualizarListaAmigos();

        // limpa o campo de entrada
        limparCampo();
    }
}

// atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaDeNomes.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// sortear um amigo secreto
function sortearAmigo() {
    if (listaDeNomes.length == 0) {
        alert('A lista de nomes está vazia.');
        return;
    }

    // escolha de um índice aleatório no array
    let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);

    // atribui o nome correspondente ao índice
    let nomeSorteado = listaDeNomes[indiceSorteado];

    // exibe o resultado com o nome escolhido
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O Amigo sorteado foi: <strong>${nomeSorteado}</strong></li>`;
}

// exibir o resultado na página
function exibirResultado(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
}

function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}
