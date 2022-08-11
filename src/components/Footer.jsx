import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-screen-xl flex items-center justify-center text-white py-5">
        <span className="font-medium text-lg">
          {" "}
          Creado Por{" "}
          <a
            href="https://www.linkedin.com/in/christian-lazo-u/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange"
          >
            Christian Lazo
          </a>{" "}
          || &copy; Todos los Derechos Reservados 2022
        </span>
      </div>
    </footer>
  );
};

export default Footer;
