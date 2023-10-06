import { useEffect, useState } from "react";

import product1 from "../src/images/image-product-1.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product4 from "../src/images/image-product-4.jpg";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Modal from "./Modal";

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

  let thumbnail1 = () => {
    setModalCount(0);
    setOpenModal(true);
  };
  let thumbnail2 = () => {
    setModalCount(1);
    setOpenModal(true);
  };
  let thumbnail3 = () => {
    setModalCount(2);
    setOpenModal(true);
  };
  let thumbnail4 = () => {
    setModalCount(3);
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
        thumbnail4={thumbnail4}
        Arr={Arr}
      />

      <Modal
        thumbnail1={thumbnail1}
        thumbnail2={thumbnail2}
        thumbnail3={thumbnail3}
        thumbnail4={thumbnail4}
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalCount={modalCount}
        setModalCount={setModalCount}
        Arr={Arr}
      />
    </main>
  );
}

export default App;
