var albumBucketName = "burnhopimg";
var bucketRegion = "us-east-1";
var IdentityPoolId = "us-east-1:c25d7b64-d898-4b3b-91cc-730feaf89a00";

AWS.config.update({
  region: bucketRegion
  ,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId 
  })
});


var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
}); 

function uploadImage(){
  var fileupload = document.getElementById("FileUpload1");
  var filePath = document.getElementById("spnFilePath");
  var button = document.getElementById("btnFileUpload");
  button.onclick = function () {
      fileupload.click();
  };
  fileupload.onchange = function () {
      var fileName = fileupload.value.split('\\')[fileupload.value.split('\\').length - 1];
      console.log(fileName);
      filePath.innerHTML = "<b>Selected File: </b>" + fileName;
  };
}


function postImage(){

  var albumName = 'users-img';

  var files = document.getElementById("FileUpload1").files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  var file = files[0];
  //console.log(file)
  var fileName = file.name;
  //console.log(fileName)
  var albumPhotosKey = encodeURIComponent(albumName) + "/";

  var photoKey = albumPhotosKey + fileName;

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: photoKey,
      Body: file,
      ACL: "public-read"
    }
  });

  var promise = upload.promise();

  promise.then(
    function() {
      alert("Successfully uploaded photo.");
      //enviarBack(fileName)
    },
    function(err) {
      return alert("There was an error uploading your photo: ", err.message);
    }
  );

}





var login = Cookies.get('login');

var theUrl = "https://burnhop-backend-dev.herokuapp.com/users/email"

$.get(`https://burnhop-backend-dev.herokuapp.com/users/email/${login}`,function(data){
  console.log(data);
},'json');


