import BookList from "../../features/catalog/BookList/BookList";
import Filter from "../../features/catalog/Filter/Filter";

const CatalogPage = () => {

    return (
        <>
            <Filter />
            <BookList />;
        </>
    );
};

export default CatalogPage;
