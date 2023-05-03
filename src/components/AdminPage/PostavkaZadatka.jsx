import React from "react";

const PostavkaZadatka = () => {
  return (
    <div className="w-[75%] bg-white h-auto min-h-[85%] pt-4 m-5 rounded-md flex flex-wrap">
      {/* --------------------tekst i uslovi zadatka zadatka-------------------- */}
      <div className="ml-[2%] w-[96%] bg-blue-100 h-auto border-2 border-slate-500 rounded-md">
        <h2 className="ml-[1%] mt-2">Tekst zadatka</h2>
        <textarea className="bg-slate-100 w-[98%] h-[350px] m-[1%] p-1"></textarea>
        <h2 className="ml-[1%]">Uslovi zadatka</h2>
        <textarea className="bg-slate-100 w-[98%] h-[150px] m-[1%] p-1"></textarea>
      </div>
      {/* --------------------Kod zadatka, primjeri inputa i outputa--------------------  */}
      <div className="ml-[2%] w-[96%] bg-blue-100 mt-2 border-2 border-slate-500 rounded-md flex flex-wrap">
        <h2 className="ml-[2%] pt-2 w-[96%]">Ispravan kod zadatka</h2>
        <textarea
          className="bg-slate-100 w-[38%] h-[550px] m-[1%] p-1"
          placeholder="Ovdje posatvite ispravan kod zadatka"
        ></textarea>
        {/* .........inputi i outputi......... */}
        <div className="w-[58%] m-[1%]">
          {/* ...input div 1... */}
          <div className="p-1 bg-blue-200 border-2 border-slate-500 hover:border-blue-200 focus-within:border-blue-200 rounded-md">
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2">Primjer inputa 1</h3>
              <textarea
                placeholder="input 1: npr. 'Unesite n:5'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
            {/* ...output div... */}
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2">Primjer outputa 1</h3>
              <textarea
                placeholder="output 1: npr. 'Broj je neparan'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
          </div>
          {/* drugi primjer */}
          <div className="p-1 bg-blue-200 border-2  border-slate-500  hover:border-blue-200 focus-within:border-blue-200 rounded-md">
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2">Primjer inputa 2</h3>
              <textarea
                placeholder="input 1: npr. 'Unesite n:5'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
            {/* ...output div... */}
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2">Primjer outputa 2</h3>
              <textarea
                placeholder="output 1: npr. 'Broj je neparan'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
          </div>
          {/* treci div */}
          {/* ...input div... */}
          <div className="p-1 bg-blue-200 border-2 border-slate-500  hover:border-blue-200 focus-within:border-blue-200 rounded-md">
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2">Primjer inputa 3</h3>
              <textarea
                placeholder="input 1: npr. 'Unesite n:5'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
            {/* ...output div... */}
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2">Primjer outputa 3</h3>
              <textarea
                placeholder="output 1: npr. 'Broj je neparan'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
          </div>
        </div>
        {/* kraj inputa i outputa */}
      </div>
      <div className="m-[2%] border-2 border-slate-500 w-[98%] rounded-md flex justify-end p-2">
        <button
          className="border-2 border-black bg-red-500 m-1 p-2 rounded-md font-semibold
        hover:border-red-500 hover:text-red-500 hover:bg-white"
        >
          Obrisi zadatak
        </button>
        <button
          className="border-2 border-slate-400 m-1 p-2 rounded-md font-semibold
         hover:bg-slate-700 hover:text-white hover:border-slate-700"
        >
          Azuriraj zadatak
        </button>
        <button className="border-2 border-green-400 m-1 p-2 rounded-md bg-green-400 text-center font-semibold hover:bg-white hover:text-green-800">
          Dodaj zadatak
        </button>
      </div>
    </div>
  );
};

export default PostavkaZadatka;
