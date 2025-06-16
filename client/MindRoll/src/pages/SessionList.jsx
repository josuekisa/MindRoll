import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SessionList = () => {
  const [list, setList] = useState([]);
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/sessions/${id}`)
      .then(function (res) {
        const newList = list.filter((items) => items.id !== id);
        setList(newList);
      })
      .catch(function (error) {
        console.log("j'ai pas reussi a supprimer l'id");
      });
  };
  return (
    <div className="bg-black h-screen text-gray-50">
      <div className="flex flex-col items-center ">
        <div className="flex flex-row justify-between items-center gap-4 py-5">
          <h1 className="text-3xl font-semibold">Sessions </h1>
          <Link
            to={"/addSession"}
            className="flex text-lg border  border-red-700 rounded-xl bg-black/50  p-3"
          >
            <FaPlus className="text-red-700 text-center " /> Ajout session
          </Link>
        </div>
        <ul>
          {list.map((list) => (
            <li className=" max-w-xl mb-4" key={list.id}>
              <div className=" flex justify-between items-center rounded-lg space-x-5 bg-gray-700  p-5 ">
                {" "}
                <div className="flex flex-col space-y-1">
                  <span> 📅 {list.date}</span>
                  <span> 🥋 {list.type} </span>
                  <span>{list.duree} min</span>
                  <span> 🧠 note : {list.note}</span>
                </div>
                <button onClick={() => handleDelete(list.id)}>
                  {" "}
                  <MdOutlineDeleteForever className=" text-red-500 text-2xl" />{" "}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SessionList;
