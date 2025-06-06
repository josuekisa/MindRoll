import React from "react";
import bg from "../assets/JJB-Training.jpeg";

const Homepage = () => {
  return (
    <div
      className=" relative h-screen  md:w-full w-auto  bg-cover bg-center bg-no-repeat  bg-fixed   "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col  justify-center  absolute bg-black/70 inset-0 ">
        <div className=" flex  flex-col justify-center items-center font-sans   ">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-50">
            {" "}
            Mind Roll{" "}
          </h1>
          <div className="text-gray-50 text-2xl">
            <span className="block">Suivez vos Perfs en Jiu-Jitsu</span>
            <span className="block text-center">Brésilien</span>
          </div>
          <div className="py-4">
            {" "}
            <button className="bg-red-500 rounded-lg p-3 text-lg text-gray-50 ">
              {" "}
              Ajouter votre 1ére séance
            </button>
          </div>
        </div>

        {/**grid */}

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 text-gray-50 font-sans font-semibold md:gap-x-5 gap-y-5 py-5 text-center ">
            <div>
              <span className="">📈</span>
              <h2 className=""> Suivi de progression</h2>
              <p>Note, durée, type de séance et plus.</p>
            </div>

            <div>
              <span>🧠</span>
              <h2> Clarté mentale</h2>
              <p>Gardez une trace de vos évolutions mentales.</p>
            </div>

            <div>
              <span>💪 </span>
              <h2>Objectifs visibles</h2>
              <p>Vos statistiques, vos résultats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
