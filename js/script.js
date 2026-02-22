const numberOfFilms = +prompt("How many films have you watched?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const a = prompt("One of the last watched films?", ""),
  b = prompt("Which rating will you give?", ""),
  c = prompt("One of the last watched films?", ""),
  d = prompt("Which rating will you give?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

