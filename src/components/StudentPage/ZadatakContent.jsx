import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { BiSun } from "react-icons/bi";
import axios from "axios";
import Rezultati from "./Rezultati";

const defaultCode = `#include<iostream>
using namespace std;
int main()
{
  cout<<"hello world";
  return 0;
}
`;

const ZadatakContent = ({ Zadaci, zadatakIndex }) => {
  //-------------- zadaci --------------//
  const [theme, setTheme] = useState("light");
  const [code, setCode] = useState(defaultCode);
  const [tpIndex, setTpIndex] = useState(0); //test primer index
  const [prikazContent, setPrikazContent] = useState(
    Zadaci[0].tekstZadatka || ""
  );
  const promijeniPrikaz = (p) => {
    if (p === "tekstZadatka")
      setPrikazContent(Zadaci[zadatakIndex].tekstZadatka || "");
    else setPrikazContent(Zadaci[zadatakIndex].usloviZadatka || "");
  };
  //-----------------kompajliranje----------------//
  const [isCompiling, setIsCompiling] = useState(false);
  const [output, setOutput] = useState("");
  const [rezultati, setRezultati] = useState(["", "", ""]);
  const compileCode = async (input) => {
    try {
      const response = await axios.post(
        "https://wandbox.org/api/compile.json",
        {
          code: code,
          stdin: input,
          compiler: "gcc-head",
          options: "-O2 -std=c++17 --timeout 10",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setOutput(response.data.program_output);
      console.log(response.data.program_output);
      return response.data.program_output;
    } catch (error) {
      console.error(error);
      setOutput("Compilation error");
      return "Compilation error";
    }
  };
  async function testCode() {
    setIsCompiling(true);
    const testCases = Zadaci[zadatakIndex].skriveniTestPrimjeri;
    const results = rezultati;
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      const result = await compileCode(testCase.ulaz);
      results[i] = result;
    }
    setRezultati(results);
    setIsCompiling(false);
  }

  //---------- use effect --------------//
  useEffect(() => {
    promijeniPrikaz("tekstZadatka");
  }, [zadatakIndex]);
  return (
    <div className="w-[75%] bg-white h-auto min-h-[85%] pt-4 m-5 rounded-md flex flex-wrap">
      <h3 className="w-full text-center text-xl">
        {Zadaci[zadatakIndex].imeZadatka}
      </h3>
      {/*---------------CODE EDITOR--------------- */}
      <div className="bg-slate-300 m-[1%] w-[30%] p-2 h-[700px] min-w-[350px] relative">
        <p className="pl-2">Kod zadatka:</p>
        <button
          className="absolute right-3 top-2 text-slate-700 bg-white w-6 h-6 text-center rounded-full
          hover:bg-slate-500 hover:text-yellow-400"
          onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
        >
          <BiSun className="ml-1" />
        </button>
        <Editor
          language="cpp"
          theme={theme}
          defaultValue={defaultCode}
          onChange={(value) => {
            setCode(value);
          }}
          className="h-[500px] w-[325px] p-1 "
        />
        <button
          className="w-[90%] left-[5%] bg-blue-100 border-2 border-slate-500 hover:opacity-70 absolute bottom-28"
          onClick={testCode}
        >
          Testiraj kod
        </button>
        {/* ............rezultati............ */}
        {isCompiling && (
          <p className="bg-blue-200 w-[full] h-[100px] absolute top-[calc(50%-50px)] right-[50%]">
            Kod se kompajlira...
          </p>
        )}
        <Rezultati
          rezultati={rezultati}
          skriveniTestPrimjeri={Zadaci[zadatakIndex].skriveniTestPrimjeri}
        ></Rezultati>
      </div>
      {/* ---------------TEKST I POSTAVKA ZADATKA--------------- */}
      <div className="w-[calc(95%-350px)] bg-slate-200 min-h-[88%] h-auto m-3 max-2xl:w-[calc(90%-330px)]">
        <button
          className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-80 hover:bg-blue-200"
          onClick={() => promijeniPrikaz("tekstZadatka")}
        >
          Tekst zadatka
        </button>
        <button
          className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-80 hover:bg-blue-200"
          onClick={() => promijeniPrikaz("usloviZadatka")}
        >
          Uslovi zadatka
        </button>
        <button
          className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-80 hover:bg-blue-200"
          onClick={() => promijeniPrikaz("slika")}
        >
          Slike
        </button>
        <textarea
          readOnly={true}
          value={prikazContent}
          className="ml-[1%] w-[98%] h-[54%] p-2 "
        ></textarea>
        {/* ..............Test primjeri.............. */}
        <div>
          <button
            className="ml-[19.5%] bg-blue-500 p-1 rounded-md w-[30%] text-white hover:opacity-90 hover:text-bold"
            onClick={() => setTpIndex((3 + tpIndex - 1) % 3)}
          >
            Prethodni test primjer
          </button>
          <button
            className="ml-[1%] bg-blue-500 p-1 rounded-md w-[30%] text-white hover:opacity-90"
            onClick={() => setTpIndex((tpIndex + 1) % 3)}
          >
            Slijedeci test primjer
          </button>
          <p className="pl-[1%]">Ulazni podaci:</p>
          <textarea
            readOnly={true}
            value={Zadaci[zadatakIndex].testPrimjeri[tpIndex].ulaz}
            className="w-[98%] m-1  bg-blue-200 rounded-md"
          ></textarea>
          <p className="pl-[1%]">Izlaz:</p>
          <textarea
            readOnly={true}
            value={Zadaci[zadatakIndex].testPrimjeri[tpIndex].izlaz}
            className="w-[98%] m-1 bg-blue-200 rounded-md"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default ZadatakContent;
