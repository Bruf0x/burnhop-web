function postarConteudo(){
    let mensagem = document.getElementById('message').value
    var email = Cookies.get('login');
    if(mensagem != null){
        console.log(mensagem)
        postar(mensagem, email)
    }
    else
        //alert("É necessario escrever uma mensagem para postar!")
  }
  
function postar(mensagem, email){
    let http = new XMLHttpRequest()
    var idGrupo = localStorage.getItem('idGrupo')
    let url = 'https://burnhop-backend.herokuapp.com/posts/'
    let dados = {
        "groupId": idGrupo,
        "texto": mensagem,
        "userEmail": email
    }
    

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
        console.log(http.responseText)
        if(http.readyState == 4 && http.status == 200) {
        //alert("Conteúdo postado com sucesso");
        document.location.reload(true);
        }
        else{
        //alert("Erro ao postar conteudo")
        }
    }

http.send(JSON.stringify(dados));
}
