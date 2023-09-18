import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import logo from "../src/images/logo.svg";
import avatar from "../src/images/image-avatar.png";
import product1 from "../src/images/image-product-1.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <nav className=" flex justify-center">
        <div className="container flex justify-around items-center h-20 max-w-full lg:w-3/4 lg:justify-between xl:justify-around">
          <div className="flex space-x-4 items-center">
            <button className="toggle-btn lg:hidden">
              <FaBars className="text-2xl" />
            </button>
            <div className="flex space-x-7 items-center xl:space-x-28">
              <img src={logo} alt="sneakers" className="logo" />
              <ul className="links hidden lg:flex space-x-3">
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
          <div className="flex space-x-6 items-center">
            <BsCart3 className="text-3xl" />
            <img src={avatar} alt="user-img" className="user-avatar h-8" />
          </div>
        </div>
      </nav>
      <section className="hero flex flex-col lg:flex-row">
        <img
          src={product1}
          alt=""
          className="product-img object-cover lg:w-1/2"
        />
        <div className="product-info flex justify-center mt-4">
          <div className="info-container w-11/12  space-y-3">
            <h3 className="product-company uppercase font-bold text-Orange">
              sneaker company
            </h3>
            <h1 className="product-name capitalize text-3xl font-bold">
              fall limited edition sneakers
            </h1>
            <p className="more-info text-Dark-grayish-blue font-semibold leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati est temporibus dolorem eligendi? Vero soluta voluptatum
              dolores dolorem quidem voluptas explicabo!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
