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
    <div className="bg-white w-[15%] h-[85vh] m-5 rounded-md pl-[1.5%] pt-4 relative flex flex-wrap">
      <p className="pt-8">Zadaci:</p>
      <button className="border-2 border-blue-500 p-[2px] ml-[22%]">
        Add new +
      </button>
      <input
        placeholder="Pretrazi..."
        className="bg-slate-200 rounded-sm pl-3 mt-2 w-[90%] mb-2"
      />
      <ul className="border-slate-500 border-2 w-[90%] rounded-md h-[85%] bg-slate-100">
        {listaZadataka}
      </ul>
    </div>
  );
};
export default ZadaciSidebar;
