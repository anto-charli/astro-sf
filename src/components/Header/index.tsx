import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart, CgProductHunt } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  //   const { getTotalCartProducts, getTotalCartAmount } = useContext(ShopContext);
  //   const totalAmount = getTotalCartAmount();
  //   const totalProducts = getTotalCartProducts();
  const totalAmount = 0;
  const totalProducts = 0;
  //   const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="navbar-top p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
              <div className="col-md-8 me-auto">
                <p>The trending outfits at 100% off</p>
              </div>
              <div className="col-md-2">
                <a href="tel:+254708118414">Call us at +1 (234) 567-890</a>
              </div>
              <div className="col-md">
                <a className="links fs-4">
                  <CiMail />
                </a>
                <a className="links fs-4">
                  <BiPhoneCall />
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center  justify-content-between d-md-none">
              <div className="col-md-6 me-auto">
                <p>Save Upto 100%</p>
              </div>
              <div className="col-md-2 m-auto">
                <a href="tel:+254708118414">Call us</a>
              </div>
              <div className="col-md-2 m-auto">
                <a className="links fs-4">
                  <CiMail />
                </a>
                <a className="links fs-4">
                  <BiPhoneCall />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="navbar-middle sticky-top p-2 p-md-2 p-lg-2">
        <div className="container-xxl">
          <div className="row align-items-center m-0">
            <div className="col-md-2 d-flex justify-content-center">
              <button
                className="navbar-toggler d-md-none "
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon">
                  {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </button>

              <a href="/">
                <img
                  src="https://raderain.sirv.com/astro/apneck.png"
                  alt="logo"
                  className="img-fluid logo"
                />
              </a>

              <button className="cart-span fs-3 d-md-none">
                <a
                  href="cart"
                  className={"/" === "/cart" ? "active" : "not-active"}
                >
                  <CgShoppingCart />
                  <b>
                    <span>{totalProducts}</span>
                  </b>
                </a>
              </button>

              <button className="cart-span-2 fs-3 d-md-none">
                <a
                  href="login"
                  className={"/" === "/login" ? "active" : "not-active"}
                >
                  <VscAccount />
                </a>
              </button>
            </div>

            <div className="col-md-10 row col-lg-10">
              <div className="col-md-3 m-auto">
                <div className="input-group d-none d-md-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
              </div>
              <div className="col-md-6 m-auto">
                <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
                  <div className="ms-auto gap-3">
                    <a
                      href="/"
                      className={"/" === "/" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      HOME
                    </a>
                  </div>
                  <div className="ms-auto gap-3">
                    <a
                      href="/catalog"
                      className={"/" === "/shop" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      SHOP
                    </a>
                  </div>
                  <div className="ms-auto gap-3">
                    <a
                      href="/blog"
                      className={"/" === "/blog" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      BLOG
                    </a>
                  </div>
                  <div className="ms-auto gap-3">
                    <a
                      href="/about"
                      className={"/" === "/about" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </a>
                  </div>
                  <div className="ms-auto gap-3">
                    <a
                      href="/contact"
                      className={"/" === "/contact" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
                    <div className={"/" === "/" ? "active" : "not-active"}>
                      <a
                        onClick={toggleMenu}
                        href=""
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <CgProductHunt className="me-1 fs-2" />
                      </a>
                    </div>
                    <div className={"/" === "login" ? "active" : "not-active"}>
                      <a
                        onClick={toggleMenu}
                        href="/login"
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <VscAccount className="me-1 fs-2" />
                      </a>
                    </div>
                    <div className={"/" === "cart" ? "active" : "not-active"}>
                      <a
                        onClick={toggleMenu}
                        href="/cart"
                        className="d-flex align-items-center color-nav me-3 cart-span-one"
                      >
                        <CgShoppingCart className="me-1 fs-2" />
                        <div>
                          <p>
                            <b>
                              <span>{totalProducts}</span>
                            </b>
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
                <div className="menu-links mt-2">
                  <div className="mb-2">
                    <a
                      className={"/" === "/" ? "active" : "not-active"}
                      href="/"
                      onClick={toggleMenu}
                    >
                      HOME
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      className={"/" === "/shop" ? "active" : "not-active"}
                      href="/shop"
                      onClick={toggleMenu}
                    >
                      SHOP
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      className={"/" === "/blog" ? "active" : "not-active"}
                      href="/blog"
                      onClick={toggleMenu}
                    >
                      BLOG
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      className={"/" === "/about" ? "active" : "not-active"}
                      href="/about"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      className={"/" === "/contact" ? "active" : "not-active"}
                      href="/contact"
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </a>
                  </div>
                </div>

                <div className="menu-bar__actions">
                  <div className="mb-2">
                    <a
                      href=""
                      className={"/" === "/" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      <img
                        src={"https://raderain.sirv.com/astro/compare.svg"}
                        alt="compare"
                        className="d-none"
                      />
                      <span>New</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      href=""
                      className={"/" === "/" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      <img
                        src="https://raderain.sirv.com/astro/wishlist.svg"
                        alt="wishlist"
                        className="d-none"
                      />
                      <span>Wishlist</span>
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      href="/login"
                      className={"/" === "/login" ? "active" : "not-active"}
                      onClick={toggleMenu}
                    >
                      <img
                        src="https://raderain.sirv.com/astro/user.svg"
                        alt="user"
                        className="d-none"
                      />
                      <span>Account</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
