function postarInfo(fileName){
    
    var nome = document.getElementById('nomealt').value
    var data = document.getElementById('dataalt').value
    var email = document.getElementById('emailalt').value
    console.log(nome,data,email)

    var id = Cookies.get('id')
    //var id = 21
    let http = new XMLHttpRequest()
    let url = `https://burnhop-backend.herokuapp.com/users/update/${id}`
  
    let dados = {
        "dataNasc": data.split("T")[0],
        "email": email,
        "name": nome,
        "username": nome
      }
    
      http.open('PUT', url, true)
      http.setRequestHeader('Content-type', 'application/json')
      http.setRequestHeader('Access-Control-Allow-Origin', '*')
      http.onload = function(){
        console.log(http.responseText)
        if(http.readyState == 4 && http.status == 200) {
          console.log("sucesso!");
        }
        else{
          console.log("Erro!")
        }
      }
      
      http.send(JSON.stringify(dados));
}

$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
    Cookies.set('id', data.id,{ path: '', domain: 'localhost' });

},'json');
