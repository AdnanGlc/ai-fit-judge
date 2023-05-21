import React from "react";
const ZadaciSidebar = ({
  Zadaci,
  promijeniZadatak,
  zadatakIndex,
  colors,
  filterZadatke,
  x,
}) => {
  let completionColors = new Array(Zadaci.length).fill("rgb(153,163,200)");
  for (let i = 0; i < colors.length; i++) {
    if (colors[i][0] === "rgb(107,114,128)") continue;
    if (
      colors[i][0] === "#2bc016" && //tacna sva tri test primjera
      colors[i][0] === colors[i][1] &&
      colors[i][0] === colors[i][2]
    )
      completionColors[i] = "green";
    else if (
      colors[i][0] === "#ea2b1f" && //tacna sva tri test primjera
      colors[i][0] === colors[i][1] &&
      colors[i][0] === colors[i][2]
    )
      completionColors[i] = "red";
    else completionColors[i] = "orange";
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
          onClick={(e) => promijeniZadatak(i)}
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
    <div className="bg-[#3C6E71] w-[15%] h-[94.7vh] m-5 pl-[1.5%] pt-4 rounded-md min-h-[650px]">
      <p className="text-white font-bold">Zadaci:</p>
      <input
        placeholder="Pretrazi..."
        className="bg-white rounded-sm pl-3 mt-2 w-[90%] mb-2 text-[#284B63]"
        onChange={(e) => filterZadatke(e.target.value)}
      />
      <ul className="border-slate-500 border-2 w-[90%] h-[85%] bg-slate-100 overflow-y-scroll">
        {listaZadataka}
      </ul>
      <p className="bg-[#d9d9d9] w-[90%] p-1 text-right">
        Uradjeno: {brojIspravnih}/{Zadaci.length * 3}
      </p>
    </div>
  );
};
export default ZadaciSidebar;
