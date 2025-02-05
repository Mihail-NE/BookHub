import SignUp from "../../features/auth/SignUp";
import { motion } from "framer-motion";

const Auth = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <SignUp />
        </motion.div>
    );
};

export default Auth;
