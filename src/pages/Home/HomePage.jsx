import Hero from "../../features/home/Hero/Hero";
import FeaturedBooks from "../../features/home/FuatureBooks/FuatureBooks";
import Benefits from "../../features/home/Benefits/Benefits";
import Testimonials from "../../features/home/Testimonials/Testimonials";
import Footer from "../../features/home/Footer/Footer";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Hero />
            <FeaturedBooks />
            <Benefits />
            <Testimonials />
            <Footer />
        </motion.div>
    );
};
export default HomePage;
