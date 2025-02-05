import { useState } from "react";
import Filter from "../features/catalog/Filter";
import BookList from "../features/catalog/BookList";

const CatalogLayout = () => {
    const [filteredBooks, setFilteredBooks] = useState([]);

    const NewFilteredBooks = (books) => {
        setFilteredBooks(books);
    };

    return (
        <>
            <Filter newFilteredBooks={NewFilteredBooks} />
            <BookList books={filteredBooks} />
        </>
    );
};

export default CatalogLayout;
