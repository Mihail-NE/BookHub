import { useContext, useState } from "react";
import { DataContext } from "../../../../context/DataContext";

const Filter = () => {
    const { books, setBooks, fetchBooks } = useContext(DataContext);
    const [selectedFilter, setSelectedFilter] = useState("name");
    const [searchInput, setSearchInput] = useState("");

    const changeFilter = (e) => {
        const newFilter = e.target.value;
        setSelectedFilter(newFilter);
        fetchBooks();
    };

    const searchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const applyFilter = (selectedFilter) => {
        let newFilteredArray;
        switch (selectedFilter) {
            case "name":
                newFilteredArray = books.filter((book) =>
                    book.volumeInfo.title
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                );
                setBooks(newFilteredArray);
                break;

            case "author":
                newFilteredArray = books.filter((book) =>
                    book.volumeInfo.authors?.some((author) =>
                        author.toLowerCase().includes(searchInput.toLowerCase())
                    )
                );
                setBooks(newFilteredArray);
                break;

            case "category":
                newFilteredArray = books.filter((book) =>
                    book.volumeInfo.categories?.some((category) =>
                        category
                            .toLowerCase()
                            .includes(searchInput.toLowerCase())
                    )
                );
                setBooks(newFilteredArray);
                break;

            case "publisher":
                newFilteredArray = books.filter((book) =>
                    book.volumeInfo.publisher
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                );
                setBooks(newFilteredArray);
                break;
        }
    };

    const removeFilters = () => {
        setSelectedFilter("name");
        setSearchInput("");
        fetchBooks();
    };

    const options = [
        { id: 1, value: "name", label: "Названию" },
        { id: 2, value: "author", label: "Автору" },
        { id: 3, value: "category", label: "Категории" },
        { id: 4, value: "publisher", label: "Издателю" },
    ];

    return (
        <div className="flex items-center ml-64 pt-10 pl-14 space-x-4">
            <input
                type="text"
                value={searchInput}
                onChange={searchInputChange}
                placeholder="Введите текст для поиска"
                className="border border-gray-300 w-[700px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <span className="text-gray-700">Искать по</span>
            <select
                value={selectedFilter}
                onChange={changeFilter}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <button
                onClick={() => applyFilter(selectedFilter)}
                className="bg-violet-500 text-white rounded-md px-4 py-2 hover:bg-violet-600 transition duration-200"
            >
                Применить
            </button>
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
