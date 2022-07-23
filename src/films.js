// const movies = require("./data");

const films3 = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    // genre: 'Crime',
    genre: ['Drama'],
    score: 8.3
    // score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1994,
    // year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    // genre: 'Crime',
    genre: ['Crime', 'Drama'],
    score: 9.4
  },
  {
    title: 'The Godfather: Part II',
    year: 1994,
    // year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    // genre: 'Crime',
    genre: ['Crime', 'Drama'],
    score: ''
  },
  {
    title: 'Platoon',
    year: 1994,
    // year: 1986,
    director: 'Oliver Stone',
    duration: '2h',
    genre: ['Drama', 'War'],
    score: 9.4
  },
  {
    title: 'Blade Runner 2049',
    year: 2017,
    director: 'Denis Villeneuve',
    duration: '9min',
    // duration: '2h 44min',
    genre: ['Mystery', 'Sci-Fi', 'Thriller'],
    score: 8.5
  }
];
// console.log (films3);

// Exercise 1: Get the array of all directors
function getAllDirectors(array) {
  const directorsList = array.map(item => item.director);
  console.log("EXERCICE 1 ->", directorsList);
  return directorsList;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
let directorMovies = array.filter(item => item.director === director);
  console.log("EXERCICE 2 ->", directorMovies);
  return directorMovies;
}


// Exercise 3: Calculate the average of the films of a given director
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter(item => item.director === director) //returns new array with all the movies according to the parameter 'director'
  .map(item => item.score) //returns new array containing all the 'score' values from the previous array
  let directorScoreAverage = parseFloat((directorMovies
    .reduce((accumulatedScore, actualScore) => accumulatedScore + actualScore, 0)/directorMovies.length).toFixed(2));
  console.log("EXERCICE 3 ->", directorScoreAverage);
  return directorScoreAverage;
}


// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const abcMoviesArray = [...array] //the spread operator duplicates the original array to keep it the same thoroughly the whole function
  .map(item => item.title) //the map method returns a new array containig only the 'title' of previous objects
  .sort(function(a, z) { //the sort method returns the previous array in alphabetical order
    if (a.toLowerCase()< z.toLowerCase()) return -1; //Next three lines prevent possible sorting errors due to numbers and misspellings such as capital & lowercase characters wrongly introduced in the database
    if (a.toLowerCase()> z.toLowerCase()) return 1;
    return 0;
});
  abcMoviesArray.splice(20);

  console.log("EXERCICE 4 ->", abcMoviesArray);
  return abcMoviesArray;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const moviesByYear = [...array]
  .sort((function(a, z) { //sorts the array in alphabetical order
    if (a.title < z.title ) return -1;
    if (a.title > z.title ) return 1;
  })).sort(function(a, z) { //sorts the array in numeric order
    if (a.year < z.year) return -1;
    if (a.year > z.year) return 1;
    return 0;
  });

  console.log("EXERCICE 5 ->", moviesByYear);
  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const allGenreFilmsWithScore = array.filter(item => item.genre.includes(genre))
  .filter(item => item.score !== '')
  .map(item => item.score);

//mejor pasar la función que calcula average del ejercicio 3
  const genreTotalScore = parseFloat((allGenreFilmsWithScore.reduce((accumulatedFilmScores, actualFilmScore) => accumulatedFilmScores + actualFilmScore, 0) / allGenreFilmsWithScore.length).toFixed(2))

  console.log("EXERCICE 6 ->", genreTotalScore);
  return genreTotalScore;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // const d = array.map(item => item.duration.split(''));
  const h = array.map(item => item.duration.split('h'))
  .map(item => item[0]*60);
  const m = array.map(item => item.duration.split('min'));
  const n = m.map(item => item.splice(1,1))


  console.log(array)
  // console.log(d)
  console.log(h)
  console.log(m)
  console.log(n)


}

hoursToMinutes(films3)

const numeros =  [[1,2],[3,4],[5,6]]
// console.log(numeros[2][0])





// function hoursToMinutes(array) {

//   let totalMinutes = [];

//   const durationDestructuring = array.map(item => item.duration.split(''));
//   durationDestructuring.forEach((item) => {
//     if (item.length === 8) {
//       totalMinutes.push(durationDestructuring
//       .filter(item => item.length === 8)
//       .map(item => Number(item[0]*60) + Number(item[3]) + Number(item[4])));


//       // totalMinutes.push(item
//       // .filter(item => item.length === 8)
//       // .map(item => Number(item[0]*60) + Number(item[3]) + Number(item[4])))
//     } else if (item.length === 5) {
//       totalMinutes.push(durationDestructuring
//       .filter(item => item.length === 5)
//       .map(item => Number(item[0]) + Number(item[1])));


//       // totalMinutes.push(item
//       // .filter(item => item.length === 5)
//       // .map(item => Number(item[0]) + Number(item[1])))
//     } else if (item.length === 4) {
//       totalMinutes.push(durationDestructuring
//       .filter(item => item.length === 4)
//       .map(item => Number(item[0])));


//       // totalMinutes.push(item
//       // .filter(item => item.length === 4)
//       // .map(item => Number(item[0])))
//     } else if (item.length === 2) {
//       totalMinutes.push(durationDestructuring
//       .filter(item => item.length === 2)
//       .map(item => Number((item[0]*60))));


//       // totalMinutes.push(item
//       // .filter(item => item.length === 2)
//       // .map(item => (item[0]*60)))
//     }
//   })


//   console.log(typeof durationDestructuring, durationDestructuring);
//   console.log(typeof totalMinutes, totalMinutes);


//   const totalHours = array.map(item => item.duration.split(''))
//   .filter(item => item.length === 8)
//   .map(item => (item[0]*60) + Number(item[3] + item[4]))

//   // const totalHours = array.map(item => item.duration.split(''))
//   // .filter(item => item.length === 5)
//   // .map(item => (Number(item[0] + item[1])))

//   // const totalHours = array.map(item => item.duration.split(''))
//   // .filter(item => item.length === 4)
//   // .map(item => (Number(item[0])))

//   // const totalHours = array.map(item => item.duration.split(''))
//   // .filter(item => item.length === 2)
//   // .map(item => (item[0]*60));


//   console.log(typeof array, array);
//   console.log(typeof totalHours, totalHours);

// }
// hoursToMinutes(films3)




// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const yearHighScore = array.filter(item => item.year === year) //creates an array acording the year parameter
  .sort((function(a,z) { //sorts the array according to their score
    if (a.score < z.score) return 1;
    if (a.score > z.score) return -1
    return 0
  }))
  .splice(0,1)

  console.log("EXERCICE 8 ->", yearHighScore);
  return yearHighScore;
}
bestFilmOfYear(films3, 1994)


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
