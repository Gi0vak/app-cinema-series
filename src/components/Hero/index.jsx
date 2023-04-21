import './index.css';
import Star from '../../assets/pictures/Star.svg';
import { useEffect, useState } from 'react';

const Hero = ({ datasMovies }) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        if (datasMovies) {
            setMovie(datasMovies[0]);
        }
    });

    return (
        <>
            {movie && (
                <section
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                    className="hero"
                >
                    <h1 className="hero-title">{movie.title}</h1>
                    <p className="hero-content">{movie.overview}</p>
                    <span className="hero-rate">
                        <img className="star" src={Star} alt="star" />
                        <p className="number-rate">
                            {parseFloat(movie.vote_average).toFixed(2)}
                        </p>
                    </span>
                </section>
            )}
        </>
    );
};
export default Hero;
