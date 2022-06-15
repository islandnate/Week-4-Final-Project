// https://www.omdbapi.com/?i=tt3896198&apikey=954794aa

const movieListEl = document.querySelector('.movies__container')
const searchBar = document.querySelector('input[type="search"]')
const searchBtn = document.getElementsByClassName('.btn__search')
let searchResults = document.querySelector('.search__results')
let moviesArr = []


async function main() {
    
    const movies = await fetch(`https://omdbapi.com/?apikey=d3ff36ad&s=movie`)
    moviesData = await movies.json()
    const moviesSearch = moviesData.Search
    movieListEl.innerHTML = moviesSearch.map((movie) => movieHTML(movie)).join("")
    
          
       
}

main()

const getMovies = async () => {    
    searchBar.addEventListener('keyup', async (e) => {
            if(e.key === 'Enter'){
                const searchString = e.target.value.toLowerCase()
                const moviesNew = await fetch(`https://omdbapi.com/?apikey=d3ff36ad&s=${searchString}`)
                moviesNewData = await moviesNew.json()
                const moviesNewSearch = moviesNewData.Search
                movieListEl.innerHTML = moviesNewSearch.map((movie) => movieHTML(movie)).join("")
                searchResults.innerHTML = `Search Results for: "${searchString}"`
            }
    }) 
}

getMovies()

async function search(){
    const moviesNew = await fetch(`https://omdbapi.com/?apikey=d3ff36ad&s=${searchBar.value}`)
    moviesNewData = await moviesNew.json()
    const moviesNewSearch = moviesNewData.Search
    movieListEl.innerHTML = moviesNewSearch.map((movie) => movieHTML(movie)).join("")
    searchResults.innerHTML = ` Search Results for: "${searchBar.value}"`
}




function movieHTML(movie){
    return `<div class="movie">
    <img src="${movie.Poster}" alt="" class="movie__img">
    <div class="movie__description">
        <div class="movie__title">${movie.Title}</div>
        <div class="movie__year"> ${movie.Year}</div>
    </div>
</div>`
}