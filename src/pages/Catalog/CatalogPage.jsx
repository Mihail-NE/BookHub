import { motion } from "framer-motion";
import CatalogLayout from "../../layouts/CatalogLayout";

const CatalogPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <CatalogLayout />
        </motion.div>
    );
};

export default CatalogPage;
