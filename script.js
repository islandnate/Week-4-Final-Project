// https://www.omdbapi.com/?i=tt3896198&apikey=954794aa

const movieListEl = document.querySelector(".movies")


async function main(){
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=954794aa")
    const moviesData = await movies.json()
    console.log(moviesData)
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("")

}


main()

function movieHTML(movie){
    return `<div class="movie">
    <img src="https://${movie.poster}" alt="" class="movie__img">
    <div class="movie__description">
        <div class="movie__title">${movie.title}</div>
        <div class="movie__year"> ${movie.year}</div>
    </div>
</div>`
}