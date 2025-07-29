import { Fade } from "react-awesome-reveal";
import './../App.css';

const Home = () => {
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <Fade>
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-white mb-2">CDM-Rx Pharmacy</h1>
                                    <p className="lead fw-normal text-white mb-4">Personalized Care. Trusted Solutions</p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <a className="btn btn-primary btn-lg px-4 me-sm-3" href="/shop">Shop Now</a>
                                        <a className="btn btn-outline-light btn-lg px-4" href="/about">Learn More</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <Fade>
                                <img className="img-fluid rounded-3 my-5" src="/images/Gemini_Generated_Image_86oyjy86oyjy86oy.png" alt="..."/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5 bg-dark">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <Fade>
                                <img className="img-fluid rounded mb-5 mb-lg-0" src="/images/Gemini_Generated_Image_86oyjy86oyjy86ox.png" alt="..." />
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="text-white">
                                <h2 className="fw-bolder">Customized Medication Management</h2>
                                <p className="lead fw-normal text-white mb-0">Personalized pharmaceutical care plans for chronic illnesses such as diabetes, hypertension, asthma, arthritis, and more.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-dark">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <Fade>
                                <img className="img-fluid rounded mb-5 mb-lg-0" src="/images/Gemini_Generated_Image_86oyjy86oyjy86oz.png" alt="..." />
                            </Fade>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <Fade className="text-white">
                                <h2 className="fw-bolder">Home Delivery Services</h2>
                                <p className="lead fw-normal text-white mb-0">Reliable and prompt delivery of medications to patients' homes for added convenience.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 last-section">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bolder text-white">Target Conditions We Support</h2>
                        <p className="lead fw-normal text-white mb-0">We are specialized in chronic disease care</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <Fade>
                                <div className="card h-100 shadow border-0 bg-dark bg-opacity-10">
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">Diabetes</div>
                                        <p>ssdddddkmdjwn</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <Fade>
                                <div className="card h-100 shadow border-0 bg-dark bg-opacity-10">
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">Hypertension</div>
                                        <p>ssdddddkmdjwn</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <Fade>
                                <div className="card h-100 shadow border-0 bg-dark bg-opacity-10">
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">Cardiovascular diseases</div>
                                        <p>ssdddddkmdjwn</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;