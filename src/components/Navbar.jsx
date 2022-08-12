import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPlus } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOpenMenu((prev) => {
        !prev;
      });
    };
  }, []);

  return (
    <nav className="w-full bg-grey z-50 fixed">
      <div className="max-w-screen-xl flex items-center justify-between py-5 mx-4 md:mx-auto text-white">
        <div>
          <Link to="/" className="text-orange font-bold text-2xl">
            <span>StudyApp</span>
          </Link>
        </div>

        <div className="flex gap-5">
          <Link to="/login" className="md:order-2 flex items-center">
            <span className="text-lg font-medium bg-orange rounded-full py-1 px-4 hover:bg-yellow-700">
              Iniciar Sesión
            </span>
          </Link>
          <div className="flex items-center gap-5 md:order-1">
            <div
              className="md:hidden"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              {openMenu ? (
                <FaPlus className="text-orange rotate-45 text-2xl my-2 sm:mt-3" />
              ) : (
                <FaBars className="text-orange text-2xl my-2 sm:mt-3" />
              )}
            </div>

            <div
              className={`bg-grey flex flex-col gap-3 md:flex-row md:items-center md:pb-0 pb-6 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 md:order-1 transition-all duration-2000 ease gap-2 ${
                openMenu ? "top-20" : "top-[-490px]"
              }`}
            >
              <Link
                to="/login"
                className="text-orange text-2xl md:text-lg font-medium"
              >
                <span>Temas</span>
              </Link>
              <Link
                to="/login"
                className="text-orange text-2xl md:text-lg font-medium"
              >
                <span>Retos</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
