import './hero.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HeroImg from '../../assets/hero.png';

export default function Hero() {
    return (
        <section className="home">
            <div className="home-text">
                <h1>Meet, <span>Eat &</span> <br /> Enjoy The true <br /> taste</h1>
                <Link to="/explore" className='btn'>Explore Menu<FaArrowRight className='rightArrow' /></Link>
                <Link className="btn2" to="/order">Order Now</Link>
            </div>

            <div className="home-img">
                <img src={HeroImg} alt="Hero image with Honey" />
            </div>
        </section>
    )
}
