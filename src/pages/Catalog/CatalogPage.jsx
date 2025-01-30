import BookList from "../../features/catalog/BookList/BookList";
import Filter from "../../features/catalog/Filter/Filter";
import { useState } from "react";
import { motion } from "framer-motion";

const CatalogPage = () => {
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleNewFilteredBooks = (books) => {
        setFilteredBooks(books);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Filter newFilteredBooks={handleNewFilteredBooks} />
            <BookList books={filteredBooks} />
        </motion.div>
    );
};

export default CatalogPage;
