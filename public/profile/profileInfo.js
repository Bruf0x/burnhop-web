var login = Cookies.get('login');

function exibirNome(userName){
  const htmlNome = `${userName}`
  nome.innerHTML = htmlNome
};

function exibirEmail(userEmail){
  const htmlEmail = `${userEmail}`
  email.innerHTML = htmlEmail
};

function exibirData(userData){
  const htmlData = `${userData}`
  data_nasc.innerHTML = htmlData
};


$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
  exibirNome(data.name);
  exibirEmail(data.login.email);
  exibirData(data.data_nasc);
  console.log(data.login.email);
  console.log(data.name);
  console.log(data.data_nasc);
},'json');

/*Logout*/
function logout(){
    window.location = "/"
}


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