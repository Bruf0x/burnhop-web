var login = Cookies.get('login');

function criarGrupo(){
  let nomeGrupo = document.getElementById('nomeGrupo').value
  let descricaoGrupo = document.getElementById('descriacaoNovoGrupo').value
  localStorage.setItem("nomeGrupo",nomeGrupo)
  let id = Cookies.get('id')

  let http = new XMLHttpRequest()
  let url = `https://burnhop-backend.herokuapp.com/groups`

  let dados = {
      "admin": id,
      "description": descricaoGrupo,
      "name": nomeGrupo
    }

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
      console.log(http.responseText)
      if(http.readyState == 4 && http.status == 200 && descricaoGrupo != null) {
        console.log("sucesso!");
        setTimeout(1000)
        window.location = "../group/group.html"
      }
      else if(http.status == 409) {
        //alert("Já existe um grupo com este nome! Tente outro")
      }
      else if(descricaoGrupo != null){
        //alert("voce precisa preencher o nome do grupo e a sua descrição!")
      }
      else{
        console.log("Erro!")
      }
    }
    http.send(JSON.stringify(dados));

}

setTimeout(function(){
    console.log("Ready")
}, 1000);
