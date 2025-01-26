import { useState, useCallback } from "react";
import useBooks from "../../../hooks/useBooks";

const Filter = () => {
    const { books } = useBooks();
    const [selectedFilter, setSelectedFilter] = useState("name");
    const [searchInput, setSearchInput] = useState("");

    const changeFilter = (e) => {
        const newFilter = e.target.value;
        setSelectedFilter(newFilter);
    };

    const serchBooks = () => {
        applyFilter(selectedFilter);
    };

    const searchInputChange = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        setSearchInput(newValue);
        applyFilter(selectedFilter, newValue);
    };

    const applyFilter = useCallback(

        // (selectedFilter, currentSearchValue) => {
        //     const searchValue = currentSearchValue ?? searchInput;
        //     let newFilteredArray;
        //     switch (selectedFilter) {
        //         case "name":
        //             newFilteredArray = books.filter((book) =>
        //                 book.volumeInfo.title
        //                     .toLowerCase()
        //                     .includes(searchValue.toLowerCase())
        //             );
        //             break;

        //         case "author":
        //             newFilteredArray = books.filter((book) =>
        //                 book.volumeInfo.authors?.some((author) =>
        //                     author
        //                         .toLowerCase()
        //                         .includes(searchValue.toLowerCase())
        //                 )
        //             );
        //             break;

        //         case "category":
        //             newFilteredArray = books.filter((book) =>
        //                 book.volumeInfo.categories?.some((category) =>
        //                     category
        //                         .toLowerCase()
        //                         .includes(searchValue.toLowerCase())
        //                 )
        //             );
        //             break;

        //         case "publisher":
        //             newFilteredArray = books.filter((book) =>
        //                 book.volumeInfo.publisher
        //                     .toLowerCase()
        //                     .includes(searchValue.toLowerCase())
        //             );
        //             break;
        //     }
        // },
        [books, searchInput]
    );

    const removeFilters = () => {
        setSelectedFilter("name");
        setSearchInput("");
    };

    const options = [
        { id: 1, value: "name", label: "Названию" },
        { id: 2, value: "author", label: "Автору" },
        { id: 3, value: "category", label: "Категории" },
        { id: 4, value: "publisher", label: "Издателю" },
    ];

    return (
        <div className="flex items-center justify-center pt-10 pl-14 space-x-4">
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
                onClick={serchBooks}
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
