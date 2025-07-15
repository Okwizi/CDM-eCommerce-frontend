import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Hospital</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basic-navbar-nav">
                    <div className="navbar-nav me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </div>
                    <div className="navbar-nav">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="basic-nav-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
                                <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
