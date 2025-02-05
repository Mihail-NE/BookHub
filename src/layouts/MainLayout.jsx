import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
    return (
        <div className="flex ">
            <Sidebar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Layout;
