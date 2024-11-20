import { FaStar } from 'react-icons/fa';
import './reviews.css';
import People1 from '../../assets/r1.jpg';
import People2 from '../../assets/r2.jpg';
import People3 from '../../assets/r3.jpg';

export default function Reviews() {
    return (
        <section className='reviews' id='review'>
            <h5>Our Shop</h5>
            <h2>Lets Check Popular Products</h2>

            <div className="reviews-container">
                <div className="review">
                    <p>The Taste is still in my mouth and I can feel the depth of the taste of the every ingredients used in the food. I really Love Fafo.</p>
                    <div className="people-container">
                        <img src={People1} alt="Review person" />
                        <div>
                            <h6>John Karahan</h6>
                            <span>Food Vlogger</span>
                            <div className='stars'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <p>The Taste is still in my mouth and I can feel the depth of the taste of the every ingredients used in the food. I really Love Fafo.</p>
                    <div className="people-container">
                        <img src={People2} alt="Review person" />
                        <div>
                            <h6>John Karahan</h6>
                            <span>Food Vlogger</span>
                            <div className='stars'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <p>The Taste is still in my mouth and I can feel the depth of the taste of the every ingredients used in the food. I really Love Fafo.</p>
                    <div className="people-container">
                        <img src={People3} alt="Review person" />
                        <div>
                            <h6>John Karahan</h6>
                            <span>Food Vlogger</span>
                            <div className='stars'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
