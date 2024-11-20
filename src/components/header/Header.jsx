import { FaBars, FaCartPlus, FaHome, FaSearch } from 'react-icons/fa';
import './header.css';
import { useState } from 'react';

export default function Header() {
    const [header2, setHeader] = useState(false);

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

            <ul className="navlist">
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#shop">Our Shop</a></li>
                <li><a href="#review">Our Cushrefmer</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div className="nav-icons">
                <a href="#"><FaSearch /></a>
                <a href="#"><FaCartPlus /></a>
                <div className="bx-menu bx" id='menu-icon'><FaBars /></div>
            </div>
        </header >
    )
}
