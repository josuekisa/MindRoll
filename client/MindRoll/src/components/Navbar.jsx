import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className=" flex flex-row gap-3 justify-between">
        {/** Logo*/}
        <div>
          <p>LOGOS</p>
        </div>
        {/** navbar desktop */}
        <ul className="hidden md:flex flex-row gap-3 ">
          <Link to={"/"}>Accueil</Link>
          <Link to={"/addSession"}>Ajout sessions</Link>
          <Link to={"/sessionList"}>Listes seances</Link>
          <Link to={"/Historique"}>Historique</Link>
          <Link>Progression</Link>
        </ul>
        {/** burger */}
        <div className="flex md:hidden">
          <button onClick={handleToogle}>
            {" "}
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/** mobile menu */}

        {isOpen && (
          <div className="flex flex-col items-center">
            <Link to={"/"}>Accueil</Link>
            <Link to={"/addSession"}>Ajout sessions</Link>
            <Link to={"/sessionList"}>Listes seances</Link>
            <Link to={"/Historique"}>Historique</Link>
            <Link>Progression</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
