import CartItem from "./../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import { motion } from "framer-motion";

const CartList = () => {
    const items = [
        { name: "Яблоки", price: 50, quantity: 2, total: 100 },
        { name: "Хлеб", price: 30, quantity: 1, total: 30 },
        { name: "Молоко", price: 60, quantity: 1, total: 60 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="ml-64 p-14 flex gap-10"
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
                    {items.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
            </div>
            <CartTotal items={items} />
        </motion.div>
    );
};

export default CartList;
