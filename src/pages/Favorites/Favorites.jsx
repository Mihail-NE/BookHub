import { motion } from "framer-motion";
import FavoritesLayout from "../../layouts/FavoritesLayout";

const Favorites = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <FavoritesLayout />
        </motion.div>
    );
};

export default Favorites;
