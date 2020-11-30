function postarConteudo(){
    let mensagem = document.getElementById('message').value
    //let email = localStorage.getItem("login");
    var email = Cookies.get('login');
    if(mensagem != null){
        console.log(mensagem)
        postar(mensagem, email)
    }
    else
        alert("É necessario escrever uma mensagem para postar!")
  }
  
function postar(mensagem, email){
    let http = new XMLHttpRequest()
    let numeroGrupo = -1
    let url = 'https://burnhop-backend.herokuapp.com/posts/'
    let dados = {
        "groupId": numeroGrupo,
        "texto": mensagem,
        "userEmail": email
    }
    

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
        console.log(http.responseText)
        if(http.readyState == 4 && http.status == 200) {
        alert("Conteúdo postado com sucesso");
        reload_js();
        //document.location.reload(true);
        }
        else{
        alert("Erro ao postar conteudo")
        }
    }

http.send(JSON.stringify(dados));
}


function reload_js() {
    src = 'renderposts.js'
    $('script[src="' + src + '"]').remove();
    $('<script>').attr('src', src).appendTo('head');
}
