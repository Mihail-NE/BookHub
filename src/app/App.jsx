import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "./AboutPage";
import CatalogPage from "../pages/Catalog/CatalogPage";


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;