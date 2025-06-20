import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "animate.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black shadow-2xl ">
      <div className=" flex flex-row gap-3 justify-between">
        <div className="text-slate-50 flex items-center space-x-4 ">
          <button onClick={handleToogle}>
            <GiHamburgerMenu className="text-3xl" />
          </button>

          <p className="font-bold text-3xl">MindRoll</p>
        </div>

        <div className="flex justify-end items-end text-gray-50 space-x-4 py-4 mr-3 ">
          {!isOpen && (
            <>
              {" "}
              <Link
                to={"/Login"}
                className="border border-indigo-700 bg-black/50 p-3"
              >
                Se connecter{" "}
              </Link>
              <Link
                to={"/register"}
                className="border border-indigo-700 bg-black/50 p-3"
              >
                S'enregistrer{" "}
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar menu */}
      {isOpen && (
        <div
          className={`  text-white fixed h-screen top-0 left-0 w-64 bg-black  z-50 p-5 flex flex-col gap-4 ${
            isOpen
              ? "animate__animated animate__fadeInLeft"
              : "animate__animated animate__fadeInRight"
          }  `}
        >
          <div className="">
            <button onClick={handleToogle}>
              <IoMdClose className="text-3xl" />
            </button>
          </div>

          {/* Links */}
          <Link to="/">Accueil</Link>
          <Link to="/addSession">Ajout sessions</Link>
          <Link to="/sessionList">Listes séances</Link>
          <Link to="/Historique">Historique</Link>
          <Link>Progression</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
