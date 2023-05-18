import React, { useState } from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import ZadatakContent from "./ZadatakContent";
import { Zadaci } from "../database/PostavkaZadataka";
import axios from "axios";

const defaultCode = `#include<iostream>
using namespace std;
int main()
{
  cout<<"Hello world";
  return 0;
}
`;

const StudentDashboard = () => {
  const [zadatakIndex, setZadatakIndex] = useState(0);
  //----------------------------------------------//
  const [code, setCode] = useState("");
  const [rezultati, setRezultati] = useState(["", "", ""]);
  const [sviRezultati, setSviRezultati] = useState(
    new Array(Zadaci.length).fill(["", "", ""])
  );
  const [brojIspravnih, setBrojIspravnih] = useState(0);
  const [colors, setColors] = useState(
    new Array(Zadaci.length).fill([
      "rgb(107,114,128)",
      "rgb(107,114,128)",
      "rgb(107,114,128)",
    ])
  );
  const [kodovi, setKodovi] = useState(
    new Array(Zadaci.length).fill(defaultCode)
  );
  const [prikazContent, setPrikazContent] = useState(Zadaci[0].tekstZadatka);
  //-------funckije-------------------------------//
  const saveCodeChange = (value) => {
    let tempKodovi = kodovi;
    tempKodovi[zadatakIndex] = value;
    setKodovi(tempKodovi);
    setCode(value); //ne radi dok se ne napravi neka promjena na kodu
  };
  const promijeniPrikaz = (p) => {
    if (p === "tekstZadatka")
      setPrikazContent(Zadaci[zadatakIndex].tekstZadatka || "");
    else setPrikazContent(Zadaci[zadatakIndex].usloviZadatka || "");
  };
  //-----------------kompajliranje----------------//
  const [isCompiling, setIsCompiling] = useState(false);
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
      console.log(response.data.program_output);
      return response.data.program_output;
    } catch (error) {
      console.error(error);
      return "Compilation error";
    }
  };
  async function testCode() {
    setIsCompiling(true);
    setRezultati([]);
    const testCases = Zadaci[zadatakIndex].skriveniTestPrimjeri;
    const results = rezultati;
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      const result = await compileCode(testCase.ulaz);
      results[i] = result;
    }
    setRezultati(results);
    let tempSviRezultati = sviRezultati;
    tempSviRezultati[zadatakIndex] = results;
    //hard kodiranje boja i broja ispravnih
    let tempAllColors = colors,
      tempColors = [],
      tempBrISpravnih = brojIspravnih;
    if (results[0] === Zadaci[zadatakIndex].skriveniTestPrimjeri[0].izlaz) {
      tempColors.push("#2bc016");
      tempBrISpravnih++;
    } else tempColors.push("#ea2b1f");
    if (results[1] === Zadaci[zadatakIndex].skriveniTestPrimjeri[1].izlaz) {
      tempColors.push("#2bc016");
      tempBrISpravnih++;
    } else tempColors.push("#ea2b1f");
    if (results[2] === Zadaci[zadatakIndex].skriveniTestPrimjeri[2].izlaz) {
      tempColors.push("#2bc016");
      tempBrISpravnih++;
    } else tempColors.push("#ea2b1f");
    setBrojIspravnih(tempBrISpravnih);
    tempAllColors[zadatakIndex] = tempColors;
    setColors(tempAllColors);
    //
    setSviRezultati(tempSviRezultati);
    setIsCompiling(false);
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
  //---------- use effect --------------//
  const promijeniZadatak = (index) => {
    setPrikazContent(Zadaci[index].tekstZadatka);
    setZadatakIndex(index);
    setCode(kodovi[index]);
    setRezultati(sviRezultati[index]);
  };
  return (
    <div className="bg-[#353535] w-full h-full min-h-[800px] flex flex-wrap">
      <h1 className="w-full text-center text-4xl pt-3 text-white hover:text-[#284B63]">
        @Memset Ai Judge
      </h1>
      <ZadaciSidebar
        Zadaci={Zadaci}
        promijeniZadatak={promijeniZadatak}
        zadatakIndex={zadatakIndex}
        filterZadatke={filterZadatke}
        colors={colors}
        brojIspravnih={brojIspravnih}
      />
      <ZadatakContent
        Zadaci={Zadaci}
        zadatakIndex={zadatakIndex}
        setCode={setCode}
        kodovi={kodovi}
        saveCodeChange={saveCodeChange}
        isCompiling={isCompiling}
        testCode={testCode}
        prikazContent={prikazContent}
        rezultati={rezultati}
        promijeniPrikaz={promijeniPrikaz}
        colors={colors[zadatakIndex]}
      />
    </div>
  );
};

export default StudentDashboard;
