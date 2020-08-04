// // const addMovie = document.getElementById('add-movie-btn');
// // const searchBtn = document.getElementById('search-btn');

// // const movies = [];

// // const captureMovie = () => {
// //     const getMovie = document.getElementById('title').value;
// //     const getExtraInfo = document.getElementById('extra-name').value;
// //     const getExtraInfoValue = document.getElementById('extra-value').value;

// //     if (getExtraInfoValue.trim() === "" || getExtraInfo.trim() === "" || getMovie.trim() === "") {
// //         return;
// //     }

// //     const movieCapturedFromUser = {
// //         info:
// //         {
// //             title: getMovie,
// //             [getExtraInfo]: getExtraInfoValue
// //         },
// //         id: Math.random()
// //     };

// //     movies.push(movieCapturedFromUser);
// //     console.log(movieCapturedFromUser);
// //     renderMovies()

// // }

// // const renderMovies = (filter = '') => {
// //     const movieList = document.getElementById('movie-list');
// //     if (movies.length === 0) {
// //         movieList.classList.remove('visible');
// //         return;
// //     } else {
// //         movieList.classList.add('visible');
// //     }
// //     movieList.innerHTML = '';

// //     const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))

// //     filteredMovies.forEach((movie) => {
// //         const movieEl = document.createElement('li');
// //         let text = movie.info.title + ' - ';
// //         for (const key in movie.info) {
// //             console.log(key);
// //             if (key !== 'title') {
// //                 console.log(key);
// //                 console.log(movie.info[key]);
// //                 text = text + `${key}: ${movie.info[key]}`;
// //             }
// //         }
// //         movieEl.textContent = text;
// //         movieList.append(movieEl);
// //     });
// // }

// // const filteredMovieHandler = () => {
// //     const filterTerm = document.getElementById('filter-title').value;
// //     renderMovies(filterTerm);
// // }

// // addMovie.addEventListener('click', captureMovie);
// // searchBtn.addEventListener('click', filteredMovieHandler);


// // spread operators combined with objects
// const person = {name : 'shazia', age :'23'};
// const person2 = {...person};
// person.address = "srinagar";
// console.log(person2);
// console.log(person);
// console.log(this);


// // closures in js
// const hobbies =['reading', 'travelling'];
// function createTaxAmount (tax){
//     console.log(tax);
//     function calculteTax (amount ){
//          console.log(tax,amount);
    
//         return amount * tax;
//         // console.log(amount * tax)
//     } 
//    return calculteTax;
  
// }
 
// const createAmount = createTaxAmount(0.13);
// const createTax = createTaxAmount(0.5);
// console.log(createAmount(100));
// console.log(createAmount(200));


// const hobbies =['reading', 'travelling'];
// function createTaxAmount (tax){
//     function calculteTax (amount ){
//         return amount * tax;
//         console.log(amount * tax)
//     }
//    return calculteTax;
  
// }
 
// const createAmount = createTaxAmount(0.13);
// const createTax = createTaxAmount(0.5);
// console.log(createAmount(100));
// console.log(createAmount(200));



// creating  an GET api and parsing it an array
const xhr = new XMLHttpRequest();
 
 xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

 xhr.onload = function(){
   const createGetApi = JSON.parse(xhr.response);
   console.log(createGetApi);
   for (const post of createGetApi){
    //  const newEl = document.querySelector('title').textContent;
   }
 }
 xhr.send();