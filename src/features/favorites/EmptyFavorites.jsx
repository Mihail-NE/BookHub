import { Link } from "react-router-dom";
import Button from "./../../shared/components/Button/Button";
import { HeartIcon } from "@heroicons/react/24/outline";

const EmptyFavorites = () => {
    return (
        <div className="p-14 flex justify-center items-center min-h-[70vh]">
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
                    <Button type="primary" size="large">
                        Найти книги
                    </Button>
                </Link>
            </div>
        </div>
    );
};
export default EmptyFavorites;
