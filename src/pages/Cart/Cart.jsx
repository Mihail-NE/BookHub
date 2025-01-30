import CartList from "./../../features/cart/CartList/CartList";
import { motion } from "framer-motion";

const Cart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <CartList />
        </motion.div>
    );
};

export default Cart;
