var xhr = new XMLHttpRequest();
var documento
const perfilName = document.getElementById("name")
const perfilBio = document.getElementById("bio")
const perfilImage = document.querySelector(".content-image")

xhr.responseType = "json"

xhr.onreadystatechange = function(){

  if(xhr.readyState === 4 && xhr.status === 200){
    documento = xhr.response
    const name = documento.name
    const bio = documento.bio
    const avatar_url = documento.avatar_url


    perfilImage.innerHTML = `
      <img src=${avatar_url} alt="" class="image-perfil">
      <h4 id="name">${name}</h4>
      <span id="bio">${bio}</span>
    `

  }
}

xhr.open("GET", 'https://api.github.com/users/mahflima')

xhr.send()