import { useState, useEffect } from "react";
import useBooks from "../../shared/hooks/useBooks";

const FILTER_OPTIONS = [
    { id: 1, value: "title", label: "Названию" },
    { id: 2, value: "authors", label: "Автору" },
    { id: 3, value: "categories", label: "Категории" },
    { id: 4, value: "publisher", label: "Издателю" },
];

const filterHandlers = {
    authors: (book, searchInput) =>
        book.volumeInfo.authors?.some((author) =>
            author.toLowerCase().includes(searchInput.toLowerCase())
        ),
    categories: (book, searchInput) =>
        book.volumeInfo.categories?.some((category) =>
            category.toLowerCase().includes(searchInput.toLowerCase())
        ),
    publisher: (book, searchInput) =>
        book.volumeInfo.publisher
            ?.toLowerCase()
            .includes(searchInput.toLowerCase()),
    title: (book, searchInput) =>
        book.volumeInfo.title
            ?.toLowerCase()
            .includes(searchInput.toLowerCase()),
};

const Filter = ({ newFilteredBooks }) => {
    const { books } = useBooks();
    const [searchInput, setSearchInput] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("title");

    useEffect(() => {
        if (!books?.items) return;

        if (searchInput.trim() === "") {
            newFilteredBooks(books);
            return;
        }

        const filtered = books.items.filter((book) =>
            filterHandlers[selectedFilter](book, searchInput)
        );

        newFilteredBooks({ ...books, items: filtered });
    }, [searchInput, books, selectedFilter]);

    const removeFilters = () => {
        setSearchInput("");
        setSelectedFilter("title");
    };

    return (
        <div className="flex items-center justify-center pt-10 pl-14 space-x-4">
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Введите текст для поиска"
                className="border border-gray-300 w-[700px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <span className="text-gray-700">Искать по</span>
            <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
                {FILTER_OPTIONS.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <button
                className="bg-violet-500 text-white rounded-md px-4 py-2 hover:bg-violet-600 transition duration-200"
                onClick={removeFilters}
            >
                Сбросить
            </button>
        </div>
    );
};

export default Filter;
