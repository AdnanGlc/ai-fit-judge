import React, { useState, useEffect } from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import ZadatakContent from "./ZadatakContent";
import { Zadaci } from "../database/PostavkaZadataka";
import { StudentData } from "../database/StudentData";
import axios from "axios";

/*
colors:
#353535 dark-gray
#3C6E71 light-blue
#D9D9D9 light-gray
#284B63 dark blue

*/
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
  const [data, setData] = useState(StudentData);
  //----------------------------------------------//
  const [code, setCode] = useState("");
  const [rezultati, setRezultati] = useState(["", "", ""]);
  const [sviRezultati, setSviRezultati] = useState(
    new Array(Zadaci.length).fill(["", "", ""])
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
    //update svih rezultata
    let tempSviRezultati = sviRezultati;
    tempSviRezultati[zadatakIndex] = results;
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
  useEffect(() => {
    promijeniPrikaz("tekstZadatka");
    setCode(kodovi[zadatakIndex]);
  }, [zadatakIndex]);
  return (
    <div className="bg-[#353535] w-full h-auto min-h-[101vh] flex flex-wrap">
      <h1 className="w-full text-center text-4xl pt-3 text-white hover:text-[#284B63]">
        @Memset Ai Judge
      </h1>
      <ZadaciSidebar
        Zadaci={Zadaci}
        setZadatakIndex={setZadatakIndex}
        zadatakIndex={zadatakIndex}
        data={data}
        filterZadatke={filterZadatke}
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
        rezultati={sviRezultati[zadatakIndex]}
        promijeniPrikaz={promijeniPrikaz}
      />
    </div>
  );
};

export default StudentDashboard;
