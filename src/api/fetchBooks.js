const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const QUERY = "psychology";
const LANG = "ru";

export const fetchBooks = () => {
    return fetch(
        `${BASE_URL}?q=${QUERY}&langRestrict=${LANG}&maxResults=30&key=${API_KEY}`
    ).then((res) => res.json());
};
