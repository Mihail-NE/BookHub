import Button from "../../shared/components/Button/Button";
import { useContext } from "react";
import { DataContext } from "../../shared/context/DataContext";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";

const CartList = ({ cartProducts }) => {
    const { dispatch } = useContext(DataContext);

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };

    return (
        <div className="p-14 flex gap-10">
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
                    <Button
                        onClick={clearCart}
                        type="danger"
                        size="small"
                        className="mt-4"
                    >
                        {" "}
                        Очистить корзину
                    </Button>
                </div>
            </div>
            <CartTotal items={cartProducts} />
        </div>
    );
};
export default CartList;
