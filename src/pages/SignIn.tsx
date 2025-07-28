import { Fade } from "react-awesome-reveal";

const SignIn = () => {
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <Fade>
                        <div className="my-5 text-center">
                            <h1 className="display-4 fw-bolder text-white mb-2">Sign In</h1>
                            <p className="lead fw-normal text-white-50 mb-4">Access your account</p>
                        </div>
                    </Fade>
                </div>
            </header>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <Fade>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" type="submit">Sign In</button>
                                </div>
                            </form>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
