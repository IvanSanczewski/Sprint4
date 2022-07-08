// const movies = require("./data");

const films = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1994,
    // year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    // year: 1974,
    year: 1994,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    // year: 2008,
    year: 1994,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    // year: 1957,
    year: 1994,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    // year: 1993,
    year: 1994,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    // year: 2003,
    year: 1994,
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.9
  },
  {
    title: 'Il buono, il brutto, il cattivo',
    // year: 1966,
    year: 1994,
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western'],
    score: 8.9
  },
  {
    title: 'Fight Club',
    year: 1999,
    director: 'David Fincher',
    duration: '2h 19min',
    genre: ['Drama'],
    score: 8.8
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
    duration: '2h 58min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.8
  },
  {
    title: 'Forrest Gump',
    year: 1994,
    director: 'Robert Zemeckis',
    duration: '2h 22min',
    genre: ['Comedy', 'Drama', 'Romance'],
    score: 8.8
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    director: 'Irvin Kershner',
    duration: '2h 4min',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    score: 8.8
  },
  {
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    duration: '2h 28min',
    genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
    score: 8.8
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
    director: 'Peter Jackson',
    duration: '2h 59min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.7
  },
  {
    title: 'One Flew Over the Cuckoo"s Nest',
    year: 1975,
    director: 'Milos Forman',
    duration: '2h 13min',
    genre: ['Drama'],
    score: 8.7
  },
  {
    title: 'Goodfellas',
    year: 1990,
    director: 'Martin Scorsese',
    duration: '2h 26min',
    genre: ['Crime', 'Drama'],
    score: 8.7
  },
  {
    title: 'The Matrix',
    year: 1999,
    director: 'Lana Wachowski',
    duration: '2h 16min',
    genre: ['Action', 'Sci-Fi'],
    score: 8.7
  },
  {
    title: 'Shichinin no samurai',
    year: 1954,
    director: 'Akira Kurosawa',
    duration: '3h 27min',
    genre: ['Adventure', 'Drama'],
    score: 8.7
  },
  {
    title: 'Star Wars',
    year: 1977,
    director: 'George Lucas',
    duration: '2h 1min',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    score: 8.7
  },
  {
    title: 'Cidade de Deus',
    year: 2002,
    director: 'Fernando Meirelles',
    duration: '2h 10min',
    genre: ['Crime', 'Drama'],
    score: 8.7
  },
  {
    title: 'Se7en',
    year: 1995,
    director: 'David Fincher',
    duration: '2h 7min',
    genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    score: 8.6
  }


];


const allDirectors = films.map(item => item.director);
const directorsName = films.filter(item => item.director.includes('e'));

const directorsScores = films.filter(item => item.director.includes('Francis Ford Coppola'));
const scores = directorsScores.map(item => item.score);
const totalScore = scores.reduce((accumulatedFilmScores, actualFilmScore) => accumulatedFilmScores + actualFilmScore , 0);
let finalScore = totalScore / scores.length;

// Excercise 4
// const abcMovies = films.sort(function(a, z) {
//   if (a.title.toLowerCase() < z.title.toLowerCase()) return -1;
//   if (a.title.toLowerCase() > z.title.toLowerCase()) return 1;
//   return 0;
// });
// abcMovies.splice(20)
  
  
// Exercise 5: Order by year, ascending
// abcMovies;
const moviesByYear = films.sort(function(a,z) {
  return a.year - z.year;
}); 
  
  
// Exercise 6: Calculate the average of the movies in a category
const allGenreFilms = films.filter(item => item.genre.includes('Drama'));
const genreScores = allGenreFilms.map(item => item.score);

// en la misma línea pasamos el método .map al array resultado de pasarle el método .filter con un .include al array originario
// const xxx = films.filter(item => item.genre.includes('Drama')).map(item => item.score);
// console.log(typeof xxx, xxx );

const genreTotalScore = genreScores.reduce((accumulatedFilmScores, actualFilmScore) => accumulatedFilmScores + actualFilmScore , 0);
let genreAverageSocre = (genreTotalScore / genreScores.length).toFixed(2);




// console.log(typeof films, films);
console.log(typeof allDirectors, allDirectors);
console.log(typeof directorsName, directorsName);
console.log(typeof directorsScores, directorsScores);
console.log(typeof scores, scores);
console.log(typeof totalScore, totalScore);
console.log(typeof finalScore, finalScore);
// console.log(typeof abcMovies, abcMovies);
console.log(typeof moviesByYear, moviesByYear);


console.log(typeof allGenreFilms, allGenreFilms);
console.log(typeof genreScores, genreScores);
console.log(typeof genreTotalScore, genreTotalScore);
console.log(typeof genreAverageSocre, genreAverageSocre);

// Exercise 1: Get the array of all directors.
function getAllDirectors(films) {
  let result = films.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = films.filter((item) => {item.director.includes('Ford')});
  console.log("EXERCICE 2 ->", result);
  return result;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = films.filter((item) => {item.director.includes('Ford')});
  let directorMoviesScores = directorMovies.map(item => item.score);
  let directorMoviesScoresSum = directorMoviesScores.reduce((accumulatedScore, actualScore) => accumulatedScore + actualScore, 0);
  let result = directorMoviesScoresSum / directorMoviesScores.length;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
