import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {


    const { user, isLoading } = useAppSelector((store) => store.auth);
    const location = useLocation();

    if (isLoading) {
        return <div>Loading ....</div>
    }

    if (user) {
        return children;
    }



    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;