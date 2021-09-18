
  // "https://static.wikia.nocookie.net/aliceinborderland/images/3/31/Alice_in_Borderland_%28Netflix%29_Season_1_Poster_01.jpg",
  // "https://br.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg",
  // "https://images-na.ssl-images-amazon.com/images/I/71Hz2QlWlTL.jpg",
  // "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQh0rS-mjtYpPT9iX0m6LjQOgfbZhpNZi5a-73tdZzygUTvAM2C"

function adicionarSerie() {
  var serieFavorita = document.getElementById("serie").value;
  if(serieFavorita.endsWith(".jpg")) {
      listarSeries(serieFavorita);
  }else{
      console.error("Endereço de filme inválido")
  }
  document.getElementById("serie").value = "";
}

function listarSeries(serie) {
  var elementoserieFavorita = "<img src=" + serie + ">";
  var elementoListaFilmes = document.querySelector("#listaSeries");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoserieFavorita;
}