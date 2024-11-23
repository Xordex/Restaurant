import { FaBars, FaCartPlus, FaHome, FaSearch } from 'react-icons/fa';
import './header.css';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function Header() {
    const [header2, setHeader] = useState(false);
    const [headerMobile, setHeaderMobile] = useState(false);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            setHeader(true);
        }
        if (window.scrollY <= 80) {
            setHeader(false);
        }
    })

    return (
        <header className={header2 ? "sticky" : null}>
            <a href="#" className='logo'><FaHome />Honey</a>

            <ul className={`navlist ${headerMobile && "active"}`}>
                <FaX className='closebtn' onClick={() => setHeaderMobile(false)} />
                <li><a href="#" className='active' onClick={() => setHeaderMobile(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setHeaderMobile(false)}>About Us</a></li>
                <li><a href="#shop" onClick={() => setHeaderMobile(false)}>Our Shop</a></li>
                <li><a href="#review" onClick={() => setHeaderMobile(false)}>Our Cushrefmer</a></li>
                <li><a href="#contact" onClick={() => setHeaderMobile(false)}>Contact Us</a></li>
            </ul>

            <div className="nav-icons">
                <a href="#"><FaSearch /></a>
                <a href="#"><FaCartPlus /></a>
                <div className={`bx-menu bx ${headerMobile && "hide"}`} id='menu-icon'><FaBars onClick={() => setHeaderMobile(true)} /></div>
            </div>
        </header >
    )
}