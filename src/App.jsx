import { useEffect, useState } from "react";
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
import logo from "../src/images/logo.svg";
import avatar from "../src/images/image-avatar.png";
import product1 from "../src/images/image-product-1.jpg";
import product1_thumbnail from "../src/images/image-product-1-thumbnail.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product2_thumbnail from "../src/images/image-product-2-thumbnail.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product3_thumbnail from "../src/images/image-product-3-thumbnail.jpg";
import product4 from "../src/images/image-product-4.jpg";
import product4_thumbnail from "../src/images/image-product-4-thumbnail.jpg";

function App() {
  let [count, setCount] = useState(0);
  let [modalCount, setModalCount] = useState(0);
  let [productQuantity, setProductQuantity] = useState(0);
  let [cartQuantity, setCartQuantity] = useState("");
  const [img, setImg] = useState("");
  const [openModal, setOpenModal] = useState(false);
  let [showCart, setShowCart] = useState(false);
  let [showSide, setShowSide] = useState(false);
  const Arr = [product1, product2, product3, product4];
  // console.log(Arr);
  // Arr.map((img) => {
  //   console.log(img);
  // });
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
  const modalNextClick = () => {
    modalCount++;
    setModalCount(modalCount);
    if (modalCount == Arr.length) {
      setModalCount(0);
    }
  };
  const modalPrevClick = () => {
    modalCount--;
    setModalCount(modalCount);
    if (modalCount < 0) {
      setModalCount(Arr.length - 1);
    }
  };
  const decreaseQuantity = () => {
    setProductQuantity(productQuantity - 1);
    if (productQuantity < 1) {
      setProductQuantity(0);
    }
  };

  let thumbnail1 = () => {
    setModalCount(0);
    console.log(modalCount);
    // console.log(`thumbnail1`);
    // setImg(Arr[modalCount]);
    setOpenModal(true);
  };
  let thumbnail2 = () => {
    setModalCount(1);
    console.log(modalCount);
    // console.log(`thumbnail2`);
    // setImg(Arr[modalCount]);
    setOpenModal(true);
  };
  let thumbnail3 = () => {
    setModalCount(2);
    console.log(modalCount);
    // console.log(`thumbnail3`);
    // setImg(Arr[modalCount]);
    setOpenModal(true);
  };
  let thumbnail4 = () => {
    setModalCount(3);
    console.log(modalCount);
    // console.log(`thumbnail4`);
    // setImg(Arr[modalCount]);
    setOpenModal(true);
  };
  return (
    <main>
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
      {/* aside */}
      <aside
        className={
          showSide
            ? `sidebar-container fixed top-0 left-0 max-w-full w-full h-full transition-all ease-linear duration-300  z-30 md:hidden overflow-hidden`
            : `w-0 h-0 overflow-hidden transition-all ease-linear duration-300`
        }
      >
        <div className="w-1/2 h-full bg-White relative">
          <button onClick={() => setShowSide(false)}>
            <FaTimes className="absolute left-8 text-2xl text-Grayish-blue hover:text-Black transition-all ease-linear duration-300" />
          </button>
          <ul className="sidebar-links mt-16 ml-8 space-y-4">
            <li className="link capitalize text-xl font-semibold">
              <a href="#">collections</a>
            </li>
            <li className="link capitalize text-xl font-semibold">
              <a href="#">men</a>
            </li>
            <li className="link capitalize text-xl font-semibold">
              <a href="#">women</a>
            </li>
            <li className="link capitalize text-xl font-semibold">
              <a href="#">about</a>
            </li>
            <li className="link capitalize text-xl font-semibold">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </aside>
      <section className="hero flex justify-center">
        <div className="hero-container flex flex-col md:flex-row md:items-center max-w-full md:w-3/4 xl:w-3/5 md:justify-around md:space-x-10 md:px-8">
          {/* {img && <img src={img} alt="" />} */}

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
              {/* {Arr.map((img) => {
                <img
                  src={img[count]}
                  alt=""
                  className="product-img object-cover w-full h-full md:hidden md:rounded-2xl"
                />;
              })} */}
              {!showCart && (
                <button className="md:hidden" onClick={prevClick}>
                  <FaAngleLeft className="absolute top-1/2 left-4 bg-white rounded-full text-3xl" />
                </button>
              )}
              {/*only display the nav-btn when the cart items is not displayed*/}
              {!showCart && (
                <button className="md:hidden" onClick={nextClick}>
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
                Obcaecati est temporibus dolorem eligendi? Vero soluta
                voluptatum dolores dolorem quidem voluptas explicabo!
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
                  className="decrease-quantity text-Orange"
                  onClick={decreaseQuantity}
                >
                  <FaMinus />
                </button>
                <div className="text-2xl">{productQuantity}</div>
                <button
                  className="increase-quantity text-Orange"
                  onClick={() => setProductQuantity(productQuantity + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="AddToCart-container w-3/4 h-12 p-2 rounded-lg flex justify-center items-center space-x-5 bg-Orange mb-2 md:w-6/12 text-White text-xl"
                onClick={() => setCartQuantity(productQuantity)}
              >
                <BsCart3 /> <div>Add to cart</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          openModal ? ` show-modal modal-container` : `modal-container`
        }
      >
        <div className="flex flex-col  md:w-5/12 relative">
          <button
            className="text-white text-3xl absolute bottom-full right-0"
            onClick={() => setOpenModal(false)}
          >
            <FaTimes />
          </button>
          <div className="img-container relative">
            <img
              src={Arr[modalCount]}
              alt=""
              className="product-img overlay-img object-cover md:rounded-2xl w-full"
            />
            <button onClick={modalPrevClick}>
              <FaAngleLeft className="absolute top-1/2 -left-8 bg-white rounded-full text-3xl" />
            </button>
            <button onClick={modalNextClick}>
              <FaAngleRight className="absolute top-1/2 -right-8 bg-white rounded-full text-3xl" />
            </button>
          </div>
          <div className="product-img_thumbnail hidden mt-4 overflow-hidden max-w-full md:flex space-x-5 justify-around">
            <img
              src={product1_thumbnail}
              alt=""
              // id="thumbnail1"
              className={
                modalCount === 0
                  ? `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl border-4 border-Orange opacity-50 `
                  : `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl transition-all duration-300 hover:opacity-50`
              }
              onClick={thumbnail1}
            />
            <img
              src={product2_thumbnail}
              alt=""
              // id="thumbnail2"
              className={
                modalCount === 1
                  ? `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl border-4 border-Orange opacity-50`
                  : `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl transition-all duration-300 hover:opacity-50`
              }
              onClick={thumbnail2}
            />
            <img
              src={product3_thumbnail}
              alt=""
              // id="thumbnail3"
              className={
                modalCount === 2
                  ? `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl border-4 border-Orange opacity-50`
                  : `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl transition-all duration-300 hover:opacity-50`
              }
              onClick={thumbnail3}
            />
            <img
              src={product4_thumbnail}
              alt=""
              // id="thumbnail4"
              className={
                modalCount === 3
                  ? `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl border-4 border-Orange opacity-50`
                  : `img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl transition-all duration-300 hover:opacity-50`
              }
              onClick={thumbnail4}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
