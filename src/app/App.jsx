import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "./AboutPage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import { DataProvider } from "../context/DataContext";
import BookInfo from "../features/catalog/components/BookInfo/BookInfo";

function App() {
    return (
        <DataProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/catalog/:id" element={<BookInfo />} />
                    </Routes>
                </Layout>
            </Router>
        </DataProvider>
    );
}

export default App;
