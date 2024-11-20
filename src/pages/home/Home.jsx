import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Container from '../../components/container/Container';
import Hero from '../../components/hero/Hero';
import Reviews from '../../components/reviews/Reviews';
import Scrolltop from '../../components/scrolltop/Scrolltop';
import Shop from '../../components/shop/Shop';
import './home.css';

export default function Home() {
    return (
        <>
            <Hero />
            <Container />
            <About />
            <Shop />
            <Reviews />
            <Contact />
            <Scrolltop />
        </>
    )
}
