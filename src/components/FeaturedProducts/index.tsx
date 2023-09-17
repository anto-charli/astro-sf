const PRODUCTS = [
  {
    id: 0,
    image: "pr1",
    name: "Slim Fit Dress Shirt",
    price: 49.9,
    brand: "Calvin Klein",
  },
  {
    id: 1,
    image: "pr2",
    name: "Men's Dri-FIT T-Shirt",
    price: 24.9,
    brand: "Nike",
    status: "in stock",
    rate: "50% Off",
  },
  {
    id: 2,
    image: "pr3",
    name: "Women's Badge of Sport Tee",
    price: 39.9,
    brand: "Adidas",
    status: "in stock",
    rate: "50% Off",
  },
  {
    id: 3,
    image: "pr4",
    name: "Men's 1950s Sportswear T-Shirt",
    price: 49.9,
    brand: "Levi s",
    status: "in stock",
    rate: "50% Off",
  },
  {
    id: 4,
    image: "pr5",
    name: "Men's Tech 2.0 Short Sleeve T-Shirt",
    price: 49.9,
    brand: "Under Armour",
    status: "in stock",
    rate: "50% Off",
  },
  {
    id: 5,
    image: "pr6",
    name: "Women's Basic Tee, Men's Rebel Bold Tee",
    price: 9.9,
    brand: "H&M",
    status: "in stock",
    rate: "50% Off",
  },
  {
    id: 6,
    image: "pr7",
    name: "Men's Cotton Classic Short Sleeve Crew Neck T-Shirt",
    price: 39.5,
    brand: "Puma",
    status: "in stock",
    rate: "50% Off",
  },
  {
    id: 7,
    image: "pr8",
    name: "Women's Classic Fit Crewneck T-Shirt",
    price: 29.5,
    brand: "Ralph Lauren",
  },
  {
    id: 8,
    image: "pro1",
    name: "Slim Fit Dress Shirt",
    price: 49.9,
    brand: "Calvin Klein",
  },
  {
    id: 9,
    image: "pro2",
    name: "Men's Dri-FIT T-Shirt",
    price: 24.9,
    brand: "Nike",
  },
  {
    id: 10,
    image: "pro3",
    name: "Women's Badge of Sport Tee",
    price: 39.9,
    brand: "Adidas",
  },
  {
    id: 11,
    image: "pro4",
    name: "Men's 1950s Sportswear T-Shirt",
    price: 49.9,
    brand: "Levi s",
  },
  {
    id: 12,
    image: "pro5",
    name: "Men's Tech 2.0 Short Sleeve T-Shirt",
    price: 49.9,
    brand: "Under Armour",
  },
  {
    id: 13,
    image: "pro6",
    name: "Women's Basic Tee, Men's Rebel Bold Tee",
    price: 9.9,
    brand: "H&M",
  },
  {
    id: 14,
    image: "pro7",
    name: "Men's Cotton Classic Short Sleeve Crew Neck T-Shirt",
    price: 39.5,
    brand: "Puma",
  },
  {
    id: 15,
    image: "pro8",
    name: "Women's Classic Fit Crewneck T-Shirt",
    price: 29.5,
    brand: "Ralph Lauren",
  },
];

const FeaturedProducts = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
        {PRODUCTS.slice(2, 6).map((product) => (
          <div className="col mb-5">
            <div key={product.id} className="card h-100 m-auto">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text mb-2">{product.brand}</p>
                <h5 className="mb-3">{product.name} </h5>
                <div className="card-footer m-auto text-center">
                  <p className="text-danger fs-4">{product.status}</p>
                  <p className="price">
                    <span className="red"></span>{" "}
                    <strike>${product.rate} </strike>
                  </p>
                </div>
                <div className="card-footer d-md-none">
                  <div className="d-flex justify-content-between align-items-center">
                    <a to="/product" className="m-auto">
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

export default FeaturedProducts;
