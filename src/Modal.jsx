import React from "react";
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

const Modal = ({
  openModal,
  setOpenModal,
  modalCount,
  setModalCount,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  Arr,
}) => {
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
  return (
    <section
      className={openModal ? ` show-modal modal-container` : `modal-container`}
    >
      <div className="flex flex-col  md:w-5/12 relative">
        <button
          aria-label="closs modal"
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
          <button aria-label="previous image" onClick={modalPrevClick}>
            <FaAngleLeft className="absolute top-1/2 -left-8 bg-white rounded-full text-3xl" />
          </button>
          <button aria-label="next image" onClick={modalNextClick}>
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
  );
};

export default Modal;
