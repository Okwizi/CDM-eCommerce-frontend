import Navigation from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
