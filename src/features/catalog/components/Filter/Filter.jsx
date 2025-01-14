import { useContext, useState } from "react";
import { DataContext } from "../../../../context/DataContext";

const Filter = () => {
    const { books, filteredBooks, setFilteredBooks  } = useContext(DataContext);
    const [selectedFilter, setSelectedFilter] = useState(1);
    const [searchInput, setSearchInput] = useState("");

    const changeFilter = (e) => {
        const newFilter = e.target.value;
        setSelectedFilter(newFilter);
        handleApplyFilter(newFilter)
        console.log(newFilter);
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        handleApplyFilter(selectedFilter);
    };

    const handleApplyFilter = (filter) => {
        let newFilteredArray;

        switch (filter) {
            case "1":
                newFilteredArray = books.filter((book) =>
                    book.volumeInfo.title.toLowerCase().includes(searchInput.toLowerCase())
                );
                setFilteredArray(newFilteredArray);
                console.log(newFilteredArray);
                break;
        }
    };


    return (
        <div className="flex items-center ml-64 pt-10 pl-14 space-x-4">
            <input
                type="text"
                name="searchInput"
                id="search"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Введите текст для поиска"
                className="border border-gray-300 w-[700px] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <span className="text-gray-700">Искать по</span>
            <select
                name="select"
                id="select"
                value={selectedFilter}
                onChange={changeFilter}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
                <option value="1">По названию книги</option>
                <option value="2">По автору</option>
                <option value="3">По категории</option>
                <option value="4">По дате издания</option>
                <option value="5">По цене</option>
            </select>
            <button
                onClick={() => handleApplyFilter(selectedFilter)}
                className="bg-violet-500 text-white rounded-md px-4 py-2 hover:bg-violet-600 transition duration-200"
            >
                Применить
            </button>
        </div>
    );
};

export default Filter;
