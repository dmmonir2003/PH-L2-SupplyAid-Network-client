import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {


    const { user } = useAppSelector((store) => store.auth);
    const location = useLocation();


    if (user) {
        return children;
    }



    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;