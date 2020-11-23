var login = Cookies.get('login');

function criarGrupo(){
  let nomeGrupo = document.getElementById('nomeGrupo').value
  let id = Cookies.get('id')

  let http = new XMLHttpRequest()
  let url = `https://burnhop-backend.herokuapp.com/groups`

  let dados = {
      "admin": id,
      "name": nomeGrupo
    }

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
      console.log(http.responseText)
      if(http.readyState == 4 && http.status == 200) {
        console.log("sucesso!");
        window.location = "../group/group.html"
      }
      else if(http.status == 409) {
        alert("Já existe um grupo com este nome! Tente outro")
      }
      else{
        console.log("Erro!")
      }
    }
    http.send(JSON.stringify(dados));

}