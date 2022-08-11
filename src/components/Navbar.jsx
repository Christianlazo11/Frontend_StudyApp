import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <nav className="w-full bg-black">
      <div className="max-w-screen-xl flex items-center justify-between py-5 mx-auto text-white">
        <div>
          <Link to="/" className="text-orange font-bold text-2xl">
            <span>StudyApp</span>
          </Link>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-5">
            <Link to="/login" className="text-orange text-lg font-medium">
              <span>Temas</span>
            </Link>
            <Link to="/login" className="text-orange text-lg font-medium">
              <span>Retos</span>
            </Link>
          </div>
          <Link to="/login" className="text-orange text-lg font-medium">
            <span>Iniciar Sesión</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
