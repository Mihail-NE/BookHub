import { createContext, useState, useEffect, useReducer } from "react";
import { reducer, initialState } from "./Reducer";

export const DataContext = createContext();

const API_KEY = "AIzaSyBXhQtZXjWIiWQKI_7cJaVb40WRz2-cwo4"

export const DataProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [startIndex, setStartIndex] = useState(10);
    const [cartID, setCartID] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=psychology&langRestrict=ru&maxResults=${startIndex}&key=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setBooks(data.items);
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
        <DataContext.Provider value={{ books, loading, error, startIndex, setStartIndex, setBooks, fetchBooks, cartID, setCartID, state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};
