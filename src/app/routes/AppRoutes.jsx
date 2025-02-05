import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import HomePage from "../../pages/Home/HomePage";
import CatalogPage from "../../pages/Catalog/CatalogPage";
import Favorites from "../../pages/Favorites/Favorites";
import Auth from "../../pages/Auth/Auth";
import SignIn from "../../features/auth/SignIn";
import ProfilePage from "../../pages/Profile/Profile";
import BookInfo from "./../../features/catalog/BookInfo";
import Cart from "../../pages/Cart/Cart";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<SignIn />} />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                }
            />

            <Route path="/catalog/:id" element={<BookInfo />} />
        </Routes>
    );
};
export default AppRoutes;
