const posts = document.getElementById('posts');

var theUrl = "https://burnhop-backend.herokuapp.com/posts/get-all"

var data = $.get(theUrl,function(data){
  //console.log(data);
  Promise.all(data.reverse()).then((results) => {
    const publicacoes = results.map((result) => ({
        name: result.username,
        data: result.dataPost.split("T")[0],
        texto: result.texto
    }));
    //console.log(publicacoes)
    exibirPublicacoes(publicacoes);
});

},'json');


const exibirPublicacoes = (publicacoes) => {
    //console.log(publicacoes);
    const postHTMLString = publicacoes
        .map(
            (post) =>
     `
    <div class="row">
    <div class ="col-md-3">
    </div>

    <div class ="col-md-6">
      <div class="container mt-3 publicacao bg-dark">
        <div class="row">
          <div class="col-md-1 ml-3 mr-1 mt-3 mb-3">
            <img src= "../images/avatar.png" class = "rounded-circle " width="50px">
          </div>
          <div class="col-md-6 mt-3 d-flex align-items-center text-white">
            <ul class="info">
              <li class="nome">${post.name}</li>
              <li class="data">${post.data}</li>
            </ul>

          </div>
          <div class="col-md-5"></div>
        </div> <!--fim da row !-->

        <div class="row mt-1">
          <div class="col-md-1"></div>
          <div class="d-flex justify-content-center col-md-10 mb-4">
            <div class="conteudo text-white">
              <p>${post.texto}</p>
              <!--<img src="../images/feed.jpg" class="img-fluid imagem"alt=""> -->
            </div>

          </div>
        <div class="col-md-1"></div>
        </div><!--fim da row !-->

        </div>

      </div>
    </div>


    `)
    .join('');
    posts.innerHTML = postHTMLString;
};
