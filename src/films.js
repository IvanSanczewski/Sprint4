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
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
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
    year: 2003,
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.9
  },
  {
    title: 'Il buono, il brutto, il cattivo',
    year: 1966,
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western'],
    score: 8.9
  }
];


const allDirectors = films.map(item => item.director);
const directorsName = films.filter(item => item.director.includes('e'));

const directorsScores = films.filter(item => item.director.includes('Francis Ford Coppola'));
const scores = directorsScores.map(item => item.score);
const totalScore = scores.reduce((accumulatedFilmScores, actualFilmScore) => accumulatedFilmScores + actualFilmScore , 0);
let finalScore = totalScore / scores.length;


// console.log(typeof films, films);
console.log(typeof allDirectors, allDirectors);
console.log(typeof directorsName, directorsName);
console.log(typeof directorsScores, directorsScores);
console.log(typeof scores, scores);
console.log(typeof totalScore, totalScore);
console.log(typeof finalScore, finalScore);

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
