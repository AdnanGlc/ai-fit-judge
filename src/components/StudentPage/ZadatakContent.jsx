import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { BiSun } from "react-icons/bi";
import Rezultati from "./Rezultati";
import "./scrollbarStyle.css";
import CompilingLoader from "./isCompilingLoader/CompilingLoader";

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
      className="container w-[70%]  m-5 ]
     rounded-md flex flex-wrap h-[95vh]  min-w-[900px] max-[1537]:min-h-[800px]"
    >
      {/* <h3 className="w-full text-center text-2xl h-12 m-0 p-0 uppercase text-[#3C6E71] tracking-wider">
        {Zadaci[zadatakIndex].imeZadatka}
      </h3> */}
      {/*---------------CODE EDITOR--------------- */}
      <div className="bg-[#3C6E71] h-[100%] ml-3 w-[30%]  min-w-[350px] relative max-2xl:min-h-[600px] min-h-[628px]">
        <p className="pl-2 text-white font-bold text-lg">Kod zadatka</p>
        <button
          className="absolute right-3 top-1 text-slate-700 bg-white w-6 h-6 text-center rounded-full
          hover:bg-[#353535] hover:text-yellow-400"
          onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
        >
          <BiSun className="m-1" />
        </button>
        <Editor
          language="cpp"
          theme={theme}
          defaultValue={kodovi[zadatakIndex]}
          onChange={(value) => {
            saveCodeChange(value);
          }}
          value={kodovi[zadatakIndex]}
          className="h-[80%] w-[325px] p-1 "
        />
        <button
          className="w-[95%] left-[2.5%] bg-white border-2 border-white text-[#3C6E71] uppercase font-bold
           rounded-md absolute bottom-[50px] hover:opacity-70"
          onClick={testCode}
          disabled={isCompiling}
        >
          Testiraj kod
        </button>
        {/* ............rezultati............ */}
        {isCompiling && (
          <div className="bg-[#d9d9d9] w-[calc(100%-8px)] left-1 h-[190px] absolute top-[428px] pt-8 text-center opacity-70">
            <p className="">Kod se kompajlira...</p>
            <CompilingLoader />
          </div>
        )}
        <Rezultati
          rezultati={rezultati}
          skriveniTestPrimjeri={Zadaci[zadatakIndex].skriveniTestPrimjeri}
          colors={colors}
        ></Rezultati>
      </div>
      {/* ---------------TEKST I POSTAVKA ZADATKA--------------- */}
      <div className="zadatak-div w-[calc(90%-300px)] bg-[#3C6E71] overflow-y-auto ml-10 h-[100%] border-2 border-[#3C6E71]">
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
          id="tekst"
          className=" ml-[1%] w-[98%] h-[50%] p-2 border-2 border-white rounded-md"
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
