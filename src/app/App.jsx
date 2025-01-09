import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
// import DashboardPage from "./DashboardPage";
// import AnalyticsPage from "./AnalyticsPage";
// import OverviewPage from "./OverviewPage";
// import TransactionsPage from "./TransactionsPage";
// import ViewersPage from "./ViewersPage";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    {/* <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/analytics/overview" element={<OverviewPage />} />
                    <Route path="/analytics/transactions" element={<TransactionsPage />} />
                    <Route path="/analytics/viewers" element={<ViewersPage />} /> */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;