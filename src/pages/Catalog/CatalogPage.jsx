import BookList from "../../features/catalog/BookList/BookList";
import Filter from "../../features/catalog/Filter/Filter";
import { motion } from "framer-motion";

const CatalogPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Filter />
            <BookList />;
        </motion.div>
    );
};

export default CatalogPage;
