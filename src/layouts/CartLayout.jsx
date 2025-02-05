import { useContext } from "react";
import EmptyCart from "../features/cart/EmptyCart";
import CartList from "../features/cart/CartList";
import { DataContext } from "../shared/context/DataContext";

const CartLayout = () => {
    const { state } = useContext(DataContext);

    const cartProducts = state.cart.map((item) => item);

    return (
        <>
            {cartProducts.length === 0 ? (
                <EmptyCart />
            ) : (
                <CartList cartProducts={cartProducts} />
            )}
        </>
    );
};

export default CartLayout;
