import './hero.css';
import { FaArrowRight } from 'react-icons/fa';
import HeroImg from '../../assets/hero.png';

export default function Hero() {
    return (
        <section className="home">
            <div className="home-text">
                <h1>Meet, <span>Eat &</span> <br /> Enjoy The true <br /> taste</h1>
                <a href="#" className='btn'>Explore Menu<FaArrowRight className='rightArrow' /></a>
                <a className="btn2" href="#">Order Now</a>
            </div>

            <div className="home-img">
                <img src={HeroImg} alt="Hero image with Honey" />
            </div>
        </section>
    )
}
