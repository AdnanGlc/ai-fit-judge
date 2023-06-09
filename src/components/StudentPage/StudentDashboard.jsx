import React, { useState } from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import ZadatakContent from "./ZadatakContent";
import { Zadaci } from "../database/PostavkaZadataka";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import {useAtom} from 'jotai';

const defaultCode = `
#include<iostream>
using namespace std;
int main()
{
  cout<<"Hello world";
  return 0;
}
`;

const StudentDashboard = () => {
  //AI api configuration
  const configuration = new Configuration({
    //apiKey: `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`,
  });
  const openai = new OpenAIApi(configuration);
  const [zadatakIndex, setZadatakIndex] = useState(0);
  //----------------------------------------------//
  const [zadaci,setZadaci] = useAtom(Zadaci);
  const [code, setCode] = useState("");
  const [rezultati, setRezultati] = useState(["", "", ""]);
  const [sviRezultati, setSviRezultati] = useState(
    new Array(Zadaci.length).fill(["", "", ""])
  );
  console.log(zadaci)

  const [brojIspravnih, setBrojIspravnih] = useState(0);
  const [colors, setColors] = useState(
    new Array(zadaci.length).fill([
      "rgb(255,255,255)",
      "rgb(255,255,255)",
      "rgb(255,255,255)",
    ])
  );
  const [kodovi, setKodovi] = useState(
    new Array(zadaci.length).fill(defaultCode)
  );
  const [prikazContent, setPrikazContent] = useState(zadaci[0].tekstZadatka);
  //-------funckije-------------------------------//
  const saveCodeChange = (value) => {
    let tempKodovi = kodovi;
    tempKodovi[zadatakIndex] = value;
    setKodovi(tempKodovi);
    setCode(value); //ne radi dok se ne napravi neka promjena na kodu
  };
  const promijeniPrikaz = (p) => {
    if (p === "tekstZadatka")
      setPrikazContent(zadaci[zadatakIndex].tekstZadatka || "");
    else setPrikazContent(zadaci[zadatakIndex].usloviZadatka || "");
  };
  //-----------------kompajliranje----------------//
  //c++ kompajliranje
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
      return response.data.program_output;
    } catch (error) {
      console.error(error);
      return "Compilation error";
    }
  };
  //AI testing
  const generateResponse = async (newQuestion) => {
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
    };

    let completeOptions = {
      ...options,
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(completeOptions);
    console.log(response.data.choices[0].text);
    if (response.data.choices)
      if (response.data.choices[0].text.toLocaleLowerCase().includes("da"))
        return true;
    return false;
  };
  //testiranje koda
  async function testCode() {
    setIsCompiling(true);
    setRezultati([]);
    const results = rezultati;
    if (zadaci[zadatakIndex].podudarnost === "identicna") {
      const testCases = zadaci[zadatakIndex].skriveniTestPrimjeri;
      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const result = await compileCode(testCase.ulaz);
        results[i] = result;
      }
      setRezultati(results);
    }
    if (zadaci[zadatakIndex].podudarnost === "ispravna") {
      const tacanZadatak = await generateResponse(
        `Odgovori sa da ili ne i obrazlozi u maksimalno 10 rijeci c++ kod,da li kod ispunjava uslove zadatka i da li je kod ispravan, i da li je sintaksa ispravna,
ako ima bilo koja greska oznaci ga kao netacnog,\n
zadatak:${zadaci[zadatakIndex].tekstZadatka}\nkod:${code}\nuslovi:${zadaci[zadatakIndex].usloviZadatka}
\nUkoliko bilo koji uslov nije ispunjen odgovri sa "Ne" i obrazlozi u maksimalno 10 rijeci`
      );
      if (tacanZadatak === true) {
        results[0] = zadaci[zadatakIndex].skriveniTestPrimjeri[0].izlaz;
        results[1] = zadaci[zadatakIndex].skriveniTestPrimjeri[1].izlaz;
        results[2] = zadaci[zadatakIndex].skriveniTestPrimjeri[2].izlaz;
      }
      setRezultati(results);
    }
    //daljnje postavljanje tacnosti
    let tempSviRezultati = sviRezultati;
    tempSviRezultati[zadatakIndex] = results;
    //hard kodiranje boja i broja ispravnih
    let tempAllColors = colors,
      tempColors = [],
      tempBrISpravnih = brojIspravnih;
    if (results[0] === zadaci[zadatakIndex].skriveniTestPrimjeri[0].izlaz) {
      tempColors.push("#2bc016");
      tempBrISpravnih++;
    } else tempColors.push("#ea2b1f");
    if (results[1] === zadaci[zadatakIndex].skriveniTestPrimjeri[1].izlaz) {
      tempColors.push("#2bc016");
      tempBrISpravnih++;
    } else tempColors.push("#ea2b1f");
    if (results[2] === zadaci[zadatakIndex].skriveniTestPrimjeri[2].izlaz) {
      tempColors.push("#2bc016");
      tempBrISpravnih++;
    } else tempColors.push("#ea2b1f");
    setBrojIspravnih(tempBrISpravnih);
    tempAllColors[zadatakIndex] = tempColors;
    setColors(tempAllColors);
    //
    setSviRezultati(tempSviRezultati);
    setRezultati(["", "", ""]);
    setIsCompiling(false);
  }

  //-------- filtriraje -------------//
  const filterZadatke = (searchString) => {
    let tempZadaci = (zadaci || []).filter((zadatak) => {
      return zadatak.imeZadatka
        .toLocaleLowerCase()
        .includes(searchString.toLocaleLowerCase());
    });
    console.log(tempZadaci);
  };
  //---------- use effect --------------//
  const promijeniZadatak = (index) => {
    setPrikazContent(zadaci[index].tekstZadatka);
    setZadatakIndex(index);
    setCode(kodovi[index]);
    setRezultati(sviRezultati[index]);
  };
  return (
    <div className="bg-white flex font-mono">

      <ZadaciSidebar
        Zadaci={zadaci}
        promijeniZadatak={promijeniZadatak}
        zadatakIndex={zadatakIndex}
        filterZadatke={filterZadatke}
        colors={colors}
        brojIspravnih={brojIspravnih}
      />
      <ZadatakContent
        Zadaci={zadaci}
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
