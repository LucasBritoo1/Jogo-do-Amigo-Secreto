  // 1. Declarar o array que armazenará os nomes
    let amigos = [];

    // 2. Função para adicionar amigo
    function adicionarAmigo() {
      // Capturar valor do input
      let input = document.getElementById("amigo");
      let nome = input.value;

      // Validar entrada
      if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
      }

      // Adicionar ao array
      amigos.push(nome);

      // Limpar campo de entrada
      input.value = "";

      // Atualizar lista na tela
      refreshList();
    }

    // 3. Função para atualizar a lista de amigos
    function refreshList() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = ""; // Limpa a lista existente

      // Percorrer o array e criar elementos <li>
      for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
      }
    }

    // 4. Sorteia amigo e limpa lista
    function sortearAmigo() {
      let lista = document.getElementById("listaAmigos");

      if (amigos.length === 0) {
        lista.innerHTML = "<li><strong>Nenhum amigo para sortear</strong>.</li>";
        return;
      }

      // Gera índice aleatório e seleciona o nome
      let sorteioAleatorio = Math.floor(Math.random() * amigos.length);
      let nomeSorteado = amigos[sorteioAleatorio];

      // Limpa o array
      amigos = [];


      // Exibe apenas o nome sorteado na lista
     lista.innerHTML = `<li><strong style="color: green;">O amigo secreto sorteado é: ${nomeSorteado}</strong></li>`;

    }