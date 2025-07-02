import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaPlus, FaRegPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const SessionList = () => {
  const [list, setList] = useState([]);
  const [toogle, setToogle] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalMode, setModalMode] = useState(""); // "delete" ou "edit"
  const itemsPerPage = 4;

  const [editSession, setEditSession] = useState({
    date: "",
    type: "",
    duree: 0,
    note: 0,
  });

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = () => {
    axios
      .get("http://localhost:3000/sessions")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log("Erreur get:", err));
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/sessions/${id}`)
      .then(() => {
        setList(list.filter((item) => item._id !== id));
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  const handleEditSession = (id) => {
    const seance = list.find((item) => item._id === id);
    if (seance) {
      setEditSession({
        date: seance.date,
        type: seance.type,
        duree: seance.duree,
        note: seance.note,
      });
      setSelectedId(id);
      setModalMode("edit");
      setShowModal(true);
    }
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:3000/sessions/${selectedId}`, editSession)
      .then(() => {
        fetchSessions();
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  const handleToogle = () => {
    toogle ? handleSortDesc() : handleSortAsc();
    setToogle(!toogle);
  };

  const handleSortAsc = () => {
    setList([...list].sort((a, b) => new Date(a.date) - new Date(b.date)));
  };
  const handleSortDesc = () => {
    setList([...list].sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = list.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(list.length / itemsPerPage);

  const modalDelete = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white text-black rounded p-5 space-y-4 w-80">
        <h2 className="text-xl font-bold">Supprimer la séance ?</h2>
        <p>Êtes-vous sûr ?</p>
        <div className="flex justify-between">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-500 px-4 py-2 rounded text-white"
          >
            Annuler
          </button>
          <button
            onClick={() => handleDelete(selectedId)}
            className="bg-red-600 px-4 py-2 rounded text-white"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );

  const modalEdit = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white text-black rounded p-5 space-y-4 w-96">
        <h2 className="text-xl font-bold">Modifier la séance</h2>
        <label>
          Date:
          <input
            type="date"
            value={editSession.date}
            onChange={(e) =>
              setEditSession({ ...editSession, date: e.target.value })
            }
            className="w-full border p-2 mt-1"
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            value={editSession.type}
            onChange={(e) =>
              setEditSession({ ...editSession, type: e.target.value })
            }
            className="w-full border p-2 mt-1"
          />
        </label>
        <label>
          Durée:
          <input
            type="number"
            value={editSession.duree}
            onChange={(e) =>
              setEditSession({ ...editSession, duree: e.target.value })
            }
            className="w-full border p-2 mt-1"
          />
        </label>
        <label>
          Note:
          <input
            type="number"
            value={editSession.note}
            onChange={(e) =>
              setEditSession({ ...editSession, note: e.target.value })
            }
            className="w-full border p-2 mt-1"
          />
        </label>
        <div className="flex justify-between">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-500 px-4 py-2 rounded text-white"
          >
            Annuler
          </button>
          <button
            onClick={handleSaveEdit}
            className="bg-green-600 px-4 py-2 rounded text-white"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen text-gray-50 py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Sessions</h1>
          <Link
            to="/addSession"
            className="flex items-center gap-2 text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded"
          >
            <FaPlus /> Ajout session
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <li
              key={item._id}
              className="bg-gray-800 p-5 rounded-2xl shadow space-y-2"
            >
              <p>📅 {item.date}</p>
              <p>🥋 {item.type}</p>
              <p>⏱ {item.duree} min</p>
              <p>🧠 Note : {item.note}</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedId(item._id);
                    setModalMode("delete");
                    setShowModal(true);
                  }}
                >
                  <MdOutlineDeleteForever className="text-red-500 text-2xl" />
                </button>
                <button onClick={() => handleEditSession(item._id)}>
                  <FaRegPenToSquare className="text-yellow-400 text-xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="my-4 flex justify-center">
          <button
            onClick={handleToogle}
            className="bg-red-600 px-4 py-2 rounded text-white"
          >
            {toogle ? "Tri desc" : "Tri asc"}
          </button>
        </div>

        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel="Pre"
          nextLabel="Next"
          containerClassName="flex justify-center gap-2"
          pageClassName="bg-gray-700 px-3 py-1 rounded"
          activeClassName="bg-red-600 text-white"
        />

        {/* modales */}
        {showModal && modalMode === "delete" && modalDelete()}
        {showModal && modalMode === "edit" && modalEdit()}
      </div>
    </div>
  );
};

export default SessionList;
