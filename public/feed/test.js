function postarConteudo(){
    let mensagem = document.getElementById('message').value
    let email = localStorage.getItem("login");
    if(mensagem != null){
        postar(mensagem, email)
    }
    else
        alert("É necessario escrever uma mensagem para postar!")
  }
  
function postar(mensagem, email){
    let http = new XMLHttpRequest()
    let url = 'https://burnhop-backend.herokuapp.com/users/'
    let dados = {
        "texto": mensagem,
        "email": email
    }
    

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
        console.log(http.responseText)
        if(http.readyState == 4 && http.status == 200) {
        alert("Conteúdo postado com sucesso");
        window.location = ('/');
        }
        else{
        alert("Erro ao postar conteudo")
        }
    }

http.send(JSON.stringify(dados));
}