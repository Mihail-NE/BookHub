import { createContext, useState, useEffect, useReducer } from "react";
import { reducer, initialState } from "./Reducer";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useBooks from "../hooks/useBooks";
import { fetchBooks } from "../api/fetchBooks";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const { isLoading, isError, books, startIndex, setStartIndex } = useBooks();
    const [cartID, setCartID] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [storedCart, setStoredCart] = useLocalStorage("cart", []);

    useEffect(() => {
        dispatch({ type: "SET_CART", payload: storedCart });
        dispatch({ type: "SET_FAVORITES", payload: storedCart });
    }, []);

    useEffect(() => {
        setStoredCart(state.cart, state.favorites);
    }, [state.cart, state.favorites]);

    useEffect(() => {
        fetchBooks();
        console.log(books);
    }, [startIndex]);

    return (
        <DataContext.Provider
            value={{
                books,
                isLoading,
                isError,
                startIndex,
                setStartIndex,
                fetchBooks,
                cartID,
                setCartID,
                state,
                dispatch,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
