var theUrl = "https://burnhop-backend.herokuapp.com/users/posts/get-all"


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    return xmlHttp.responseText;
}


var data = httpGet(theUrl);

console.log(data.content);