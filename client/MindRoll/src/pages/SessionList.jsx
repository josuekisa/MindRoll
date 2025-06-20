import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SessionList = () => {
  const [list, setList] = useState([]);
  const [toogle, setToogle] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/sessions")
      .then(function (res) {
        console.log(res.data);
        setList(res.data);
      })

      .catch(function (error) {
        console.log("j'arrive pas avoir acces aux seances.");
      });
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/sessions/${id}`)
      .then(function (res) {
        const newList = list.filter((items) => items._id !== id);
        setList(newList);
      })
      .catch(function (error) {
        console.log("j'ai pas reussi a supprimer l'id");
      });
  };

  const handleSortAsc = () => {
    const sessionSort = [...list].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setList(sessionSort);
  };

  const handleSortDesc = () => {
    const sessionSort = [...list].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setList(sessionSort);
  };
  const handleToogle = () => {
    toogle ? handleSortDesc() : handleSortAsc();
    setToogle(!toogle);
  };
  return (
    <div className="bg-gradient-to-b from-black to-gray-800  min-h-screen text-gray-50 py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h1 className="text-4xl font-bold mb-4 sm:mb-0">Sessions</h1>
          <Link
            to="/addSession"
            className="flex items-center gap-2 text-white bg-red-700 hover:bg-red-800 transition rounded-xl px-4 py-2"
          >
            <FaPlus />
            Ajout session
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item) => (
            <li key={item._id}>
              <div className="bg-gray-800 rounded-2xl shadow-md p-5 hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between h-full">
                <div className="space-y-2 text-lg">
                  <p className="text-red-500">📅 {item.date}</p>
                  <p>🥋 {item.type}</p>
                  <p>⏱ {item.duree} min</p>
                  <p className="text-blue-400">🧠 Note : {item.note}</p>
                </div>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="self-end mt-4 hover:text-red-600 transition"
                >
                  <MdOutlineDeleteForever className="text-red-500 text-2xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={handleToogle}
          className="bg-red-500 rounded-2xl p-3 my-4"
        >
          {toogle ? "tri desc" : "tri asc"}
        </button>
      </div>
    </div>
  );
};

export default SessionList;
