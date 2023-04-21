import './index.css';
import Loupe from '../../assets/pictures/Loupe.svg';
import { Link } from 'react-router-dom';
const Navbar = ({ datas, error, isLoading, handleSubmit }) => {
    return (
        <nav className="nav">
            <Link to="/">
                <h1 className="logo">Vilm</h1>
            </Link>
            <form className="form" action="submit">
                <input className="input" ype="text" />
                <button className="button" type="submit">
                    {' '}
                    <img src={Loupe} className="loupe" alt="loupe" />
                </button>
            </form>
        </nav>
    );
};
export default Navbar;
