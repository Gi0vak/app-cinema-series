import './index.css';
import { Link, useParams } from 'react-router-dom';

const CardTelevision = ({ title, img, id }) => {
    const urlImg = `https://image.tmdb.org/t/p/original${img}`;
    return (
        <section className="television-card">
            <Link className="card-link" page="Single" to={`/${id}`}>
                <img src={urlImg} className="card-img-tv" alt="card movie" />
                <h1 className="card-title">{title}</h1>
                <p className="card-date">{}</p>
            </Link>
        </section>
    );
};
export default CardTelevision;
