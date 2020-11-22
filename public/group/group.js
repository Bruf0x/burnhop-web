var id = Cookies.get('id')
console.log(id)

function exibirNomeGrupo(groupName){
  const htmlNome = `${groupName}`
  nome.innerHTML = htmlNome
}

$.get(`https://burnhop-backend.herokuapp.com/groups/id/${id}`,function(data){
  exibirNomeGrupo(data.name);
  console.log(data.name);
},'json');


/*A função editar só pode aparecer para o user admin do grupo*/
if(id == id admin_grupo){
  let editarHTMLString = "<span><button type='button' data-toggle='modal' data-target='#grupos' class='btn btn-dark'name='button'>Editar Grupo</button></span>"
  editarGrupo.innerHTML = editarHTMLString
}
