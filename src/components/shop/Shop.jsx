import { FaArrowRight, FaHeart } from 'react-icons/fa';
import './shop.css';
import Honey1 from '../../assets/p1.png';
import Honey2 from '../../assets/p2.png';
import Honey3 from '../../assets/p3.png';
import Honey4 from '../../assets/p4.png';

export default function Shop() {
    return (
        <section className='shop' id='shop'>
            <h5>Our Shop</h5>
            <h2>Lets Check Popular Products</h2>

            <div className="products">
                <div className="product">
                    <FaHeart />
                    <img src={Honey1} alt="Honey product" />
                    <h3>Blueberry Honey</h3>
                    <p>It is a long established fact that a reader</p>
                    <div className="product-order">
                        <span>$21.00</span>
                        <a href="#">Order now</a>
                    </div>
                </div>
                <div className="product">
                    <FaHeart />
                    <img src={Honey2} alt="Honey product" />
                    <h3>Blueberry Honey</h3>
                    <p>It is a long established fact that a reader</p>
                    <div className="product-order">
                        <span>$21.00</span>
                        <a href="#">Order now</a>
                    </div>
                </div>
                <div className="product">
                    <FaHeart />
                    <img src={Honey3} alt="Honey product" />
                    <h3>Blueberry Honey</h3>
                    <p>It is a long established fact that a reader</p>
                    <div className="product-order">
                        <span>$21.00</span>
                        <a href="#">Order now</a>
                    </div>
                </div>
                <div className="product">
                    <FaHeart />
                    <img src={Honey4} alt="Honey product" />
                    <h3>Blueberry Honey</h3>
                    <p>It is a long established fact that a reader</p>
                    <div className="product-order">
                        <span>$21.00</span>
                        <a href="#">Order now</a>
                    </div>
                </div>
            </div>

            <a href="#" className='btn'>All Products <FaArrowRight className='rightArrow' /></a>
        </section>
    )
}
