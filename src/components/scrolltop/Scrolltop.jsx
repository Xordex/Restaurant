import { FaArrowUp } from 'react-icons/fa';
import './scrolltop.css';
import { useState } from 'react';

export default function Scrolltop() {
    const [scrolltop, setScrolltop] = useState(false);

    window.addEventListener('scroll', function () {
        if (scrollY > 1000) {
            setScrolltop(true);
        }
        if (scrollY <= 1000) {
            setScrolltop(false);
        }
    });

    return (
        <a href="#"><div className={`scrolltop ${scrolltop && "display"}`}>
            <FaArrowUp />
        </div></a>
    )
}
