import { Link } from "react-router-dom";
import Button from "../../shared/components/Button/Button";

const EmptyCart = () => {
    return (
        <div className="p-14 flex justify-center items-center min-h-[70vh]">
            <div className="w-2/3 mx-auto bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="mb-8">
                    <svg
                        className="w-24 h-24 mx-auto text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Ваша корзина пуста
                </h2>
                <p className="text-gray-600 mb-8">
                    Самое время добавить в неё что-нибудь интересное!
                </p>
                <Link to="/catalog">
                    <Button type="primary" size="large">
                        Перейти к книгам
                    </Button>
                </Link>
            </div>
        </div>
    );
};
export default EmptyCart;
