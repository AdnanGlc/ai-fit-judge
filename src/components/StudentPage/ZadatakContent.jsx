import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { BiSun } from "react-icons/bi";
import Rezultati from "./Rezultati";
import "./scrollbarStyle.css";

const ZadatakContent = ({
  Zadaci,
  zadatakIndex,
  testCode,
  rezultati,
  kodovi,
  isCompiling,
  saveCodeChange,
  promijeniPrikaz,
  prikazContent,
  colors,
}) => {
  //-------------- zadaci --------------//
  const [theme, setTheme] = useState("vs-dark");
  const [tpIndex, setTpIndex] = useState(0); //test primer index

  return (
    //container
    <div
      className="w-[75%] bg-[#D9D9D9] pt-4 m-5 border-2 border-[#284B63]
     rounded-md flex flex-wrap h-[90vh] min-h-[750px] min-w-[900px] max-[1537]:min-h-[800px]"
    >
      <h3 className="w-full text-center text-xl h-12 mb-0">
        {Zadaci[zadatakIndex].imeZadatka}
      </h3>
      {/*---------------CODE EDITOR--------------- */}
      <div className="bg-[#3C6E71] m-[1%] w-[30%] p-2 min-w-[350px] relative max-2xl:min-h-[700px] min-h-[628px]">
        <p className="pl-2 text-white font-bold">Kod zadatka:</p>
        <button
          className="absolute right-3 top-2 text-slate-700 bg-white w-6 h-6 text-center rounded-full
          hover:bg-[#353535] hover:text-yellow-400"
          onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
        >
          <BiSun className="ml-1" />
        </button>
        <Editor
          language="cpp"
          theme={theme}
          defaultValue={kodovi[zadatakIndex]}
          onChange={(value) => {
            saveCodeChange(value);
          }}
          value={kodovi[zadatakIndex]}
          className="h-[500px] w-[325px] p-1 "
        />
        <button
          className="w-[95%] left-[2.5%] bg-[#284B63] border-2 border-white text-white font-bold
           rounded-md hover:opacity-95 absolute bottom-[50px]"
          onClick={testCode}
        >
          Testiraj kod
        </button>
        {/* ............rezultati............ */}
        {isCompiling && (
          <p className="bg-[#d9d9d9] w-[328px] h-[100px] absolute top-[428px] left-[11px] pt-8 text-center">
            Kod se kompajlira...
          </p>
        )}
        <Rezultati
          rezultati={rezultati}
          skriveniTestPrimjeri={Zadaci[zadatakIndex].skriveniTestPrimjeri}
          colors={colors}
        ></Rezultati>
      </div>
      {/* ---------------TEKST I POSTAVKA ZADATKA--------------- */}
      <div className="w-[calc(90%-300px)] bg-[#3C6E71] overflow-y-scroll m-3 h-[90%]">
        <button
          className="m-[1%] bg-[#284B63] text-white border-2 border-white font-semibold p-2 rounded-md hover:opacity-80"
          onClick={() => promijeniPrikaz("tekstZadatka")}
        >
          Tekst zadatka
        </button>
        <button
          className="m-[1%] bg-[#284B63] text-white border-2 border-white p-2 font-semibold rounded-md hover:opacity-80 "
          onClick={() => promijeniPrikaz("usloviZadatka")}
        >
          Uslovi zadatka
        </button>
        <button
          className="m-[1%] bg-[#284B63] text-white border-2 border-white font-semibold p-2 rounded-md hover:opacity-80"
          onClick={() => promijeniPrikaz("slika")}
        >
          Slike
        </button>
        <textarea
          readOnly={true}
          value={prikazContent}
          className="ml-[1%] w-[98%] h-[50%] p-2 "
        ></textarea>
        {/* ..............Test primjeri.............. */}
        <div className="mb-0 pb-0">
          <button
            className="ml-[19.5%] bg-[#284B63] text-white border-2 font-bold border-white p-1 rounded-md w-[30%] hover:opacity-90 hover:text-bold"
            onClick={() => setTpIndex((3 + tpIndex - 1) % 3)}
          >
            Prethodni test primjer
          </button>
          <button
            className="ml-[1%] bg-[#284B63] text-white border-2 font-bold border-white p-1 rounded-md w-[30%] hover:opacity-90"
            onClick={() => setTpIndex((tpIndex + 1) % 3)}
          >
            Slijedeci test primjer
          </button>
          <p className="pl-[1%] text-white font-bold">Ulazni podaci:</p>
          <textarea
            readOnly={true}
            value={Zadaci[zadatakIndex].testPrimjeri[tpIndex].ulaz}
            className="w-[98%] m-1 bg-[#d9d9d9] rounded-md p-1 font-mono"
          ></textarea>
          <p className="pl-[1%] text-white font-bold">Izlaz:</p>
          <textarea
            readOnly={true}
            value={Zadaci[zadatakIndex].testPrimjeri[tpIndex].izlaz}
            className="w-[98%] m-1 bg-[#d9d9d9] rounded-md p-1 font-mono"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default ZadatakContent;
