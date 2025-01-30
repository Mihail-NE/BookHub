import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { TrashIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Favorites = () => {
    const { state, dispatch } = useContext(DataContext);

    const favoriteProducts = state.favorites || [];

    const removeFavorite = (id) => {
        dispatch({
            type: "REMOVE_FROM_FAVORITES",
            payload: id,
        });
    };

    if (favoriteProducts.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-14 flex justify-center items-center min-h-[70vh]"
            >
                <div className="w-2/3 mx-auto bg-white rounded-lg shadow-lg p-12 text-center">
                    <div className="mb-8">
                        <HeartIcon className="w-24 h-24 mx-auto text-gray-300" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Список избранного пуст
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Добавьте книги, которые вам понравились!
                    </p>
                    <Link to="/catalog">
                        <button className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Найти книги
                        </button>
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-14 flex gap-10"
        >
            <div className="w-2/3 mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Избранное
                </h2>

                <div className="flex justify-between items-center bg-gray-50 rounded-t-lg p-4 border-b">
                    <div className="w-3/5 text-gray-600 font-semibold">
                        Товар
                    </div>
                    <div className="w-1/5 text-center text-gray-600 font-semibold">
                        Цена
                    </div>
                    <div className="w-1/5 text-center text-gray-600 font-semibold">
                        Удалить
                    </div>
                </div>

                <div className="divide-y">
                    {favoriteProducts.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-4 hover:bg-gray-50 transition"
                        >
                            <div className="w-3/5 flex items-center gap-4">
                                <img
                                    src={item.cover}
                                    alt={item.title}
                                    className="w-16 h-20 object-cover rounded"
                                />
                                <span className="font-medium text-gray-800">
                                    {item.title}
                                </span>
                            </div>
                            <div className="w-1/5 text-center text-gray-600">
                                {item.price} ₽
                            </div>
                            <div className="w-1/5 flex justify-center items-center">
                                <TrashIcon
                                    onClick={() => removeFavorite(item.id)}
                                    className="h-5 w-5 cursor-pointer hover:text-red-500 text-gray-500 duration-200"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Favorites;
