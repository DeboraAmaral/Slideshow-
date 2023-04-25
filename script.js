// Buscando a lista de um array, usando o for

let msg = document.getElementById('msg')

const usuarios = [
    {nome: "Hemione Granger", idade: 18},
    {nome: "Harry Potter", idade: 19},
    {nome: "Rony Weasley", idade: 18},
];

const Users = usuarios.length;

for (let i = 0; i < Users; i++) {
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

// Criando a array de imagens
var imagens = [
    'imagens/1.jpg',
    'imagens/2.jpg',
    'imagens/3.jpg',
];

// Declarando as variáveis
var Index = 0;
var time = 2000;

// Criando uma função para po slideshow
function slideshow(){
    document.getElementById('image').src = imagens[Index];
    Index++;
    if (Index == imagens.length)(Index = 0)
    setTimeout("slideshow()", time);
}

slideshow();