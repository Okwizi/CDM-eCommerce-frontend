import { Fade } from "react-awesome-reveal";

const products = [
    { id: 1, name: 'Stethoscope', description: 'High-quality stethoscope for medical professionals.', price: '$99.99', image: '/images/Gemini_Generated_Image_86oyjy86oyjy86oy (1).png' },
    { id: 2, name: 'Blood Pressure Monitor', description: 'Automatic blood pressure monitor for home use.', price: '$49.99', image: '/images/Gemini_Generated_Image_86oyjy86oyjy86oy (2).png' },
    { id: 3, name: 'Digital Thermometer', description: 'Fast and accurate digital thermometer.', price: '$19.99', image: '/images/Gemini_Generated_Image_86oyjy86oyjy86oy (3).png' },
];

const Shop = () => {
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <Fade>
                        <div className="my-5 text-center">
                            <h1 className="display-4 fw-bolder text-white mb-2">Shop</h1>
                            <p className="lead fw-normal text-white-50 mb-4">Find the best medical supplies here.</p>
                        </div>
                    </Fade>
                </div>
            </header>
            <div className="container my-5">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <Fade>
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">{product.price}</p>
                                        <button className="btn btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
