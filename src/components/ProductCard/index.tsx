// import { ShopContext } from "./shopcontext";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
// import Details from "../pages/details";
// import { Rating } from "@smastrom/react-rating";
import ReactStarsRating from "react-awesome-stars-rating";

const ProductCard = (props) => {
  const { product = {} } = props || {};
  const { id, title, price, image, category, rating } = product;
  //   const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);
  //   const cartItemAmount = cartItems[id];
  //   return (
  //     <>
  //       <div className="col mb-5">
  //         <a key={id} className="card h-100 m-auto">
  //           <img src={image} className="card-img-top img-fluid" alt="..." />
  //           <div className="card-body">
  //             <p className="card-text mb-2">{category}</p>
  //             <h5>{title} </h5>
  //             {/* <ReactStars
  //               count={5}
  //               edit={false}
  //               value={4}
  //               size={24}
  //               activeColor="#EA9D5A"
  //             /> */}
  //             <div className="mb-3">
  //               <p className="price mb-2">
  //                 <span className="red">{price} </span>&nbsp;{" "}
  //                 <strike>{price * 2}$</strike>
  //               </p>
  //               <a href="/details" onClick={() => viewProductDetails(id)}>
  //                 <p className="text-center">
  //                   <button className="fs-4" id="clear-cart">
  //                     View Details
  //                   </button>
  //                 </p>
  //               </a>
  //             </div>
  //             <div className="d-flex justify-content-center">
  //               <button
  //                 onClick={() => {
  //                   //   addToCart(id);
  //                   //   event.target.classList.toggle("red");
  //                 }}
  //                 className="myButton"
  //               >
  //                 Add To Cart
  //                 {/* {cartItemAmount > 0 && `(${cartItemAmount})`} */}
  //               </button>
  //             </div>
  //           </div>
  //         </a>
  //       </div>
  //     </>
  //   );
  return (
    <div className="col mb-5">
      <a key={id} className="card h-100 m-auto">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <p className="card-text mb-2">{category}</p>
          <h5>{title} </h5>
          <div className="mb-3">
            <p className="price mb-2">
              <span className="red">${price} </span>&nbsp;{" "}
              <strike>${price * 2}</strike>
            </p>
          </div>
          <div>
            <ReactStarsRating value={rating?.rate || 0} size={20} />
            <label className="mx-1 position-relative" style={{ top: "4px" }}>
              ({rating?.count || ""})
            </label>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button>Add To Cart</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
