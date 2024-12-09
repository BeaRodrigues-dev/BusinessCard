function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* toogle mesma logicado if/else abaixo para substituir o fundo */

  // pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
   if (html.classList.contains("light")) {
    //se light mode, add imagem light
    img.setAttribute("src", "./assets/avatar-2.png")
  } else {
    // sem light mode, manter a normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
