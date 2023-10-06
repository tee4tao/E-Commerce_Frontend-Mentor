import React from "react";
import product1 from "../src/images/image-product-1.jpg";
import product1_thumbnail from "../src/images/image-product-1-thumbnail.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product2_thumbnail from "../src/images/image-product-2-thumbnail.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product3_thumbnail from "../src/images/image-product-3-thumbnail.jpg";
import product4 from "../src/images/image-product-4.jpg";
import product4_thumbnail from "../src/images/image-product-4-thumbnail.jpg";
import {
  FaBars,
  FaAngleRight,
  FaAngleLeft,
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrashAlt,
} from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Hero = ({
  showCart,
  cartQuantity,
  setCartQuantity,
  productQuantity,
  setProductQuantity,
  count,
  setCount,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  Arr,
}) => {
  const nextClick = () => {
    count++;
    setCount(count);
    if (count == Arr.length) {
      setCount(0);
    }
  };
  const prevClick = () => {
    count--;
    setCount(count);
    if (count < 0) {
      setCount(Arr.length - 1);
    }
  };
  const decreaseQuantity = () => {
    setProductQuantity(productQuantity - 1);
    if (productQuantity < 1) {
      setProductQuantity(0);
    }
  };
  return (
    <section className="hero flex justify-center">
      <div className="hero-container flex flex-col md:flex-row md:items-center max-w-full md:w-3/4 xl:w-3/5 md:justify-around md:space-x-10 md:px-8">
        <div className="flex flex-col  md:w-5/12">
          <div className="img-container relative flex justify-center">
            <img
              src={product1}
              alt=""
              className="hidden md:block product-img object-cover w-full h-full md:rounded-2xl"
            />
            <img
              src={Arr[count]}
              alt=""
              className="product-img object-cover w-full h-full md:hidden md:rounded-2xl"
            />
            {/* cart item for mobile view */}
            {showCart && (
              <div className="cart-items absolute top-8 h-4/5 w-4/5 bg-White md:hidden rounded-2xl flex flex-col shadow-lg">
                <h3 className="text-2xl ml-8 mt-8 mb-8 font-bold">Cart</h3>
                <div className="underline md:block bg-Grayish-blue  md:max-w-full"></div>
                {(cartQuantity === 0 || !cartQuantity) && (
                  <div className="empty-text text-2xl font-semibold self-center justify-self-center">
                    Your cart is empty
                  </div>
                )}
                {cartQuantity > 0 && (
                  <div className="w-full m-auto">
                    <div className="flex w-full justify-around space-x-1 items-center">
                      <img
                        src={product1_thumbnail}
                        alt=""
                        className="w-24 rounded-2xl"
                      />
                      <div className="flex flex-col">
                        <div className=" capitalize text-2xl text-Grayish-blue">
                          fall limited edition sneakers
                        </div>
                        <div className="text-xl text-Grayish-blue">
                          $125.00 x {cartQuantity}{" "}
                          <span className="font-semibold text-Black">
                            ${(125 * cartQuantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        aria-label="delete cart items"
                        onClick={() => setCartQuantity(0)}
                      >
                        <FaTrashAlt className="text-2xl text-Grayish-blue" />
                      </button>
                    </div>
                    <button
                      aria-label="checkout cart items"
                      className="mt-4 block mx-auto bg-Orange text-White w-3/4 h-12 p-1 rounded-lg"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
            {!showCart && (
              <button
                aria-label="previous image"
                className="md:hidden"
                onClick={prevClick}
              >
                <FaAngleLeft className="absolute top-1/2 left-4 bg-white rounded-full text-3xl" />
              </button>
            )}
            {/*only display the nav-btn when the cart items is not displayed*/}
            {!showCart && (
              <button
                aria-label="next image"
                className="md:hidden"
                onClick={nextClick}
              >
                <FaAngleRight className="absolute top-1/2 right-4 bg-white rounded-full text-3xl" />
              </button>
            )}
          </div>
          <div className="product-img_thumbnail hidden mt-4 overflow-hidden max-w-full md:flex space-x-5 justify-around">
            <img
              src={product1_thumbnail}
              alt=""
              // id="thumbnail1"
              className="img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl border-4 border-Orange opacity-60"
              onClick={thumbnail1}
            />
            <img
              src={product2_thumbnail}
              alt=""
              // id="thumbnail2"
              className="img-thumbnail thumbnail2 cursor-pointer w-1/5 rounded-2xl transition-all duration-300 hover:opacity-50"
              onClick={thumbnail2}
            />
            <img
              src={product3_thumbnail}
              alt=""
              // id="thumbnail3"
              className="img-thumbnail thumbnail3 cursor-pointer w-1/5 rounded-2xl transition-all duration-300 hover:opacity-50"
              onClick={thumbnail3}
            />
            <img
              src={product4_thumbnail}
              alt=""
              // id="thumbnail4"
              className="img-thumbnail thumbnail4 cursor-pointer w-1/5 rounded-2xl transition-all duration-300 hover:opacity-50"
              onClick={thumbnail4}
            />
          </div>
        </div>

        <div className="product-info flex flex-col justify-center mx-4 md:mx-0 mt-4 md:w-1/2">
          <div className="info-container w-11/12  space-y-3 md:flex md:flex-col md:space-y-7">
            <h3 className="product-company uppercase font-bold text-Orange">
              sneaker company
            </h3>
            <h1 className="product-name capitalize text-3xl font-bold md:text-5xl">
              fall limited edition sneakers
            </h1>
            <p className="more-info text-Dark-grayish-blue font-semibold leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati est temporibus dolorem eligendi? Vero soluta voluptatum
              dolores dolorem quidem voluptas explicabo!
            </p>
          </div>
          <div className="product-price_info flex flex-row w-11/12 justify-between items-center md:items-start mt-8  md:flex-col md:space-y-1">
            <div className="flex items-center space-x-4">
              <h2 className="discounted-price text-3xl font-bold">$125.00</h2>
              <div className="dicounted-percent bg-Pale-orange text-Orange p-1 rounded text-lg font-semibold">
                50%
              </div>
            </div>
            <div className="actual-price text-Dark-grayish-blue text-lg font-semibold line-through">
              $250.00
            </div>
          </div>
          <div className="cart-quantity_container w-11/12 flex flex-col items-center md:flex-row mt-4 md:space-x-2">
            <div className="quantity-container w-3/4 h-12 p-2 rounded-lg flex justify-between bg-Light-grayish-blue mb-2 md:w-2/5">
              <button
                aria-label="decrease item quantity"
                className="decrease-quantity text-Orange"
                onClick={decreaseQuantity}
              >
                <FaMinus />
              </button>
              <div className="text-2xl">{productQuantity}</div>
              <button
                aria-label="increase item quantity"
                className="increase-quantity text-Orange"
                onClick={() => setProductQuantity(productQuantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <button
              aria-label="add item to cart"
              className="AddToCart-container w-3/4 h-12 p-2 rounded-lg flex justify-center items-center space-x-5 bg-Orange mb-2 md:w-6/12 text-White text-xl"
              onClick={() => setCartQuantity(productQuantity)}
            >
              <BsCart3 /> <div>Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
