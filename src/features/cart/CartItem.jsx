import { useContext } from "react";
import { DataContext } from "../../shared/context/DataContext";
import { TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({ item }) => {
    const { dispatch } = useContext(DataContext);

    const handlePlus = () => {
        dispatch({
            type: "INCREMENT_QUANTITY",
            payload: item.id,
        });
    };

    const handleMinus = () => {
        if (item.quantity > 1) {
            dispatch({
                type: "DECREMENT_QUANTITY",
                payload: item.id,
            });
        }
    };
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item.id,
        });
    };

    return (
        <div className="relative flex justify-between items-center p-4 border-b hover:bg-gray-50 transition mobile:p-1">
            <div className="w-2/5 flex items-center gap-4 mobile:w-4/5">
                <img
                    src={item.cover}
                    alt={item.title}
                    className="w-16 h-20 object-cover rounded"
                />
                <span className="font-medium text-gray-800 line-clamp-3 text-ellipsis">
                    {item.title}
                </span>
            </div>

            <div className="w-1/5 text-center text-gray-600 mobile:hidden">
                {item.price} ₽
            </div>

            <div className="w-1/5 text-center mobile:hidden">
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={handleMinus}
                        className="p-1 rounded hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="w-8 text-center mobile:hidden">
                        {item.quantity}
                    </span>
                    <button
                        onClick={handlePlus}
                        className="p-1 rounded hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="w-1/5 text-center font-medium text-gray-800">
                {item.price * item.quantity} ₽
            </div>
            <span className="absolute right-4 top-[50%] translate-y-[-50%] mobile:hidden">
                <TrashIcon
                    onClick={removeFromCart}
                    className="h-5 w-5 cursor-pointer hover:text-red-500 text-gray-500 duration-200"
                />
            </span>
        </div>
    );
};

export default CartItem;
