import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";
import { createOrUpdateUser } from "../../firebase/users";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            await createOrUpdateUser(result.user);
            navigate("/profile");
        } catch (error) {
            console.error("Ошибка входа:", error.message);
        }
    };

    return (
        <button
            className="mt-3 w-32 block text-center bg-violet-500 text-white py-2 rounded-md"
            onClick={handleGoogleSignIn}
        >
            Войти через Google
        </button>
    );
};

export default GoogleAuth;
