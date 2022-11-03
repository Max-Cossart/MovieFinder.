// https://www.omdbapi.com/?i=tt3896198&apikey=7840b18e
// key=7840b18e

const movieCardEl = document.querySelector(".movie__cards");
const movieCard = document.getElementById("movie__card");
const Input = document.body.querySelector(".movies__search--bar");
const searchResults = document.querySelector (".search");
let title;

function searchInput(event) {
  title = document.body.querySelector(".movies__search--bar").value;
  if (event.keyCode == 13) {
    searchBtn()
  }
}

function searchBtn(event) {
  let searhResultsHTML = `<h2 class="search">Search Results for : <span class="color">   ${title} </span> </h2>`;
  searchResults.innerHTML = searhResultsHTML;
  movieSearch(title);
}



async function movieSearch(title) {
  movieCard.classList += " show__loading"
  movieCard.classList.remove("show__movies")

  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=7840b18e&s=${title}`
  );
  moviesData = await movies.json();
  const films = moviesData.Search.slice(0, 8);
  movieCardEl.innerHTML = films.map((movie) => moviesHTML(movie)).join("");

  setTimeout(() => { 
    movieCard.classList += " show__movies"
    movieCard.classList.remove("show__loading") 
  }, 1000);
}


function moviesHTML(movie) {
  return `<div class="movie__card">
  <figure class="poster__wrapper">
    <img
      class="poster__img"
      src="${movie.Poster}"
      alt=""
    />
  </figure>
  <div class="movie__description">
    <h3 class="movie__description--title">
      ${movie.Title}
    </h3>
    <h4 class="movie__description--year">Year Released: ${movie.Year}</h4>
  </div>
  </div>`;
}

