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
import product1 from "../src/images/image-product-1.jpg";
import product1_thumbnail from "../src/images/image-product-1-thumbnail.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product2_thumbnail from "../src/images/image-product-2-thumbnail.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product3_thumbnail from "../src/images/image-product-3-thumbnail.jpg";
import product4 from "../src/images/image-product-4.jpg";
import product4_thumbnail from "../src/images/image-product-4-thumbnail.jpg";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

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
      <Navbar
        showCart={showCart}
        setShowCart={setShowCart}
        setShowSide={setShowSide}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
      />
      {/* aside */}
      <Sidebar showSide={showSide} setShowSide={setShowSide} />
      <Hero
        showCart={showCart}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        count={count}
        setCount={setCount}
        thumbnail1={thumbnail1}
        thumbnail2={thumbnail2}
        thumbnail3={thumbnail3}
        thumbnail14={thumbnail4}
      />

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
