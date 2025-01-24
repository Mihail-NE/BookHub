import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "./AboutPage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import { DataProvider } from "../context/DataContext";
import BookInfo from "../features/catalog/BookInfo/BookInfo";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";

function App() {
    return (
        <DataProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/catalog/:id" element={<BookInfo />} />
                    </Routes>
                </Layout>
            </Router>
        </DataProvider>
    );
}

export default App;
