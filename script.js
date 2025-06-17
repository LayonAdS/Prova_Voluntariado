document.getElementById('formCadastro').addEventListener('submit', (e)=>{
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

  localStorage.setItem('necessidades',  JSON.stringify(lista)); // salva novamente a lista atualizada
  
  alert('Necessidade cadastrada com sucesso!!!'); // codigo alert para verificar se tudo esta correto
  document.getElementById('formCadastro').reset(); // .reset tem como objetivo limpar todos os campos do cadastro

}) // adicionando um document get element para pegar o id formcadastro
// e usando um add event para adicionar uma evento quanto um botão com tipo SUBMIT for clicado