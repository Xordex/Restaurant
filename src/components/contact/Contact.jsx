import './contact.css';
import downImg1 from '../../assets/f1.png';
import downImg2 from '../../assets/f2.png';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLocationArrow, FaPhone, FaRing, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className="download-btns">
                <img src={downImg1} alt="Google Play" />
                <img src={downImg2} alt="App Store" />
            </div>

            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime fuga assumenda itaque esse libero suscipit ipsa repellat reiciendis, voluptate in ab impedit ratione odit adipisci. Dolor placeat ratione corporis sapiente.</p>

            <div className="socialmedia">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaGithub />
                <FaGoogle />
            </div>

            <div className="contact-container">
                <div>
                    <FaLocationArrow />
                    Main stree 65, ny, ny
                </div>
                <div>
                    <FaPhone />
                    730 728 446
                </div>
                <div>
                    <FaYoutube />
                    Honey Restaurant
                </div>
                <div>
                    <FaRing />
                    Subscribe
                </div>
            </div>
        </section>
    )
}
