import React from "react";
import bg from "../assets/JJB-Training.JPEG";
const Login = () => {
  return (
    <div className=" bg-gradient-to-b from-black to-gray-800  h-screen w-screen flex  justify-center items-center  ">
      <div className=" flex flex-col items-center justify-center text-gray-50 inset-0 bg-black w-96 h-96">
        <h1 className="font-bold text-2xl">S'identifier</h1>
        <div className="flex flex-col items-center space-y-3  p-3">
          <input
            className="p-3 bg-gray-500"
            type="email"
            placeholder="E-mail"
          />
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

export default Login;
