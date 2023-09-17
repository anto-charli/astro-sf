const PRODUCTS1 = [
  {
    id: 16,
    image: "img1",
    name: "Slim Fit Dress Shirt",
    price: 49.9,
    brand: "Calvin Klein",
    status: "in stock",
    rate: "60% off",
  },
  {
    id: 17,
    image: "img2",
    name: "Men's Dri-FIT T-Shirt",
    price: 24.9,
    brand: "Nike",
    status: "in stock",
    rate: "60% off",
  },
  {
    id: 18,
    image: "img3",
    name: "Women's Badge of Sport Tee",
    price: 39.9,
    brand: "Adidas",
    status: "in stock",
    rate: "60% off",
  },
  {
    id: 19,
    image: "img4",
    name: "Men's 1950s Sportswear T-Shirt",
    price: 49.9,
    brand: "Levi s",
    status: "out of stock",
    rate: "normal rates",
  },
  {
    id: 20,
    image: "img5",
    name: "Men's Tech 2.0 Short Sleeve T-Shirt",
    price: 49.9,
    brand: "Under Armour",
    status: "out of stock",
    rate: "normal rates",
  },
  {
    id: 21,
    image: "img6",
    name: "Women's Basic Tee, Men's Rebel Bold Tee",
    price: 9.9,
    brand: "H&M",
    status: "out of stock",
    rate: "normal rates",
  },
  {
    id: 22,
    image: "img7",
    name: "Men's Cotton Classic Short Sleeve Crew Neck T-Shirt",
    price: 39.5,
    brand: "Puma",
    status: "out of stock",
    rate: "normal rates",
  },
  {
    id: 23,
    image: "img8",
    name: "Women's Classic Fit Crewneck T-Shirt",
    price: 29.5,
    brand: "Ralph Lauren",
    status: "out of stock",
    rate: "normal rates",
  },
];

const NewArrivals = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
        {PRODUCTS1.slice(1, 5).map((product) => (
          <div key={product.id} className="col mb-5">
            <div className="card h-100 m-auto">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text mb-2">{product.brand}</p>
                <h5 className="mb-3">{product.name} </h5>
                <div className="card-footer text-center m-auto">
                  <p className="fs-4 text-danger">{product.status} </p>
                  <p className="price">
                    <span className="red"></span>
                    <strike>{product.rate} </strike>
                  </p>
                </div>
                <div className="card-footer d-md-none">
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="/catalog" className="m-auto">
                      View products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArrivals;
