import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = UseAuth();
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ form: location }} replace ></Navigate>
};

export default PrivateRoute;