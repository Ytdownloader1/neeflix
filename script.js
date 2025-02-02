const TMDB_API_KEY = "ef2e1b6c18d1484a485308b9899dadbc";  // Replace with your TMDb API Key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

document.addEventListener("DOMContentLoaded", function () {
    const movieSlider = document.querySelector(".movie-slider");

    // Fetch latest movies from TMDb
    fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${ef2e1b6c18d1484a485308b9899dadbc}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                movieCard.innerHTML = `
                    <a href="movie.html?movie_id=${movie.id}">
                        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}">
                        <div class="movie-info">
                            <h3>${movie.title}</h3>
                            <p>${movie.release_date.split("-")[0]} | ${movie.vote_average}⭐</p>
                        </div>
                    </a>
                `;

                movieSlider.appendChild(movieCard);
            });
        })
        .catch(error => console.error("Error fetching movies:", error));
});
