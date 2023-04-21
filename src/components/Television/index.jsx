import './index.css';
import CardTelevision from './CardTelevision';

const Television = ({ datasTVs }) => {
    console.log('dataTV : ', datasTVs);
    return (
        <section className="series">
            <h1 className="trending-title">Trending TVs</h1>
            <div className="cards-grid-serie">
                {datasTVs.map((el, index) => {
                    return (
                        <CardTelevision
                            key={index}
                            title={el.name}
                            img={el.poster_path}
                            id={el.id}
                        />
                    );
                })}
            </div>
        </section>
    );
};
export default Television;
