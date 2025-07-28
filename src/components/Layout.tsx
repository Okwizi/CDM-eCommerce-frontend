import Navigation from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navigation />
            <main className="flex-shrink-0">
                <Outlet />
            </main>
            <footer className="bg-dark py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; CDM-Rx 2025</div></div>
                        <div className="col-auto">
                            <a className="link-light small" href="#!">Privacy</a>
                            <span className="text-white mx-1">&middot;</span>
                            <a className="link-light small" href="#!">Terms</a>
                            <span className="text-white mx-1">&middot;</span>
                            <a className="link-light small" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
