import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../shared/context/AuthContext";
import { DataProvider } from "../../shared/context/DataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
            },
        },
    });

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <DataProvider>{children}</DataProvider>
                </AuthProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};
export default Providers;
