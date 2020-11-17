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


$.get(`https://burnhop-backend.herokuapp.com/users/${login}`,function(data){
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
