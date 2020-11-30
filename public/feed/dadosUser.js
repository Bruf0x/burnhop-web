
var login = Cookies.get('login');


function exibirNome(userName){
  const htmlNome = `${userName}`
  nome.innerHTML = htmlNome
};

$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
  //console.log(data);
  exibirNome(data.name);
},'json');

$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
    Cookies.set('id', data.id,{ domain: 'https://burnhop.herokuapp.com' });

},'json');

$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
    Cookies.set('image', data.imagePath,{ path: '', domain: 'https://burnhop.herokuapp.com' });

},'json');



var img = document.createElement("img");
img.src = Cookies.get('image');
img.className = "rounded-circle foto"
const fotoElement = document.getElementById('foto')

const exibirFoto = (foto)=>{

  //console.log(foto)
  const htmlFoto = `<img href= ${foto}>`
  fotoElement.appendChild(img)
};

exibirFoto(foto);
