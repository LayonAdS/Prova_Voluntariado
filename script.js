document.getElementById('formCadastro').addEventListener('submit', (e) => {
    e.preventDefault();

    const necessidade = {
        instituicao: document.getElementById('instituicao').value,
        tipoAjuda: document.getElementById('tipoAjuda').value,
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        contato: document.getElementById('contato').value
        // pegando os dados de todas as variaveis que estão no formCadastro usando a ID

    };
    const lista = JSON.parse(localStorage.getItem('necessidades')) || [];
    // Tenta obter a lista de necessidades armazenadas no localStorage.
    // Se não existir ainda, usa um array vazio como valor inicial.

    lista.push(necessidade); // adiciona o objeto necessidade 

    localStorage.setItem('necessidades', JSON.stringify(lista)); // salva novamente a lista atualizada

    alert('Necessidade cadastrada com sucesso!!!'); // codigo alert para verificar se tudo esta correto
    document.getElementById('formCadastro').reset(); // .reset tem como objetivo limpar todos os campos do cadastro

}) // adicionando um document get element para pegar o id formcadastro
// e usando um add event para adicionar uma evento quanto um botão com tipo SUBMIT for clicado


document.getElementById('cep').addEventListener('blur', async () => {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // pegando o valor da variavel com o id cep e removendo todos os caracteres que não são digitos   

    if (cep.length === 8) { // verificando se o campo cep tem 8 digitos
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // esta buncando os dados do cep na api viacep
        const data = await response.json(); // esta colacando os dados do cep na variavel data

        // verificando se a varialvel data não deu erro
        if (!data.erro) {
            // passando todos os dados da variavel data para os elementos 
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        } else {
            alert('CEP não encontrado!!!');
        }

    }
});

function renderizarLista(filtro = '', tipo = ''){
    const lista = JSON.parse(localStorage.getItem('necessidades')) || [];
    const container = document.getElementById('listaNecessidades');
    container.innerHTML = '';

    const filtrado = lista.filter(item => 
        (item.titulo.toLowerCase().includes(filtro.toLocaleLowerCase()) || 
        item.descricao.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())) && 
        (tipo === '' || item.tipoAjuda === tipo)
        // filtra os item com o titulo ou descrição desejada pelo usuario
    );
        // percorre cada objeto do array filtrado 
    filtrado.forEach(item => {
        const card = document.createElement('div'); // cria um div no html
        card.classList.add('card');
        
        card.innerHTML =  `
        <h3>${item.titulo}</h3>
        <p><strong>Instituição:</strong> ${item.instituicao}</p>
        <p><strong>Tipo:</strong> ${item.tipoAjuda}</p>
        <p>${item.descricao}</p>
        <p><strong>Contato:</strong> ${item.contato}</p>
        <p><strong>Endereço:</strong> ${item.rua}, ${item.bairro} - ${item.cidade}/${item.estado}</p>
      `;
      //devine o conteudo do card html
      container.appendChild(card);
        //adiciona o card criado 
    });

    

}