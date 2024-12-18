import './container.css';
import c1Img from '../../assets/c1.png'
import c2Img from '../../assets/c2.png'
import c3Img from '../../assets/c3.png'

export default function Container() {
    return (
        <section className="container">
            <div className="container-box">
                <img src={c1Img} alt="" />
                <h3>11:00 am - 8:00 pm</h3>
                <a href="#">Working Hours</a>
            </div>

            <div className="container-box">
                <img src={c2Img} alt="" />
                <h3>Honey Springs 555</h3>
                <a href="#">Get Directions</a>
            </div>

            <div className="container-box">
                <img src={c3Img} alt="" />
                <h3>+48 730 728 446</h3>
                <a href="#">Call Us Now</a>
            </div>
        </section>
    )
}
