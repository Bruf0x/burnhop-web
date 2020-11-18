
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
    Cookies.set('id', data.id,{ path: '', domain: 'localhost' });

},'json');

$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
    Cookies.set('image', data.image_path,{ path: '', domain: 'localhost' });

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
