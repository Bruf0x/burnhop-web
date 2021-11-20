function editarPost(){

  $(document).on('click', '[data-tracker]', function() {
  var idPost = $(this).attr('data-tracker');
  console.log(idPost)
  localStorage.setItem('idPost',idPost);

});
}


function editarConteudoPost(){
  let http = new XMLHttpRequest()
  let idPost = localStorage.getItem('idPost');
  let conteudo = document.getElementById('conteudoPost').value
  let url = `https://burnhop-backend.herokuapp.com/posts/update/${idPost}`

  let dados = {
    "content": conteudo
    }

    http.open('PUT', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
      console.log(http.responseText)
      if(http.readyState == 4 && http.status == 200) {
        console.log("sucesso!");
        alert("Post atualizado com sucesso")
        $(`#${idPost}`).html(conteudo)
      }
      else if(http.status == 400) {
        alert("Conteúdo não pode ser nulo! Delete o post caso precise!")
      }
      else{
        console.log("Erro!")
      }
    }
    http.send(JSON.stringify(dados));
}


function deletarMensagem(){
  let http = new XMLHttpRequest()
  let idPost = localStorage.getItem('idPost');
  let conteudo = document.getElementById('conteudoPost').value
  let url = `https://burnhop-backend.herokuapp.com/posts/delete/${idPost}`

    http.open('DELETE', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
      console.log(http.responseText)
      if(http.readyState == 4 && http.status == 200) {
        console.log("sucesso!");
        alert("Deletado com sucesso!")
        location.reload()
      }
      else if(http.status == 400) {
        alert("Conteúdo não pode ser nulo! Delete o post caso precise!")
      }
      else{
        console.log("Erro!")
      }
    }
    http.send();

}
