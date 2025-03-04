let nome
let listaAmigos = [];
let nomeSorteado

function adicionarAmigo() {
  nome = document.getElementById('amigo').value;
  listaAmigos.push(nome);
  document.getElementById('amigo').value = '';
  mostrarListaAmisgos();
}

function mostrarListaAmisgos() {
  let lista = document.getElementById('listaAmigos');
  let novoItem = document.createElement('li');
  novoItem.textContent = nome;
  lista.appendChild(novoItem);
}

function sortearAmigo() {
  let indice = Math.floor(Math.random() * listaAmigos.length);
  nomeSorteado = listaAmigos[indice];
  if (listaAmigos.length > 1) {
    mostrarAmigoSorteado();
  } else {
    alert('Adicione amigos para sortear');
  }
}

function mostrarAmigoSorteado() {
  let resultado = document.getElementById('resultado');
  let novoResultado = document.createElement('li');
  novoResultado.textContent = `O seu amigo secreto é: ${nomeSorteado}`;
  resultado.appendChild(novoResultado);
  removerLiDaLista('listaAmigos');
}

function removerLiDaLista(idLista) {
  let listaEscolhida = document.getElementById(idLista);
  while (listaEscolhida.firstChild) {
    listaEscolhida.removeChild(listaEscolhida.firstChild);
  }
}
