'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastFilms1 = prompt('Один из последних просмотренных фильмов?', ''),
    rateYourLastFilm1 = prompt('На сколько оцените его?', ''),
    lastFilms2 = prompt('Один из последних просмотренных фильмов?', ''),
    rateYourLastFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilms1] = rateYourLastFilm1;
personalMovieDB.movies[lastFilms2] = rateYourLastFilm2;

console.log(personalMovieDB);
