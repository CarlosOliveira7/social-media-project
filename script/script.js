function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector('#profile img')
   html.classList.toggle("light")
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/

  if(html.classList.contains('light')){
    img.setAttribute('src', "./assests/avatar-light.png")
  } else {
    img.setAttribute('src', "./assests/lucky2.png")
  }
  

  //selecionar a tag image 
  //substituir a imagem 
  //se tiver light mode, escolher a imagem light
  //se tiver dark mode, escolher dark mode
}