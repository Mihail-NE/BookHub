import CartItem from "./../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { Link } from "react-router-dom";

const CartList = () => {
    const { state, dispatch } = useContext(DataContext);

    const cartProducts = state.cart.map((item) => item);

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };

    if (cartProducts.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-14 flex justify-center items-center min-h-[70vh]"
            >
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
                        <button className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Перейти к книгам
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
                    Корзина
                </h2>

                <div className="flex justify-between items-center bg-gray-50 rounded-t-lg p-4 border-b">
                    <div className="w-2/5 text-gray-600 font-semibold">
                        Товар
                    </div>
                    <div className="w-1/5 text-center text-gray-600 font-semibold">
                        Цена
                    </div>
                    <div className="w-1/5 text-center text-gray-600 font-semibold">
                        Количество
                    </div>
                    <div className="w-1/5 text-center text-gray-600 font-semibold">
                        Итого
                    </div>
                </div>

                <div className="divide-x">
                    {cartProducts.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
                <div className="border-t border-gray-200 my-8">
                    <button
                        onClick={clearCart}
                        className="mt-4 px-4 py-2 text-red-500 hover:text-red-600 text-sm font-medium rounded-lg border border-red-200 hover:bg-red-50 transition-colors duration-200"
                    >
                        Очистить корзину
                    </button>
                </div>
            </div>
            <CartTotal items={cartProducts} />
        </motion.div>
    );
};

export default CartList;
