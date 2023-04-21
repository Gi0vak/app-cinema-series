import './index.css';
import CardMovie from './CardMovie';

const Movies = ({ datasMovies }) => {
    return (
        <section className="movies">
            <h1 className="trending-title">Trending Movies</h1>
            <div className="cards-grid-movie">
                {datasMovies.map((el, index) => {
                    return (
                        <CardMovie
                            key={index}
                            title={el.title}
                            img={el.poster_path}
                            date={el.release_date.split('').splice(0, 4)}
                            id={el.id}
                        />
                    );
                })}
            </div>
        </section>
    );
};
export default Movies;
