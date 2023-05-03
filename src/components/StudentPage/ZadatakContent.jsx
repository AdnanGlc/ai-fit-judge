import React from "react";

const ZadatakContent = () => {
  return (
    <div className="w-[75%] bg-white h-[85%] pt-4 m-5 rounded-md flex flex-wrap overflow-hidden">
      <h3 className="w-full text-center text-xl">Zadatak 2</h3>
      {/*---------------CODE EDITOR--------------- */}
      <div className="bg-slate-100 m-[1%] w-[30%] p-2 h-[88%] overflow-hidden">
        <p className="pl-2">Kod zadatka:</p>
        <textarea
          placeholder="Ovdje postavite kod zadatka"
          className="w-full h-[83%] p-1"
        ></textarea>
        <button className="w-full bg-blue-100 border-2 border-slate-500 hover:opacity-70">
          Testiraj kod
        </button>
        {/* ............rezultati............ */}
        <div className="w-full h-[5%] bg-white mt-3  flex">
          <div className="border-2 border-slate-500 h-full w-1/3 text-center bg-green-500">
            test primjer 1
          </div>
          <div className="border-2 border-slate-500 h-full w-1/3 text-center bg-green-500">
            test prijer 2
          </div>
          <div className="border-2 border-slate-500 h-full w-1/3 text-center bg-red-500">
            test prijer 3
          </div>
        </div>
      </div>
      {/* ---------------TEKST I POSTAVKA ZADATKA--------------- */}
      <div className="w-[65%] bg-blue-100 h-[88%] m-3">
        <button className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-70 hover:bg-blue-200">
          Tekst zadatka
        </button>
        <button className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-70 hover:bg-blue-200">
          Uslovi zadatka
        </button>
        <button className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-70 hover:bg-blue-200">
          Slike
        </button>
        <textarea
          readOnly={true}
          className="ml-[1%] w-[98%] h-[54%]"
        ></textarea>
        {/* ..............Test primjeri.............. */}
        <div>
          <button className="ml-[1%] bg-blue-500 p-1 rounded-md">
            Prethodni test primjer
          </button>
          <button className="ml-[1%] bg-blue-500 p-1 rounded-md">
            Slijedeci test primjer
          </button>
          <p className="pl-[1%]">Ulazni podaci:</p>
          <textarea
            readOnly={true}
            className="w-[98%] m-1  bg-blue-200 rounded-md"
          ></textarea>
          <p className="pl-[1%]">Izlaz:</p>
          <textarea
            readOnly={true}
            className="w-[98%] m-1 bg-blue-200 rounded-md"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ZadatakContent;
