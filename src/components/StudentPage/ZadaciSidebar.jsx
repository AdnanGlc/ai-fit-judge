import React from "react";
const ZadaciSidebar = ({
  Zadaci,
  setZadatakIndex,
  zadatakIndex,
  data,
  filterZadatke,
}) => {
  let completionColors = new Array(Zadaci.length).fill("rgb(153,163,200)");
  for (let i = 0; i < Zadaci.length; i++) {
    for (let j = 0; j < data[0].kodovi.length; j++) {
      if (Zadaci[i].zadatakID === data[0].kodovi[j].zadatkakID) {
        if (data[0].kodovi[j].tacnost === "0") completionColors[i] = "red";
        else if (data[0].kodovi[j].tacnost === "3")
          completionColors[i] = "green";
        else if (
          data[0].kodovi[j].tacnost === "2" ||
          data[0].kodovi[j].tacnost === "1"
        )
          completionColors[i] = "orange";
        else completionColors[i] = "gray";
      }
    }
  }
  const listaZadataka = [];
  for (let i = 0; i < Zadaci.length; i++) {
    listaZadataka.push(
      <li
        className="m-2 flex pl-2 text-white rounded-md hover:opacity-70 relative border-[3px]"
        key={i}
        style={{
          backgroundColor: i === zadatakIndex ? "#284B63" : "#353535",
          border:
            i === zadatakIndex ? "solid 3px #252525" : "solid 3px transparant",
        }}
      >
        <button
          className="w-full relative text-left"
          onClick={() => setZadatakIndex(i)}
        >
          {Zadaci[i].imeZadatka}
          <div
            className="w-3 h-3 bg-gray-100  mt-[6px] rounded-full absolute right-[2px] top-0 border-2 border-gray-700"
            style={{ backgroundColor: completionColors[i] }}
          ></div>
        </button>
      </li>
    );
  }
  return (
    <div className="bg-[#3C6E71] w-[15%] h-[90vh] m-5 pl-[1.5%] pt-4 rounded-md">
      <p className="text-white font-bold">Zadaci:</p>
      <input
        placeholder="Pretrazi..."
        className="bg-white rounded-sm pl-3 mt-2 w-[90%] mb-2 text-[#284B63]"
        onChange={(e) => filterZadatke(e.target.value)}
      />
      <ul className="border-slate-500 border-2 w-[90%] h-[85%] bg-slate-100 overflow-y-scroll">
        {listaZadataka}
      </ul>
    </div>
  );
};
export default ZadaciSidebar;
