import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/fetchBooks";

const useBooks = () => {
    const [startIndex, setStartIndex] = useState(10);

    const {
        isLoading,
        isError,
        data: books,
    } = useQuery({
        queryKey: ["books", startIndex],
        queryFn: () => fetchBooks(startIndex),
    });

    return {
        isLoading,
        isError,
        books: books,
        startIndex,
        setStartIndex,
    };
};

export default useBooks;