import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import { DataProvider } from "../context/DataContext";
import BookInfo from "../features/catalog/BookInfo/BookInfo";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import { AuthProvider } from "../context/AuthContext";
import Auth from "../pages/Auth/Auth";
import Profile from "../pages/Profile/Profile";
import { ProtectedRoute } from "./ProtectedRoute";
import SignIn from "./../features/auth/SignIn";

function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <Router>
                    <Layout>
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
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />

                            <Route path="/catalog/:id" element={<BookInfo />} />
                        </Routes>
                    </Layout>
                </Router>
            </DataProvider>
        </AuthProvider>
    );
}

export default App;
