import { HashRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";


export const AppRoutes = () => {
    return (
        
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </HashRouter>
     
    );
}
