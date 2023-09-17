import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
              <h2 className="footer-title mb-3">
                <b>Contact</b>
              </h2>
              <div className="mb-3">
                <p>
                  <b>Address:</b> Lorem ipsum dolor sit amet
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Phone:</b>{" "}
                  <a className="footer-tel" href="tel:+1234567890">
                    Call us at +1 (234) 567-890
                  </a>
                </p>{" "}
              </div>
              <div className="mb-4">
                <p>
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Follow us on</b>
                </p>{" "}
              </div>
              <div className="socials d-flex gap-3">
                <a href="#" id="footer-link" target="_blank" className="gap-3">
                  <BsDiscord />
                </a>
                <a href="#" id="footer-link" target="_blank" className="gap-3">
                  <BsTwitter />
                </a>
                <a className="gap-3" id="footer-link">
                  <BsFacebook />
                </a>
                <a href="#" id="footer-link" target="_blank" className="gap-3">
                  <BsSlack />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>About</b>
              </h2>
              <div className="mb-3">
                {" "}
                <a href="/about" id="footer-links">
                  About Us
                </a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a href="checkout" id="footer-links">
                  Delivery
                </a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a id="footer-links">Privacy Policy</a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a id="footer-links">Terms & Conditions</a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a id="footer-links">Fee Policy</a>{" "}
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Account</b>
              </h2>
              <div className="mb-3">
                {" "}
                <a href="/login" id="footer-links">
                  Profile
                </a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a href="/cart" id="footer-links">
                  View Cart
                </a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a href="/contact" id="footer-links">
                  Help
                </a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a id="footer-links">Payments</a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a id="footer-links">My Wishlist</a>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <a id="footer-links">Coupons</a>{" "}
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <h2 className="footer-title mb-3">
                <b>Install App</b>
              </h2>
              <p className="mb-3">
                Available On Google Play Services & App Store
              </p>
              <div className="className='mb-3 col-md-6 col-12 pay">
                <div className="mb-3">
                  <a
                    href="https://play.google.com/store/games?hl=en_US&gl=US"
                    target="_blank"
                  >
                    <img
                      src="https://raderain.sirv.com/astro/pay/play.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="mb-3">
                  <a href="https://www.apple.com/app-store/" target="_blank">
                    <img
                      src="https://raderain.sirv.com/astro/pay/app.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <p className="mb-3">Payment Methods</p>
              <div className="pay">
                <a href="https://www.paypal.com/signin" target="_blank">
                  <img
                    src="https://raderain.sirv.com/astro/pay/pay.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-center text-md-start">
                &copy;Copyright goes here
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-inline text-center text-md-end">
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    Terms of Use
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
