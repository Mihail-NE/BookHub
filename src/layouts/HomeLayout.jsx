import Hero from "./../features/home/Hero";
import Benefits from "./../features/home/Benefits";
import Testimonials from "./../features/home/Testimonials";
import Footer from "./../features/home/Footer";
import FeaturedBooks from "./../features/home/FuatureBooks";

const HomeLayout = () => {
    return (
        <>
            <Hero />
            <FeaturedBooks />
            <Benefits />
            <Testimonials />
            <Footer />
        </>
    );
};
export default HomeLayout;
