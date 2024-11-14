import MovieApiService from './js/movies-service';

const list = document.querySelector('.movies__list');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');

prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

const movieApiService = new MovieApiService();
loadMovies();

function loadMovies() {
  movieApiService
    .fetchMovies()
    .then(movies => {
      renderMovies(movies.slice(0, 8));
    })
    .catch(error => console.error(error));
}

function renderMovies(movies) {
  const markUp = movies
    .map(
      movie => `
    <li class="movie-item">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" >
          <h2>${movie.title}</h2>
          <p>Original language: ${movie.original_language}</p>
          <p>Release date: ${movie.release_date}</p>
          <p>Origin country: ${movie.origin_country}</p>
          <p>Rating: ${movie.vote_average}</p>
        </li>
    `
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markUp);
}

function onPrevBtnClick() {
  movieApiService.decrementPage();
  clearList();
  loadMovies();
  toggleBtn();
}

function onNextBtnClick() {
  movieApiService.incrementPage();
  loadMovies();
  toggleBtn();
}

function clearList() {
  list.innerHTML = '';
}

function toggleBtn() {
  prevBtn.disabled = movieApiService.page <= 1;
}
