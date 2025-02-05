import { StrictMode } from "react";
import Layout from "../layouts/MainLayout";
import Providers from "./Providers/Providers";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <StrictMode>
            <Providers>
                <Layout>
                    <AppRoutes />
                </Layout>
            </Providers>
        </StrictMode>
    );
}

export default App;
