import { Editor } from "@monaco-editor/react";
import React from "react";
import { Zadaci } from "../database/PostavkaZadataka";

const studenti = [];
for (let i = 0; i < 100; i++) {
  studenti.push(
    <tr key={i}>
      <td className="pl-2 border-t-2 w-[20%]" key={-1000 + i}>
        IB: 2200{i < 10 ? "0" : ""}
        {i}
      </td>
      {Zadaci.map((zadatak, j) => {
        return (
          <td className="text-center border-2" key={123123 + j}>
            <button className="w-full hover:bg-[#3C6E71] hover:text-white">
              {Math.floor(Math.random() * 100)}
            </button>
          </td>
        );
      })}
    </tr>
  );
}

const ResultsTable = ({ data }) => {
  return (
    <div className="w-full h-[100vh] bg-[#353535] flex flex-wrap space-x-8">
      <h1 className="w-full text-center mb-5 p-5 text-2xl font-bold bg-[#284B63] text-white">
        Tabela rezultata
      </h1>
      <div className="w-[50%]">
        <p className="m-2 text-white">Pretrazi:</p>
        <input className="ml-2"></input>
        <button className="float-right bg-[#284B63] border-2 border-white text-white p-1 mb-2 hover:opacity-90">
          sortiraj po IB/Ukupno bodova
        </button>
        <div className="w-full m-2 h-[86vh] overflow-scroll relative">
          <table className="w-[100%] bg-[#d9d9d9]">
            <thead className="h-12 bg-[#284B63] text-white sticky top-0 z-50">
              <tr>
                <td className="p-2 w-[200px]">Zadaci:</td>
                {Zadaci.map((zadatak) => {
                  return (
                    <td className="p-2 w-[200px] text-center">
                      {zadatak.imeZadatka}
                    </td>
                  );
                })}
              </tr>
            </thead>
            <tbody>{studenti}</tbody>
          </table>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="flex flex-wrap">
          <button
            className="w-32 h-8 z-50 ml-[10%] bg-red-500 
          text-white hover:opacity-80 font-semibold border-2 border-white"
          >
            Ponisti zadatak
          </button>
          <input
            placeholder="Dodaj bodove"
            className="ml-2 pl-2 w-[62%] mb-2 h-8"
            type="number"
            min={-100}
            max={100}
          ></input>
          <button
            className="w-32 h-8 z-50 ml-[calc(100%-160px)] bg-[#284B63] 
          font-semibold text-white hover:opacity-80 border-2 border-white"
          >
            Dodaj
          </button>
        </div>
        <Editor
          language="cpp"
          theme="light"
          defaultValue=" //kod studenata          
          //mogucnost dodavanja bodova ili
          //ponistavanja zadatka ukoliko uslovi nisu ispunjeni
          //kod studenta se ucitava prilikom klika 
          //na bodove zadatka"
          className="h-[600px] w-[90%] p-1 ml-[10%] m-5 bg-[#353535]"
        ></Editor>
        <div></div>
      </div>
    </div>
  );
};

export default ResultsTable;
