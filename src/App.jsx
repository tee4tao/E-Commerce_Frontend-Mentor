import { useState } from "react";
import { FaBars, FaAngleRight, FaAngleLeft } from "react-icons/fa";
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
  const [count, setCount] = useState(0);
  const Arr = [product1, product2, product3, product4];
  // console.log(Arr);
  Arr.map((img) => {
    console.log(img);
  });

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
          <div className="flex flex-col  md:w-5/12">
            <div className="img-container overflow-hidden relative">
              <img
                src={product1}
                alt=""
                className="product-img object-cover w-full h-full md:rounded-2xl"
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
                className="cursor-pointer w-1/5 rounded-2xl"
              />
              <img
                src={product2_thumbnail}
                alt=""
                className="cursor-pointer w-1/5 rounded-2xl"
              />
              <img
                src={product3_thumbnail}
                alt=""
                className="cursor-pointer w-1/5 rounded-2xl"
              />
              <img
                src={product4_thumbnail}
                alt=""
                className="cursor-pointer w-1/5 rounded-2xl"
              />
            </div>
          </div>

          <div className="product-info flex justify-center mt-4 md:w-1/2">
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
