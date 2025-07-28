import { Fade } from "react-awesome-reveal";

const SignUp = () => {
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <Fade>
                        <div className="my-5 text-center">
                            <h1 className="display-4 fw-bolder text-white mb-2">Sign Up</h1>
                            <p className="lead fw-normal text-white-50 mb-4">Create a new account</p>
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
                                    <input type="text" className="form-control" id="floatingName" placeholder="Enter your name" />
                                    <label htmlFor="floatingName">Full Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" type="submit">Sign Up</button>
                                </div>
                            </form>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
