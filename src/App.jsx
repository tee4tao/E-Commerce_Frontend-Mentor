import { useEffect, useState } from "react";
import { FaBars, FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";
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
  const [img, setImg] = useState("");
  const [openModal, setOpenModal] = useState(false);
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
  useEffect(() => {
    const thumbnail1 = document.querySelectorAll(`.thumbnail1`);
    thumbnail1.forEach((img) => {
      img.addEventListener(`click`, () => {
        setImg(product1);
        setOpenModal(true);
      });
    });
    const thumbnail2 = document.querySelectorAll(`.thumbnail2`);
    thumbnail2.forEach((img) => {
      img.addEventListener(`click`, () => {
        setImg(product2);
        setOpenModal(true);
      });
    });
    const thumbnail3 = document.querySelectorAll(`.thumbnail3`);
    thumbnail3.forEach((img) => {
      img.addEventListener(`click`, () => {
        setImg(product3);
        setOpenModal(true);
      });
    });

    const thumbnail4 = document.querySelectorAll(`.thumbnail4`);
    thumbnail4.forEach((img) => {
      img.addEventListener(`click`, () => {
        setImg(product4);
        setOpenModal(true);
      });
    });
  }, [img]);
  return (
    <main>
      <nav className=" flex flex-col items-center md:mb-20">
        <div className="container flex justify-around items-center h-20 max-w-full md:w-3/4 xl:w-3/5 md:justify-between md:mt-4 md:mb-6">
          <div className="flex space-x-4 items-center">
            <button className="toggle-btn md:hidden">
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
            <BsCart3 className="text-3xl" />
            <img src={avatar} alt="user-img" className="user-avatar h-8" />
          </div>
        </div>
        <div className="underline hidden md:block bg-Grayish-blue text-red-400 md:max-w-full md:w-3/4 xl:w-3/5"></div>
      </nav>
      <section className="hero flex justify-center">
        <div className="hero-container flex flex-col md:flex-row md:items-center max-w-full md:w-3/4 xl:w-3/5 md:justify-around md:space-x-10 md:px-8">
          {/* {img && <img src={img} alt="" />} */}
          <div className="flex flex-col  md:w-5/12">
            <div className="img-container overflow-hidden relative">
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
              ;
              {/* {Arr.map((img) => {
                <img
                  src={img[count]}
                  alt=""
                  className="product-img object-cover w-full h-full md:hidden md:rounded-2xl"
                />;
              })} */}
              <button className="md:hidden" onClick={prevClick}>
                <FaAngleLeft className="absolute top-1/2 left-4 bg-white rounded-full text-3xl" />
              </button>
              <button className="md:hidden" onClick={nextClick}>
                <FaAngleRight className="absolute top-1/2 right-4 bg-white rounded-full text-3xl" />
              </button>
            </div>
            <div className="product-img_thumbnail hidden mt-4 overflow-hidden max-w-full md:flex space-x-5 justify-around">
              <img
                src={product1_thumbnail}
                alt=""
                // id="thumbnail1"
                className="img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl"
              />
              <img
                src={product2_thumbnail}
                alt=""
                // id="thumbnail2"
                className="img-thumbnail thumbnail2 cursor-pointer w-1/5 rounded-2xl"
              />
              <img
                src={product3_thumbnail}
                alt=""
                // id="thumbnail3"
                className="img-thumbnail thumbnail3 cursor-pointer w-1/5 rounded-2xl"
              />
              <img
                src={product4_thumbnail}
                alt=""
                // id="thumbnail4"
                className="img-thumbnail thumbnail4 cursor-pointer w-1/5 rounded-2xl"
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
          </div>
        </div>
      </section>

      <section
        className={
          openModal
            ? ` show-modal hidden md:grid place-items-center fixed top-0 w-full h-full transition-opacity duration-1000 opacity-100`
            : `opacity-0 hidden transition-opacity duration-1000`
        }
      >
        <div className="flex flex-col  md:w-5/12 relative">
          <button
            className="text-white text-3xl absolute bottom-full right-0"
            onClick={() => setOpenModal(false)}
          >
            <FaTimes />
          </button>
          <div className="img-container overflow-hidden">
            <img
              src={img}
              alt=""
              className="product-img overlay-img object-cover md:rounded-2xl w-full"
            />
            <button className="md:hidden">
              <FaAngleLeft className="absolute top-1/2 left-4 bg-white rounded-full text-3xl" />
            </button>
            <button className="md:hidden">
              <FaAngleRight className="absolute top-1/2 right-4 bg-white rounded-full text-3xl" />
            </button>
          </div>
          <div className="product-img_thumbnail hidden mt-4 overflow-hidden max-w-full md:flex space-x-5 justify-around">
            <img
              src={product1_thumbnail}
              alt=""
              // id="thumbnail1"
              className="img-thumbnail thumbnail1 cursor-pointer w-1/5 rounded-2xl"
            />
            <img
              src={product2_thumbnail}
              alt=""
              // id="thumbnail2"
              className="img-thumbnail thumbnail2 cursor-pointer w-1/5 rounded-2xl"
            />
            <img
              src={product3_thumbnail}
              alt=""
              // id="thumbnail3"
              className="img-thumbnail thumbnail3 cursor-pointer w-1/5 rounded-2xl"
            />
            <img
              src={product4_thumbnail}
              alt=""
              // id="thumbnail4"
              className="img-thumbnail thumbnail4 cursor-pointer w-1/5 rounded-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
