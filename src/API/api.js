const API_KEY = process.env.REACT_APP_API_KEY;

export const GetMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
        );
        const { results } = await response.json();
        const dataMovies = results.slice(0, 12);
        return dataMovies;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const GetTVs = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`
        );
        const { results } = await response.json();
        const dataTVs = results.slice(0, 12);
        return dataTVs;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const GetSingleMovieId = async id => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const dataMovie = await response.json();
        return dataMovie;
    } catch (error) {
        console.log('Error : ', error);
    }
};
export const GetSingleTVId = async id => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
        );
        const dataTV = await response.json();
        return dataTV;
    } catch (error) {
        console.log('Error : ', error);
    }
};
