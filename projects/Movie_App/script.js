const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("movies-container");
const clear = document.getElementById("clear");

const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  showMovies(data.results);
};

const data = getMovies(API);

const showMovies = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    var { title, backdrop_path, vote_average, overview } = movie;
    const m = document.createElement("div");
    m.classList.add("movie");

    if (backdrop_path === null) {
      backdrop_path = "./no_pic.png";
    } else {
      backdrop_path = IMG_PATH + backdrop_path;
    }
    m.innerHTML = `
    <img src=${backdrop_path} alt="img" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class=${getRatingClass(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `;

    main.appendChild(m);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchWords = search.value;

  if (searchWords && searchWords !== "") {
    getMovies(SEARCH_URL + search.value + "&page=1&include_adult=false");
    search.value = "";
  } else {
    window.location.reload();
  }
});

const getRatingClass = (rate) => {
  if (rate >= 8.0) return "green";
  else if (rate > 5.0) return "orange";
  else return "red";
};

clear.addEventListener("click", () => {
  getMovies(API);
});
