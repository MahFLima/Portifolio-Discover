var repositorio = new XMLHttpRequest();
var documento

repositorio.onreadystatechange = function(){

  if(repositorio.readyState === 4 && repositorio.status === 200){
    documento = repositorio.response
    console.log(documento)
  }
}

repositorio.open("GET", 'https://api.github.com/users/mahflima/repos')

repositorio.send()