import React, { useState, useEffect } from "react";
import axios from "axios";

const Historique = () => {
  const [storage, setStorage] = useState([]);
  const [fill, setFill] = useState("");
  const [filteredStorage, setFilteredStorage] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/sessions")
      .then(function (res) {
        console.log(res.data);
        setStorage(res.data);
      })
      .catch(function (res) {
        console.log("j'arrive pas a avoir acces au seances");
      });
  }, []);

  useEffect(() => {
    const filtered = storage.filter(
      (session) =>
        session.type.toLowerCase().includes(fill.toLowerCase()) ||
        session.note.toString().includes(fill)
    );
    setStorage(filtered);
  }, [fill, storage]);

  const handleDate = () => {
    const date = [...storage];
    date.sort((a, b) => new Date(a.date) - new Date(b.date));
    setStorage(date);
  };
  /*const handleFilter = () => {
    const filtered = storage.filter((session) =>
      session.type.toLowerCase().includes(fill.toLowerCase()) ||
      session.note.toString().includes(fill)
    );
    setStorage(filtered);
  };
*/
  const handleInput = (e) => {
    setFill(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="text-center " htmlFor="recherche">
        Recherche D'une seance
      </label>
      <input
        value={handleInput}
        onChange={handleFilter}
        className="bg-gray-100"
        type="text"
      />

      <ul className="">
        {storage.map((item) => (
          <li key={item.id}>
            📅 {item.date} — 🥋 {item.type} — 🧠 note : {item.note}
          </li>
        ))}
      </ul>
      <button
        className="mt-3 py-4 bg-gray-400 rounded-xl p-4"
        onClick={handleDate}
      >
        Trier par date
      </button>
    </div>
  );
};

export default Historique;
