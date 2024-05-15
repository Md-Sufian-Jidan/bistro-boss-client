import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="h-16">
            <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;