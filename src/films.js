// const movies = require("./data");

// copia del array film con 22 películas
const films2 = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: 'Crime',
    // genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: 'Crime',
    // genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: 'Drama',
    // genre: ['Crime', 'Drama'],
    score: 9
  }
];

const films3 = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    // genre: 'Crime',
    genre: ['Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    // genre: 'Crime',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    // genre: 'Crime',
    genre: ['Crime', 'Drama'],
    score: ''
  }
];

// console.log (films3);
// console.log (films3[1].genre[0]);

// const films = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     score: 9.2
//   },


//   {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9
//   },
//   {
//     title: 'The Dark Knight',
//     year: 2008,
//     director: 'Christopher Nolan',
//     duration: '2h 32min',
//     genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//     score: 9
//   },
//   {
//     title: '12 Angry Men',
//     // year: 1957,
//     year: 1994,
//     director: 'Sidney Lumet',
//     duration: '1h 36min',
//     genre: ['Crime', 'Drama'],
//     score: 8.9
//   },
//   {
//     title: 'Schindler"s List',
//     // year: 1993,
//     year: 1994,
//     director: 'Steven Spielberg',
//     duration: '3h 15min',
//     genre: ['Biography', 'Drama', 'History'],
//     score: 8.9
//   },
//   {
//     title: 'Pulp Fiction',
//     year: 1994,
//     director: 'Quentin Tarantino',
//     duration: '2h 34min',
//     genre: ['Crime', 'Drama'],
//     score: 8.9
//   },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     // year: 2003,
//     year: 1994,
//     director: 'Peter Jackson',
//     duration: '3h 21min',
//     genre: ['Adventure', 'Drama', 'Fantasy'],
//     score: 8.9
//   },
//   {
//     title: 'Il buono, il brutto, il cattivo',
//     // year: 1966,
//     year: 1994,
//     director: 'Sergio Leone',
//     duration: '3h 2min',
//     genre: ['Western'],
//     score: 8.9
//   },
//   {
//     title: 'Fight Club',
//     year: 1999,
//     director: 'David Fincher',
//     duration: '2h 19min',
//     genre: ['Drama'],
//     score: 8.8
//   },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//     director: 'Peter Jackson',
//     duration: '2h 58min',
//     genre: ['Adventure', 'Drama', 'Fantasy'],
//     score: 8.8
//   },
//   {
//     title: 'Forrest Gump',
//     year: 1994,
//     director: 'Robert Zemeckis',
//     duration: '2h 22min',
//     genre: ['Comedy', 'Drama', 'Romance'],
//     score: 8.8
//   },
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//     director: 'Irvin Kershner',
//     duration: '2h 4min',
//     genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
//     score: 8.8
//   },
//   {
//     title: 'Inception',
//     year: 2010,
//     director: 'Christopher Nolan',
//     duration: '2h 28min',
//     genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
//     score: 8.8
//   },
//   {
//     title: 'The Lord of the Rings: The Two Towers',
//     year: 2002,
//     director: 'Peter Jackson',
//     duration: '2h 59min',
//     genre: ['Adventure', 'Drama', 'Fantasy'],
//     score: 8.7
//   },
//   {
//     title: 'One Flew Over the Cuckoo"s Nest',
//     year: 1975,
//     director: 'Milos Forman',
//     duration: '2h 13min',
//     genre: ['Drama'],
//     score: 8.7
//   },
//   {
//     title: 'Goodfellas',
//     // year: 1990,
//     year: 1994,
//     director: 'Martin Scorsese',
//     duration: '2h 26min',
//     genre: ['Crime', 'Drama'],
//     score: 8.7
//   },
//   {
//     title: 'The Matrix',
//     // year: 1999,
//     year: 1994,
//     director: 'Lana Wachowski',
//     duration: '2h 16min',
//     genre: ['Action', 'Sci-Fi'],
//     score: 8.7
//   },
//   {
//     title: 'Shichinin no samurai',
//     year: 1954,
//     director: 'Akira Kurosawa',
//     duration: '3h 27min',
//     genre: ['Adventure', 'Drama'],
//     score: 8.7
//   },
//   {
//     title: 'Star Wars',
//     year: 1977,
//     director: 'George Lucas',
//     duration: '2h 1min',
//     genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
//     score: 8.7
//   },
//   {
//     title: 'Cidade de Deus',
//     // year: 2002,
//     year: 1994,
//     director: 'Fernando Meirelles',
//     duration: '2h 10min',
//     genre: ['Crime', 'Drama'],
//     score: 8.7
//   }  
// ];


// console.log(typeof allDirectors, allDirectors);
// console.log(typeof directorsScores, directorsScores);
// console.log(typeof scores, scores);
// console.log(typeof totalScore, totalScore);
// console.log(typeof finalScore, finalScore);
// // console.log(typeof abcMovies, abcMovies);
// console.log(typeof moviesByYear, moviesByYear);
// console.log(typeof allGenreFilms, allGenreFilms);
// console.log(typeof genreScores, genreScores);
// console.log(typeof genreTotalScore, genreTotalScore);
// console.log(typeof genreAverageSocre, genreAverageSocre);



// // Exercise 1: Get the array of all directors
// const allDirectors = films.map(item => item.director);

// Exercise 1: Get the array of all directors
function getAllDirectors(array) {
  let result = array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
// const directorsName = films.filter(item => item.director.includes('Peter'));
// console.log(typeof directorsName, directorsName);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
let result = array.filter(item => item.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}
// getMoviesFromDirector(films, 'Francis Ford Coppola');

// Exercise 3: Calculate the average of the films of a given director
// const directorsScores = films.filter(item => item.director.includes('Francis Ford Coppola'));
// const scores = directorsScores.map(item => item.score);
// const totalScore = scores.reduce((accumulatedFilmScores, actualFilmScore) => accumulatedFilmScores + actualFilmScore , 0);
// let finalScore = parseFloat((totalScore / scores.length).toFixed(2));




// Exercise 3: Calculate the average of the films of a given director
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter(item => item.director === director); //returns new array with all the movies according to the parameter 'director'
  const directorMoviesScores = directorMovies.map(item => item.score); //returns new array containing all the 'score' values from the previous array
  const directorMoviesScoresSum = directorMoviesScores.reduce((accumulatedScore, actualScore) => accumulatedScore + actualScore, 0); //returns a number with the sum of all the numbers from the array that was reduced
  let result = parseFloat((directorMoviesScoresSum/directorMovies.length).toFixed(2));
  console.log("EXERCICE 3 ->", result);
  
  
  console.log(typeof directorMoviesScoresSum, directorMoviesScoresSum);
  console.log(typeof result, result);


  return result;
}
// moviesAverageOfDirector(films, 'Francis Ford Coppola');


// Excercise 4
// const abcMovies = films.sort(function(a, z) {
//   if (a.title.toLowerCase() < z.title.toLowerCase()) return -1;
//   if (a.title.toLowerCase() > z.title.toLowerCase()) return 1;
//   return 0;
// });
// abcMovies.splice(20)

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const abcMoviesArray = [...array]; //the spread operator duplicates the original array to keep it the same thoroughly the whole function
  const abcMoviesTitle = abcMoviesArray.map(item => item.title); //the map method returns a new array containig only the 'title' of previous objects
  const abcMovies = abcMoviesTitle.sort(function(a, z) { //the sort method returns the previous array in alphabetical order
    if (a.toLowerCase()< z.toLowerCase()) return -1; //Next three lines prevent possible sorting errors due to numbers and misspellings such as capital & lowercase characters wrongly introduced in the database
    if (a.toLowerCase()> z.toLowerCase()) return 1;
    return 0;
});
abcMovies.splice(20);

// console.log(typeof array, array);
// console.log(typeof abcMoviesArray, abcMoviesArray);
// console.log(typeof abcMoviesTitle, abcMoviesTitle);
// console.log(typeof abcMovies, abcMovies);
console.log("EXERCICE 4 ->", abcMovies);
return abcMovies;
}
// orderAlphabetically(films);


// Exercise 5: Order by year, ascending. Es necesario comentar el ejercicio 4 ya que el método sort pasado al array films altera el array original; también se puede usar el spread operator para crear una copia y trabajar sobre el nuevo array
// abcMovies;
// const moviesByYear = films.sort(function(a,z) {
//   return a.year - z.year;
// }); 
// console.log(typeof moviesByYear, moviesByYear);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const newArray = [...array];
  // const abcMovies = newArray.sort(function(a, z) { //the sort method returns the previous array in alphabetical order
  //   if (a.title.toLowerCase()< z.title.toLowerCase()) return -1; //Next three lines prevent possible sorting errors due to numbers and misspellings such as capital & lowercase characters wrongly introduced in the database
  //   if (a.title.toLowerCase()> z.title.toLowerCase()) return 1;
  //   return 0;
  // });

  // const moviesByYear = abcMovies.sort(function(a, z) { //the sort method returns the previous array in alphabetical order
  //   if (a.year < z.year) return -1; //Next three lines prevent possible sorting errors due to numbers and misspellings such as capital & lowercase characters wrongly introduced in the database
  //   if (a.year > z.year) return 1;
  //   return 0;
  // });



  const moviesByYear = newArray.sort((function(a, z) { //the sort method returns the previous array in alphabetical order
    if (a.title < z.title ) return -1; //Next three lines prevent possible sorting errors due to numbers and misspellings such as capital & lowercase characters wrongly introduced in the database
    if (a.title > z.title ) return 1;
  })).sort(function(a, z) { //the sort method returns the previous array in alphabetical order
    if (a.year < z.year) return -1; //Next three lines prevent possible sorting errors due to numbers and misspellings such as capital & lowercase characters wrongly introduced in the database
    if (a.year > z.year) return 1;
    return 0;
  });


  // console.log(typeof abcMovies, abcMovies);
  console.log(typeof moviesByYear, moviesByYear);
  // console.log(typeof moviesByYearAscendent, moviesByYearAscendent);


  console.log("EXERCICE 5 ->", moviesByYear);
  // console.log(typeof moviesByYear);
  // return moviesByYearAscendent;
  return moviesByYear;
}
// orderByYear(films);


// Exercise 6: Calculate the average of the movies in a category
// const allGenreFilms = films.filter(item => item.genre.includes('Drama'));
// const genreScores = allGenreFilms.map(item => item.score);
// const genreTotalScore = genreScores.reduce((accumulatedFilmScores, actualFilmScore) => accumulatedFilmScores + actualFilmScore , 0);
// let genreAverageSocre = parseFloat((genreTotalScore / genreScores.length).toFixed(2));


// en la misma línea pasamos el método .map al array resultado de pasarle el método .filter con un .include al array originario
// const xxx = films.filter(item => item.genre.includes('Drama')).map(item => item.score);
// console.log(typeof xxx, xxx );

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const allGenreFilmsWithScore = array.filter(item => item.genre.includes(genre))
  .filter(item => item.score !== '')
  .map(item => item.score);
  
  const genreTotalScore = parseFloat((allGenreFilmsWithScore.reduce((accumulatedFilmScores, actualFilmScore) => accumulatedFilmScores + actualFilmScore, 0) / allGenreFilmsWithScore.length).toFixed(2))

  console.log("EXERCICE 6 ->", genreTotalScore);
  return genreTotalScore;
}
// moviesAverageByCategory(films2, 'Crime' );
moviesAverageByCategory(films3, 'Crime' );

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
