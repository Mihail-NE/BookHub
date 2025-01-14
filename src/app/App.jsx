import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "./AboutPage";
import CatalogPage from "../pages/Catalog/CatalogPage";
import { DataProvider } from "../context/DataContext";

function App() {
    return (
        <DataProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                    </Routes>
                </Layout>
            </Router>
        </DataProvider>
    );
}

export default App;
