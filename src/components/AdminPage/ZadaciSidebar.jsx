import React from "react";
import "./admin.css";
import { MdAddCircle } from "react-icons/md";

const ZadaciSidebar = () => {
  const listaZadataka = [];
  for (let i = 1; i <= 10; i++) {
    listaZadataka.push(
      <li
        className="mt-3 flex bg-white p-1 rounded-md hover:opacity-70 relative"
        key={i}
      >
        <button className="w-full text-left">Zadatak {i}</button>
      </li>
    );
  }

  return (
    <div className="bg-indigo-600	 md:w-[15%] h-full md:h-[85vh] m-5 rounded-md border-1 pt-3 pb-11 flex flex-wrap justify-center">
      <div className="zadaci">
        <p>Zadaci:</p>
        <MdAddCircle className="add"></MdAddCircle>
      </div>
      <input
        placeholder="Pretrazi..."
        className=" bg-white rounded-md pl-3 mt-1 md:w-[90%] p-1 w-full border-none"
      />
      <ul className="border-slate-500 mt-3 w-full md:w-[90%] rounded-md h-[85%]">
        {listaZadataka}
      </ul>
    </div>
  );
};

export default ZadaciSidebar;
