import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/home");
        } catch (error) {
            console.error("Ошибка выхода:", error.message);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded"
        >
            Выйти
        </button>
    );
};

export default LogOut;