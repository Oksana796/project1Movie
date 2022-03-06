"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films did you watched already?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films did you watched already?", "");
  }
}

//start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Your prefered gender by number ${i}?`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
//showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Your last watched film?", "");
    let b = prompt("Rate it", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

//rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("few films");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("classic");
  } else if (personalMovieDB.count >= 30) {
    console.log("wow.. cool");
  } else {
    console.log("error");
  }
}
//detectPersonalLevel();

console.log(personalMovieDB);
