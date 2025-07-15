const products = [
    { id: 1, name: 'Stethoscope', description: 'High-quality stethoscope for medical professionals.', price: '$99.99' },
    { id: 2, name: 'Blood Pressure Monitor', description: 'Automatic blood pressure monitor for home use.', price: '$49.99' },
    { id: 3, name: 'Digital Thermometer', description: 'Fast and accurate digital thermometer.', price: '$19.99' },
];

const Shop = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Medical Supplies</h1>
                </div>
            </div>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;