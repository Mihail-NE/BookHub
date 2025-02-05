import { motion } from "framer-motion";
import HomeLayout from "./../../layouts/HomeLayout";

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <HomeLayout />
        </motion.div>
    );
};
export default HomePage;
