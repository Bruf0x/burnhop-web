
const nome = document.getElementById('nome')
const temp = 'Gato Agiota'


const exibirNome = (temp)=>{

  console.log(temp)
  const htmlNome = `${temp}`
  nome.innerHTML = htmlNome
};


var img = document.createElement("img");
img.src = "https://i.postimg.cc/4Nt7DyJt/unknown-1.png";
img.className = "rounded-circle foto"
const fotoElement = document.getElementById('foto')

const exibirFoto = (foto)=>{

  console.log(foto)
  const htmlFoto = `<img href= ${foto}>`
  fotoElement.appendChild(img)
};

exibirFoto(foto);
exibirNome(temp);
