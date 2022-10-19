const sliders = document.querySelector('.carouselbox')
let scrollPerClick
let ImagePadding = 20

showMovieData()

let scrollAmount = 0

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0, 
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });

    if (scrollAmount < 0) {
        scrollAmount = 0
    }
}

function sliderScrollRight() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        })
    }
}


async function showMovieData() {
    const api_key = "fb2e9bbd95a3ceb7531765b850dac386"

    let result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        api_key +
        "&sort_by=popularity.desc"
    )

    result = result.data.results

    result.map(function (cur, index) {
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
        )
    })

    scrollPerClick = 400;
}