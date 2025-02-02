const TMDB_API_KEY = "ef2e1b6c18d1484a485308b9899dadbc"; // Replace with your TMDb API Key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("movie_id");

    fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`)
        .then(response => response.json())
        .then(movie => {
            document.getElementById("movie-title").textContent = movie.title;
            document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            document.getElementById("movie-description").textContent = movie.overview;

            // Fetch streaming links from Vidsrc
            fetch(`https://vidsrc.to/api/movie/${movieId}`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("video-player").src = data.sources[0].url;
                })
                .catch(error => console.error("Error fetching movie sources:", error));
        })
        .catch(error => console.error("Error fetching movie details:", error));
});
