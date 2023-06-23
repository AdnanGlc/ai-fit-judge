import React from "react";
import "./student.css";
import {useAtom} from 'jotai';
import {Zadaci} from '../database/PostavkaZadataka'
const ZadaciSidebar = ({
  promijeniZadatak,
  zadatakIndex,
  colors,
  brojIspravnih,
}) => {
  const [zadaci,setZadaci] = useAtom(Zadaci);
  let completionColors = new Array(zadaci.length).fill("rgb(255,255,255)");
  for (let i = 0; i < colors.length; i++) {
    if (colors[i][0] === "rgb(255,255,255)") continue;
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
  for (let i = 0; i < zadaci.length; i++) {
    listaZadataka.push(
      <li
        className="flex rounded-md font-bold hover:opacity-70 relative border-[3px]"
        key={i}
        style={{
          backgroundColor: i === zadatakIndex ? "#a5a5a5" : "white",
          border: i === zadatakIndex ? "solid white 1px" : "solid #353535 1px",
        }}
      >
        <button
          className="w-full relative text-left"
          onClick={() => promijeniZadatak(i)}
        >
          {zadaci[i].imeZadatka}
          <div
            className=" flag w-3 h-3 mt-[6px] rounded-full absolute right-0 top-0 border-[1px] border-black"
            style={{ backgroundColor: completionColors[i] }}
          ></div>
        </button>
      </li>
    );
  }
  return (
    <div className="student-zadaci bg-[#353535] w-[15%] h-[95vh] mt-5 ml-2 pl-[1.5%] pt-4 rounded-md ">
      <p className="text-white font-bold text-2xl uppercase">Zadaci</p>

      <ul className="border-slate-500 border-2 w-[90%] h-[85%] overflow-y-auto z-10">
        {listaZadataka}
      </ul>
      <div className="img-bcg2 absolute right-[calc(50%-5rem)] bottom-[120px] h-32 w-40 z-0 opacity-95" />
      <p className=" w-[90%] text-center text-white text-lg uppercase font-semibold tracking-wider">
        Uradjeno: {brojIspravnih}/{zadaci.length * 3}
      </p>
    </div>
  );
};
export default ZadaciSidebar;
