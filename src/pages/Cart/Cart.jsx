import { motion } from "framer-motion";
import CartLayout from "../../layouts/CartLayout";

const Cart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <CartLayout />
        </motion.div>
    );
};

export default Cart;
