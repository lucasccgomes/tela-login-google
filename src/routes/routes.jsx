import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/tela-login-google/" element={<Login />} />
                <Route path="/tela-login-google/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
