import Hero from "../../features/home/Hero";
import FeaturedBooks from "../../features/home/FuatureBooks";
import Benefits from "../../features/home/Benefits";
import Testimonials from "../../features/home/Testimonials";
import Footer from "../../features/home/Footer";
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
