import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ showSide, setShowSide }) => {
  return (
    <aside
      className={
        showSide
          ? `sidebar-container fixed top-0 left-0 max-w-full w-full h-full transition-all ease-linear duration-300  z-30 md:hidden overflow-hidden`
          : `w-0 h-0 overflow-hidden transition-all ease-linear duration-300`
      }
    >
      <div className="w-1/2 h-full bg-White relative">
        <button aria-label="close sidebar" onClick={() => setShowSide(false)}>
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
  );
};

export default Sidebar;
