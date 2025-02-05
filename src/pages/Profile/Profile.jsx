import Profile from "./../../features/profile/Profile";
import { motion } from "framer-motion";

const ProfilePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Profile />
        </motion.div>
    );
};

export default ProfilePage;
