function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // abaixo exeplo de como pode ser fei menos resumido:
  // if (html.classList.contains("ligth")) {
  //  html.classList.remove("ligth")
  // } //else {
  // html.classList.add("ligth")
  //}

  //Pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem ligth mode
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
