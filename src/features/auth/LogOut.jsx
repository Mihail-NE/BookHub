import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const LogOut = ({ className }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Ошибка выхода:", error.message);
        }
    };

    return (
        <button onClick={handleLogout} className={className}>
            Выйти
        </button>
    );
};

export default LogOut;
