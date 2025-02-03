import { useState } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase/config";

export const useAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");

        try {
            setLoading(true);
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (user) {
                navigate("/profile", { replace: true });
                setLoading(false);
            }
        } catch (error) {
            const errorMessages = {
                "auth/invalid-email": "Некорректный email адрес",
                "auth/user-disabled": "Аккаунт заблокирован",
                "auth/user-not-found": "Пользователь не найден",
                "auth/wrong-password": "Неверный пароль",
            };
            setError(
                errorMessages[error.code] || `Ошибка входа: ${error.message}`
            );
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");

        try {
            setLoading(true);
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const actionCodeSettings = {
                url: "http://localhost:5173/login",
                handleCodeInApp: true,
            };

            await sendEmailVerification(user, actionCodeSettings);
            setError(
                "Письмо для подтверждения отправлено. Проверьте почту и спам."
            );
            navigate("/profile", { replace: true });
            setLoading(false);
        } catch (error) {
            const errorMessages = {
                "auth/email-already-in-use":
                    "Аккаунт с таким email уже существует",
                "auth/invalid-email": "Некорректный email адрес",
                "auth/weak-password": "Слишком слабый пароль",
            };
            setError(
                errorMessages[error.code] ||
                    `Ошибка регистрации: ${error.message}`
            );
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        loading,
        handleSignIn,
        handleSignUp,
    };
};
