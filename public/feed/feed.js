
function RecuperarNome(){
  let http = new XMLHttpRequest()
  let url = 'http://localhost:9000/users/'
  http.open('GET', url);
  http.responseType = 'json';
  http.send();
  request.onload = function() {
    var nome = http.response;
    populateHeader(nome);
    showHeroes(superHeroes);
}
}


/*
function Postagem (nome, email, data, senha){
  let http = new XMLHttpRequest()
  let url = 'http://localhost:9000/users/'
  let dados = `name= ${nome}&username=${nome}&email=${email}&data_nasc=${data}&pwd=${senha}`
  http.open('POST', url, true)
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  http.setRequestHeader('Access-Control-Allow-Origin', '*')
  http.onload = function(){
    console.log(http.responseText)
    if(http.readyState == 4 && http.status == 200) {
      alert("Cadastro realizado com sucesso!");
      window.location = ('/');
    }
    else{
      alert("Erro ao cadastrar, por favor verifique seus dados!")
    }
  }
  http.send(dados);
}*/
