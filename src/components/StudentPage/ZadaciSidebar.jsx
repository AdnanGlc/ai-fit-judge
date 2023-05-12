import React from "react";
const ZadaciSidebar = ({ Zadaci, setZadatakIndex, zadatakIndex, data }) => {
  let completionColors = new Array(Zadaci.length).fill("rgb(153,163,200)");
  for (let i = 0; i < Zadaci.length; i++) {
    for (let j = 0; j < data[0].kodovi.length; j++) {
      if (Zadaci[i].zadatakID == data[0].kodovi[j].zadatkakID) {
        if (data[0].kodovi[j].tacnost === "0") completionColors[i] = "red";
        else if (data[0].kodovi[j].tacnost === "1")
          completionColors[i] = "green";
        else if (data[0].kodovi[j].tacnost === "2")
          completionColors[i] = "orange";
      }
    }
  }
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
          {Zadaci[i].imeZadatka}
          <div
            className="w-3 h-3 bg-gray-100  mt-[6px] rounded-full absolute right-1 top-0 border-2 border-gray-700"
            style={{ backgroundColor: completionColors[i] }}
          ></div>
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
      {console.log(completionColors)}
      <p>Zadaci:</p>
      <input
        placeholder="Pretrazi..."
        className="bg-slate-200 rounded-sm pl-3 mt-2 w-[90%] mb-2"
        onChange={(e) => filterZadatke(e.target.value)}
      />
      <ul className="border-slate-500 border-2 w-[90%] rounded-md h-[85%] bg-slate-100">
        {listaZadataka}
      </ul>
    </div>
  );
};
export default ZadaciSidebar;
