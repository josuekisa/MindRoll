import { useState, React } from "react";
import axios from "axios";
import wp from "../assets/wp.jpg";

const AddSession = () => {
  const [formData, setFormData] = useState({
    date: "",
    duree: "",
    type: "",
    note: "",
    soumissionsReussies: "",
  });

  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    axios
      .post("http://localhost:3000/sessions", formData)
      .then(function (res) {
        console.log(res.data);
        setShowModal(!showModal);
        e.preventDefault();
      })
      .catch(function (error) {
        console.log("j'ai pas reussi a envoyer les données");
      });
    e.preventDefault();
    console.log(formData);
  };

  const modalConfirmation = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-100 ">
        <div className="bg-white text-black rounded p-7 space-y-4 w-80 ">
          <div className=" text-center space-y-3 ">
            <h2> La seance a été cree avec succes</h2>
            <button
              onClick={() => setShowModal(!showModal)}
              className="bg-red-600 px-4 py-2 rounded text-white"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" relative bg-gradient-to-b from-black to-gray-800  flex flex-col justify-center items-center py-7  text-gray-50 bg-yellow-300 h-screen bg-center bg-cover bg-no-repeat">
      <h1 className="text-3xl py-3 ">Ajout D'une séance </h1>

      <form
        className=" bg-gradient-to-b from-gray-800 to-black  inset-0   rounded-lg  h-auto w-sm
       md:w-xl p-8"
      >
        {/**date */}
        <div className="flex flex-col  py-3">
          <label className="py-2" htmlFor="">
            Date
          </label>
          <input
            className="bg-gray-800 p-3 rounded-lg  "
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        {/**duree */}
        <div className="flex flex-col  py-3">
          <label className="py-2" htmlFor="">
            Durée
          </label>
          <input
            className="bg-gray-800 p-3 rounded-lg "
            name="duree"
            type="number"
            value={formData.duree}
            onChange={handleChange}
          />
        </div>

        {/**Type*/}
        <div className="flex flex-col  py-3">
          <label className="py-2" htmlFor="">
            Type
          </label>
          <input
            className="bg-gray-800 p-3 rounded-lg "
            name="type"
            type="select"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        {/**note*/}
        <div className="flex flex-col  py-3">
          <label className="py-2" htmlFor="">
            Note
          </label>
          <input
            className="bg-gray-800 p-3 rounded-lg "
            name="note"
            type="number"
            value={formData.note}
            onChange={handleChange}
          />
        </div>

        {/**sSoumission reussi */}
        <div className="flex flex-col  py-3">
          <label className="py-2" htmlFor="">
            Soumission{" "}
          </label>
          <input
            className="bg-gray-800 p-3 rounded-lg "
            name="soumissionsReussies"
            type="textarea"
            value={formData.soumissionsReussies}
            onChange={handleChange}
          />
        </div>
        <div className="py-3 text-center">
          <button onClick={handleSubmit} className="rounded-lg p-2 bg-red-700">
            Ajouter la séeance
          </button>
        </div>
      </form>
      {showModal && modalConfirmation()}
    </div>
  );
};

export default AddSession;
