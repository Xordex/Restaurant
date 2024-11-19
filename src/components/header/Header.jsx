import { FaBars, FaCartPlus, FaHome, FaSearch } from 'react-icons/fa';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/" className='logo'><FaHome />Honey</Link>

            <ul className="navlist">
                <li><Link to="home" className='active'>Home</Link></li>
                <li><Link to="about">About Us</Link></li>
                <li><Link to="shop">Our Shop</Link></li>
                <li><Link to="review">Our Customer</Link></li>
                <li><Link to="contact">Contact Us</Link></li>
            </ul>

            <div className="nav-icons">
                <Link><FaSearch /></Link>
                <Link><FaCartPlus /></Link>
                <div className="bx-menu bx" id='menu-icon'><FaBars /></div>
            </div>
        </header>
    )
}
