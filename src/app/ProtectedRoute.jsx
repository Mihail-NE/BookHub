import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <div>Загрузка...</div>;

    if (!user)
        return <Link to="/login"><button>регистрация</button></Link>;

    return children;
};
