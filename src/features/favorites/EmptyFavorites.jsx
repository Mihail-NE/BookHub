import { Link } from "react-router-dom";
import Button from "./../../shared/components/Button/Button";
import { HeartIcon } from "@heroicons/react/24/outline";

const EmptyFavorites = () => {
    return (
        <div className="w-auto flex justify-center items-center min-h-[70vh]">
            <div className="w-4/5 mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-8">
                    <HeartIcon className="w-24 h-24 mx-auto text-gray-300" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 mobile:text-2xl">
                    Список избранного пуст
                </h2>
                <p className="text-gray-600 mb-8 mobile:text-md">
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
