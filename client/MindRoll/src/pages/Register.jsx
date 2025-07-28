import React from "react";
import bg from "../assets/JJB-Training.JPEG";
export const Register = () => {
  return (
    <div
      className="  h-screen w-screen flex  justify-center items-center   bg-cover bg-center bg-no-repeat  bg-fixed "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" flex flex-col items-center justify-center text-gray-50 inset-0 bg-black w-96 h-96">
        <h1 className="font-bold text-2xl">S'enregistrer</h1>
        <div className="flex flex-col items-center space-y-3  p-3">
          <input
            className="p-3 bg-gray-500"
            type="email"
            placeholder="E-mail"
          />
          <input className="p-3 bg-gray-500" type="text" placeholder="Nom" />
          <input className="p-3 bg-gray-500" type="text" placeholder="Prenom" />

          <input
            className="p-3 bg-gray-500"
            type="password"
            placeholder="Mot de passe"
          />
        </div>
        <button className="bg-indigo-400 mt-3 rounded-lg p-3">
          Me connecter
        </button>
      </div>
    </div>
  );
};
