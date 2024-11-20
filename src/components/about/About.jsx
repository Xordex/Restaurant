import './about.css';
import AboutImg from '../../assets/about.png';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
    return (
        <section className='about' id='about'>
            <div className="about-img">
                <img src={AboutImg} alt="About" />
            </div>

            <div className="about-text">
                <h2>Living well begins <br /> with eating well.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cum possimus id rem sit eius culpa, laborum voluptas iusto aliquam, pariatur placeat quos doloribus facere provident ut tempora dolore praesentium?</p>
                <a href="#" className='btn'>Explore Story <FaArrowRight className='rightArrow' /></a>
            </div>
        </section>
    )
}
