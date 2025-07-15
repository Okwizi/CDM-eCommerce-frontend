const SignUp = () => {
    return (
        <div className="container mt-5">
            <h1>Sign Up</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="formBasicName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="formBasicName" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="formBasicEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="formBasicEmail" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="formBasicPassword" aclassName="form-label">Password</label>
                    <input type="password" aclassName="form-control" id="formBasicPassword" placeholder="Password" />
                </div>

                <div className="mb-3">
                    <label htmlFor="formBasicConfirmPassword" aclassName="form-label">Confirm Password</label>
                    <input type="password" aclassName="form-control" id="formBasicConfirmPassword" placeholder="Confirm Password" />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUp;
