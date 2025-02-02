import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuthContext();

    if (loading) return <div>Загрузка...</div>;

    if (!user)
        return (
            <Link to="/login">
                <button>регистрация</button>
            </Link>
        );

    return children;
};
