/*Data Tracker*/
function recoverGroupId(){
  $(document).on('click', '[data-tracker]', function() {
  var idGrupo = $(this).attr('data-tracker');
  localStorage.setItem('idGrupo',idGrupo);
  setNameGroup(idGrupo)
});
  connectUserWithGroup()
}

function setNameGroup(idGrupo){
  var xmlhttp = new XMLHttpRequest();
  var url = `https://burnhop-backend.herokuapp.com/groups/id/${idGrupo}`;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        localStorage.setItem("nomeGrupo", myArr.name)
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function connectUserWithGroup(){

  let userId = Cookies.get('id')
  let http = new XMLHttpRequest()
  let url = `https://burnhop-backend.herokuapp.com/groups/user`
  let idGroup = localStorage.getItem('idGrupo');
  let dados = {
    "groupId": idGroup,
    "userId": userId
    }

    http.open('POST', url, true)
    http.setRequestHeader('Content-type', 'application/json')
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.onload = function(){
      console.log(http.responseText)
      if(http.readyState == 4 && http.status == 200) {
        console.log("sucesso!");
        setTimeout(1000)
        window.location = "../group/group.html"
      }
      else if(http.status == 409) {
        setTimeout(1000)
        window.location = "../group/group.html"
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


const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.admin.name.toLowerCase().includes(searchString) ||
            character.description.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://burnhop-backend.herokuapp.com/groups/get-all');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <button onClick ="recoverGroupId()" class="btn btn-success" data-tracker="${character.id}">Entrar</button>
                <h8 class ="font-italic mt-2">ADM: ${character.admin.name}</h8>
                <p class ="mt-2">Descrição: ${character.description}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
