import React from "react";
import { FaBars, FaTrashAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import logo from "../src/images/logo.svg";
import avatar from "../src/images/image-avatar.png";
import product1_thumbnail from "../src/images/image-product-1-thumbnail.jpg";

const Navbar = ({
  showCart,
  setShowCart,
  setShowSide,
  cartQuantity,
  setCartQuantity,
}) => {
  return (
    <nav className=" flex flex-col items-center md:mb-20">
      <div className="container relative flex justify-around items-center h-20 max-w-full md:w-3/4 xl:w-3/5 md:justify-between md:mt-4 md:mb-6">
        <div className="flex space-x-4 items-center">
          <button
            className="toggle-btn md:hidden"
            onClick={() => setShowSide(true)}
          >
            <FaBars className="text-2xl" />
          </button>
          <div className="flex md:space-x-3 lg:space-x-6 items-center xl:space-x-28">
            <img src={logo} alt="sneakers" className="logo" />
            <ul className="links hidden md:flex space-x-2">
              <li className="link capitalize text-Dark-grayish-blue text-lg">
                <a href="#">collections</a>
              </li>
              <li className="link capitalize text-Dark-grayish-blue text-lg">
                <a href="#">men</a>
              </li>
              <li className="link capitalize text-Dark-grayish-blue text-lg">
                <a href="#">women</a>
              </li>
              <li className="link capitalize text-Dark-grayish-blue text-lg">
                <a href="#">about</a>
              </li>
              <li className="link capitalize text-Dark-grayish-blue text-lg">
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-3 lg:space-x-6 items-center">
          <button className="relative" onClick={() => setShowCart(!showCart)}>
            <BsCart3
              className={
                showCart
                  ? `text-3xl text-Black transition-all duration-300`
                  : `text-3xl text-Dark-grayish-blue transition-all duration-300`
              }
            />
            {cartQuantity > 0 && (
              <div className="absolute -top-4 -right-2 bg-Orange rounded-full w-7 h-7 text-White">
                {cartQuantity}
              </div>
            )}
          </button>
          <img
            src={avatar}
            alt="user-img"
            className="user-avatar h-8 md:h-10"
          />
        </div>
        {/* cart item for desktop view */}
        {showCart && (
          <div className="cart-items hidden absolute top-16 right-0 z-10 w-96 h-80 bg-Light-grayish-blue md:flex rounded-2xl flex-col self-end shadow-lg">
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
                  <button onClick={() => setCartQuantity(0)}>
                    <FaTrashAlt className="text-2xl text-Grayish-blue" />
                  </button>
                </div>
                <button className="mt-4 block mx-auto bg-Orange text-White w-3/4 h-12 p-1 rounded-lg">
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="underline hidden md:block bg-Grayish-blue text-red-400 md:max-w-full md:w-3/4 xl:w-3/5"></div>
    </nav>
  );
};

export default Navbar;
