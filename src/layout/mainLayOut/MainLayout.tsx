
import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;