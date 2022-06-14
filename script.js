// https://www.omdbapi.com/?i=tt3896198&apikey=954794aa

const movieListEl = document.querySelector('.movies__container')
const searchBar = document.querySelector('.search__bar')
const searchBtn = document.querySelector('.btn__search')
let searchResults = document.getElementsByClassName('.search__results')
let moviesArr = []


async function main() {
    
    const movies = await fetch(`https://omdbapi.com/?apikey=d3ff36ad&s=movie`)
    moviesData = await movies.json()
    const moviesSearch = moviesData.Search
    movieListEl.innerHTML = moviesSearch.map((movie) => movieHTML(movie)).join("")
    
    searchBar.addEventListener('keyup', async (e) => {
            if(e.key === 'Enter'){
                const searchString = e.target.value.toLowerCase()
                const moviesNew = await fetch(`https://omdbapi.com/?apikey=d3ff36ad&s=${searchString}`)
                moviesNewData = await moviesNew.json()
                const moviesNewSearch = moviesNewData.Search
                movieListEl.innerHTML = moviesNewSearch.map((movie) => movieHTML(movie)).join("")

            }    
    })       
       
}

main()


    searchBtn.addEventListener('Click', async (e) => {
        if(e.key === 'Click'){
            const searchString = e.target.value.toLowerCase()
            const moviesNew = await fetch(`https://omdbapi.com/?apikey=d3ff36ad&s=${searchString}`)
            moviesNewData = await moviesNew.json()
            const moviesNewSearch = moviesNewData.Search
            movieListEl.innerHTML = moviesNewSearch.map((movie) => movieHTML(movie)).join("")

        }})   

function movieHTML(movie){
    return `<div class="movie">
    <img src="${movie.Poster}" alt="" class="movie__img">
    <div class="movie__description">
        <div class="movie__title">${movie.Title}</div>
        <div class="movie__year"> ${movie.Year}</div>
    </div>
</div>`
}