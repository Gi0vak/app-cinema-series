import './index.css';
import { Link } from 'react-router-dom';

const CardMovie = ({ title, img, date, id }) => {
    const urlImg = `https://image.tmdb.org/t/p/original${img}`;
    return (
        <section className="movie-card">
            <Link className="card-link" to={`/${id}`}>
                <img src={urlImg} className="card-img" alt="card movie" />
                <h1 className="card-title">{title}</h1>
                <p className="card-date">{date}</p>
            </Link>
        </section>
    );
};
export default CardMovie;
