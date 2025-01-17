import CartItem from "./../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "./../../../../context/DataContext";

const CartList = () => {
    const { state } = useContext(DataContext);


    const cartProducts = state.cart.map((item) => item);
    console.log(cartProducts);


    if (cartProducts.length === 0) {
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
                    <p>Корзина пуста</p>
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
            </div>
            <CartTotal items={cartProducts} />
        </motion.div>
    );
};

export default CartList;
