import React from "react";

const ZadaciSidebar = () => {
  const listaZadataka = [];
  for (let i = 1; i <= 10; i++) {
    listaZadataka.push(
      <li
        className="m-2 flex bg-slate-300 pl-2 rounded-md hover:opacity-70 relative"
        key={i}
      >
        <button className="w-full text-left">Zadatak {i}</button>
      </li>
    );
  }

  return (
    <div className="bg-white w-full md:w-[15%] h-full md:h-[85vh] m-5 rounded-md pl-[1.5%] pt-3 pb-11 relative flex flex-wrap">
      <p className="pt-8 font-bold">Zadaci:</p>
      <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-small rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-6 ml-7 mt-[0.5]">
        Add new +
      </button>
      <input
        placeholder="Pretrazi..."
        className="font-bold bg-slate-200 rounded-md pl-3 mt-1 md:w-[90%] mb-4 border-2 w-full"
      />
      <ul className="border-slate-500 border-2 w-full md:w-[90%] rounded-md h-[85%] bg-slate-100">
        {listaZadataka}
      </ul>
    </div>
  );
};

export default ZadaciSidebar;
