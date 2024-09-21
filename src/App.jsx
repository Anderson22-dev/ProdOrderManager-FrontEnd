import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth.jsx";
import { AppRoutes } from "./routes/routes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
