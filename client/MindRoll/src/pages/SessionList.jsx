import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const SessionList = () => {
  const [list, setList] = useState([]);
  const [toogle, setToogle] = useState(true);
  const [listInput, setListInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
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
  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  const Offset = currentPage * itemsPerPage;
  const currentItems = list.slice(Offset, Offset + itemsPerPage);

  const PageCount = Math.ceil(list.length / itemsPerPage);
  const modalConfirmation = () => {
    return (
      <div className="fixed flex items-center justify-center top-0 right-0 bg-black opacity-75 h-full w-full z-51">
        <div className=" flex flex-col items-center text-black space-y-3 bg-gray-300  w-96">
          <h1>Supprimer La séance ?</h1>
          <h2>Voulez vous vraiment supprimer la seance </h2>
          <div className="grid grid-cols-2 text-amber-50 ">
            <button
              onClick={() => setShowModal(false)}
              className="p-4 bg-gray-600"
            >
              {" "}
              Annuler
            </button>

            <button
              className="p-4 bg-red-600"
              onClick={() => {
                handleDelete(selectedId);
              }}
            >
              {" "}
              Supprimer
            </button>
          </div>
        </div>
      </div>
    );
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
        <div></div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <li key={item._id}>
              <div className="bg-gray-800 rounded-2xl shadow-md p-5 hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between h-full">
                <div className="space-y-2 text-lg">
                  <p className="text-red-500">📅 {item.date}</p>
                  <p>🥋 {item.type}</p>
                  <p>⏱ {item.duree} min</p>
                  <p className="text-blue-400">🧠 Note : {item.note}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedId(item._id);
                    setShowModal(true);
                  }}
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
        <div className="flex gap-5 justify-center">
          <ReactPaginate
            pageCount={PageCount}
            onPageChange={handlePageClick}
            previousLabel="Pre"
            nextLabel="Next"
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
        {showModal && modalConfirmation()}
      </div>
    </div>
  );
};

export default SessionList;
