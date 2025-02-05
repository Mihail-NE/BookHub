import { useAuthContext } from "../../shared/context/AuthContext";
import Sceleton from "../../shared/components/Sceleton/Sceleton";
import AnonymousProfile from "../../features/profile/AnonymousProfile";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuthContext();

    if (loading) return <Sceleton />;

    if (!user) return <AnonymousProfile />;

    return children;
};
