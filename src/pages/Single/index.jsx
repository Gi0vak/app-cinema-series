import './index.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetSingleMovieId } from '../../API/api';
import { GetSingleTVId } from '../../API/api';
import Star from '../../assets/pictures/Star.svg';
const Single = ({}) => {
    //#on met un useEffect avec un fetch qui recupere l id
    const { id } = useParams();
    const paramId = parseInt(id);
    console.log(paramId);
    // const dataId = datas.filter((data) => (data.id === paramId))
    // https://api.themoviedb.org/3/find/{external_id}?api_key=27308609bc21391190be97d54b371817&language=en-US&external_source=imdb_id

    const [datasMovie, setDatasMovie] = useState([]);
    const [datasTV, setDatasTV] = useState([]);
    useEffect(() => {
        const getMovieId = async () => {
            const trendingDatas = await GetSingleMovieId(paramId);
            setDatasMovie(trendingDatas);
        };
        const getTVId = async () => {
            const trendingDatas = await GetSingleTVId(paramId);
            setDatasTV(trendingDatas);
        };

        getMovieId(id);
        getTVId(id);
    }, [paramId]);
    console.log('dataTV:', datasTV);
    console.log('dataMovie:', datasMovie);

    return (
        <div className="Single">
            <Navbar />

            <section className="single-body">
                {(datasMovie || datasTV) && (
                    <section
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${
                                datasMovie
                                    ? datasMovie.backdrop_path
                                    : datasTV.backdrop_path
                            })`,
                        }}
                        className="hero"
                    >
                        <h1 className="hero-title">
                            {datasMovie ? datasMovie.title : datasTV.name}
                        </h1>
                        <p className="hero-content">
                            {datasMovie
                                ? datasMovie.overview
                                : datasTV.overview}
                        </p>
                        <span className="hero-rate">
                            <img className="star" src={Star} alt="star" />
                            <p className="number-rate">
                                {datasMovie
                                    ? parseFloat(datasMovie.vote_average)
                                    : parseFloat(
                                          datasMovie.vote_average
                                      ).toFixed(2)}
                            </p>
                        </span>
                    </section>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default Single;
