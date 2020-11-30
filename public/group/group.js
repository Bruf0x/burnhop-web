var id = Cookies.get('id')
var nomeGrupo = localStorage.getItem("nomeGrupo")
console.log(id)

function exibirNomeGrupo(nomeGrupo){
  const htmlNome = `${nomeGrupo}`
  nome.innerHTML = htmlNome

}

function exibirDescricao(descricao){
  const htmlDescricao = `${descricao}`
  descricaoGrupo.innerHTML = htmlDescricao

}



$.get(`https://burnhop-backend.herokuapp.com/groups/name/${nomeGrupo}`,function(data){
  exibirNomeGrupo(data.name);
  exibirDescricao(data.description)
  console.log(data.name);
  console.log(data.description)
  let idAdminGrupo = data.admin.id
  localStorage.setItem("idGrupo",data.id)
  localStorage.setItem("idAdminGrupo", idAdminGrupo);
},'json');

setTimeout(function(){
    console.log("Ready")
}, 1000);

/*Renderizar o botão de editar grupo*/
if(id == localStorage.getItem("idAdminGrupo")){
  var editarHTMLString = "<span><button type='button' data-toggle='modal' data-target='#grupos' class='btn btn-dark'name='button'>Editar Grupo</button></span>"
  editarGrupo.innerHTML = editarHTMLString
}


/*Função deletar grupo*/
function deletarGrupo(){
  let http = new XMLHttpRequest()
  let idGrupo = localStorage.getItem('idGrupo');
  let url = `https://burnhop-backend.herokuapp.com/groups/${idGrupo}`

    http.open('DELETE', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
      console.log(http.responseText)
      if(http.readyState == 4 && http.status == 200) {
        console.log("sucesso!");
        alert("Grupo deletado com sucesso!")
        setTimeout(1000)
        window.location = "../feed/feed.html"
      }
      else{
        console.log("Erro!")
      }
    }
    http.send();
}


/*Função editar nome Grupo*/
function editarNomeGrupo(){
  let http = new XMLHttpRequest()
  let idGrupo = localStorage.getItem('idGrupo');
  let conteudo = document.getElementById('nomeGrupo').value
  let descricao = document.getElementById('descricao').value
  let url = `https://burnhop-backend.herokuapp.com//groups/update/${idGrupo}`

  if(conteudo == undefined){
    conteudo = ""
  }
  if(descricao == undefined){
    descricao = ""
  }
  let dados = {
    "description": descricao,
    "name": conteudo
    }

    http.open('PUT', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
      console.log(http.responseText)
      if(http.readyState == 4 && http.status == 200) {
        console.log("sucesso!");
        alert("grupo atualizado com sucesso")
        if(conteudo != ""){localStorage.setItem('nomeGrupo', conteudo)}
        location.reload()
      }
      else if(http.status == 400) {
        alert("Conteúdo não pode ser nulo! Delete o grupo caso precise!")
      }
      else{
        console.log("Erro!")
      }
    }
    http.send(JSON.stringify(dados));
}
