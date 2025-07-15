const SignIn = () => {
    return (
        <div className="container mt-5">
            <h1>Sign In</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="formBasicEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="formBasicEmail" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="formBasicPassword" aclassName="form-label">Password</label>
                    <input type="password" aclassName="form-control" id="formBasicPassword" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignIn;
