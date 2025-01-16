import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();


const API_KEY = "AIzaSyBXhQtZXjWIiWQKI_7cJaVb40WRz2-cwo4"

export const DataProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startIndex, setStartIndex] = useState(10);

    const fetchBooks = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=psychology&langRestrict=ru&maxResults=${startIndex}&key=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setBooks(data.items);
            console.log(books);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [startIndex]);

    return (
        <DataContext.Provider value={{ books, loading, error, startIndex, setStartIndex, setBooks, fetchBooks }}>
            {children}
        </DataContext.Provider>
    );
};
