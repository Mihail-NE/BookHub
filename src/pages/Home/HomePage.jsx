import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Hero from '../../features/home/Hero/Hero';
import FeaturedBooks from '../../features/home/FuatureBooks/FuatureBooks';
import Benefits from '../../features/home/Benefits/Benefits';
import Testimonials from '../../features/home/Testimonials/Testimonials';
import Footer from '../../features/home/Footer/Footer';



const HomePage = () => {
    const { books } = useContext(DataContext);

    return (
      <>
        <Hero />
        <FeaturedBooks books={books} />
        <Benefits />
        <Testimonials />
        <Footer />
      </>
    );
  };
export default HomePage;
