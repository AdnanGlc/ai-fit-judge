import React from "react";

const PostavkaZadatka = () => {
  return (
    <div className="w-[75%] bg-white h-auto min-h-[85%] pt-4 ml-5 rounded-md flex flex-wrap">
      <div className="ml-[2%] w-[96%] bg-indigo-600 inline-flex p-2 m-2 space-x-20">
        <button className="bg-gray-200">Vidljivost</button>
        <p>Vremensko ogranicenje(u sekundama)</p>
        <input value={10} type="number" min={1} max={60} />
        <p>Vrijme isteka:</p>
        <input type="datetime-local" />
      </div>
      {/* --------------------tekst i uslovi zadatka zadatka-------------------- */}
      <div className="ml-[2%] w-[96%] bg-indigo-600 h-auto border-2 border-slate-500 rounded-md">
        <h2 className="ml-[1%] mt-2 font-bold">Tekst zadatka</h2>
        <textarea className=" bg-slate-100 w-[98%] h-[350px] m-[1%] p-1"></textarea>
        <h2 className="ml-[1%] font-bold">Uslovi zadatka</h2>
        <textarea className="bg-slate-100 w-[98%] h-[150px] m-[1%] p-1"></textarea>
      </div>
      {/* --------------------Kod zadatka, primjeri inputa i outputa--------------------  */}
      <div className="ml-[2%] w-[96%] bg-indigo-600 mt-2 border-2 border-slate-500 rounded-md flex flex-wrap">
        <h2 className="ml-[2%] pt-2 w-[96%] font-bold">Ispravan kod zadatka</h2>
        <textarea
          className="bg-slate-100 w-[38%] h-[550px] m-[1%] p-1"
          placeholder="Ovdje posatvite ispravan kod zadatka"
        ></textarea>
        {/* .........inputi i outputi......... */}

        <div className="w-[58%] m-[1%]">
          <button className="bg-slate-300 border-2 space-x-2">
            Identican ispis
          </button>
          <button className="bg-slate-300 border-2 space-x-2">
            Ispravan ispis
          </button>
          <button className="bg-slate-300 border-2 space-x-2">
            Random ispis
          </button>
          {/* ...input div 1... */}
          <div className="p-1 bg-blue-300 border-2 border-slate-500 mt-1 hover:border-blue-200 focus-within:border-blue-200 rounded-md">
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2 font-bold">Primjer inputa 1</h3>
              <textarea
                placeholder="input 1: npr. 'Unesite n:5'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
            {/* ...output div... */}
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2 font-bold">Primjer outputa 1</h3>
              <textarea
                placeholder="output 1: npr. 'Broj je neparan'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
          </div>
          {/* drugi primjer */}
          <div className="p-1 bg-blue-300 border-2  border-slate-500 mt-1 hover:border-blue-200 focus-within:border-blue-200 rounded-md">
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2 font-bold">Primjer inputa 2</h3>
              <textarea
                placeholder="input 1: npr. 'Unesite n:5'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
            {/* ...output div... */}
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2 font-bold">Primjer outputa 2</h3>
              <textarea
                placeholder="output 1: npr. 'Broj je neparan'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
          </div>
          {/* treci div */}
          {/* ...input div... */}
          <div className="p-1 bg-blue-300 border-2 border-slate-500 mt-1 hover:border-blue-200 focus-within:border-blue-200 rounded-md">
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2 font-bold">Primjer inputa 3</h3>
              <textarea
                placeholder="input 1: npr. 'Unesite n:5'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
            {/* ...output div... */}
            <div className="w-[98%] m-[1%] bg-slate-100">
              <h3 className="ml-2 font-bold">Primjer outputa 3</h3>
              <textarea
                placeholder="output 1: npr. 'Broj je neparan'"
                className="m-[1%] w-[98%] p-1"
              ></textarea>
            </div>
          </div>
        </div>
        {/* kraj inputa i outputa */}
      </div>
      <div className="m-[2%]  w-[98%] rounded-md flex justify-end p-2">
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Obrisi zadatak
        </button>
        <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Azuriraj zadatak
        </button>
        <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Dodaj zadatak
        </button>
      </div>
    </div>
  );
};

export default PostavkaZadatka;
