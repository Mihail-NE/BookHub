import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/fetchBooks";

const useBooks = () => {
    const {
        isLoading,
        isError,
        data: books,
    } = useQuery({
        queryKey: ["books"],
        queryFn: () => fetchBooks(),
    });

    return {
        isLoading,
        isError,
        books: books,
    };
};

export default useBooks;
