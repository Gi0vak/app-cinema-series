import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';
import Television from '../../components/Television';
import Footer from '../../components/Footer';
import { GetMovies } from '../../API/api';
import { GetTVs } from '../../API/api';
import { useState, useEffect } from 'react';
import './index.css';

const Home = () => {
    const [datasMovies, setDatasMovies] = useState([]);
    useEffect(() => {
        const getTrendingMovies = async () => {
            const trendingDatas = await GetMovies();
            setDatasMovies(trendingDatas);
        };
        getTrendingMovies();
    }, []);

    const [datasTVs, setDatasTVs] = useState([]);
    useEffect(() => {
        const getTrendingTVs = async () => {
            const trendingDatas = await GetTVs();
            setDatasTVs(trendingDatas);
        };
        getTrendingTVs();
    }, []);

    return (
        <div className="Home">
            <Navbar />
            <Hero datasMovies={datasMovies} />
            <Movies datasMovies={datasMovies} />
            <Television datasTVs={datasTVs} />
            <Footer />
        </div>
    );
};
export default Home;
