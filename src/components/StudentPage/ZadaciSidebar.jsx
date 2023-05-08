import React from "react";
import { useState } from "react";
const ZadaciSidebar = ({ Zadaci, setZadatakIndex, zadatakIndex }) => {
  const listaZadataka = [];
  for (let i = 0; i < Zadaci.length; i++) {
    listaZadataka.push(
      <li
        className="m-2 flex bg-slate-300 pl-2 rounded-md hover:opacity-70 relative"
        key={i}
        style={{
          backgroundColor:
            i === zadatakIndex ? "rgb(100,116,139)" : "rgb(203,213,250)",
        }}
      >
        <button
          className="w-full relative text-left"
          onClick={() => setZadatakIndex(i)}
        >
          Zadatak {i}
          <div className="w-3 h-3 bg-green-500 mt-[6px] rounded-full absolute right-1 top-0"></div>
        </button>
      </li>
    );
  }
  //-------- filtriraje -------------//
  const filterZadatke = (searchString) => {
    let tempZadaci = (Zadaci || []).filter((zadatak) => {
      return zadatak.imeZadatka
        .toLocaleLowerCase()
        .includes(searchString.toLocaleLowerCase());
    });
    console.log(tempZadaci);
  };
  return (
    <div className="bg-white w-[15%] h-[85vh] m-5 rounded-md pl-[1.5%] pt-4">
      <p>Zadaci:</p>
      <input
        placeholder="Pretrazi..."
        className="bg-slate-200 rounded-sm pl-3 mt-2 w-[90%] mb-2"
        onChange={(e) => filterZadatke(e.target.value)}
      />
      <ul className="border-slate-500 border-2 w-[90%] rounded-md h-[85%] bg-slate-100">
        {/* <li className="m-2 flex space-x-[40%] bg-slate-200 pl-2 rounded-md hover:opacity-70">
          <button>Zadatak 1</button>
          <div className="w-3 h-3 bg-green-500 mt-[6px] rounded-full"></div>
        </li> */}
        {listaZadataka}
      </ul>
    </div>
  );
};
export default ZadaciSidebar;
