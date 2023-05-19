import React from "react";

const PostavkaZadatka = () => {
  return (
    <div className="admin-zadaci w-[75%] bg-white h-auto min-h-[85%] pt-4 ml-5  flex flex-wrap">
      <div className="ispit-trajanje ml-[2%] w-[96%] pl-2 pr-2">
        <button className="bg-gray-200">Vidljiv</button>
        <div>
          <p>Vremensko ogranicenje(u sekundama):</p>
          <input value={10} type="number" min={1} max={60} />
        </div>
        <div>
          <p>Vrijeme isteka:</p>
          <input type="datetime-local" />
        </div>
      </div>
      {/* --------------------tekst i uslovi zadatka zadatka-------------------- */}
      <div className="ml-[2%] w-[96%] bg-white h-auto border-slate-500 rounded-md">
        <h2 className="ml-[1%] mt-2 font-bold">Tekst zadatka</h2>
        <textarea className=" bg-slate-100 w-[98%] h-[350px] m-[1%] p-1"></textarea>
        <h2 className="ml-[1%] font-bold">Uslovi zadatka</h2>
        <textarea className="bg-slate-100 w-[98%] h-[150px] m-[1%] p-1"></textarea>
      </div>
      {/* --------------------Kod zadatka, primjeri inputa i outputa--------------------  */}
      <div className=" ml-[2%] w-[96%]   border-2 border-slate-500 rounded-md flex flex-wrap">
        <h2 className="ml-[2%] pt-2 w-[96%] font-bold">Ispravan kod zadatka</h2>
        <textarea
          className="bg-slate-100 w-[100%] h-[550px] m-[1%] p-1"
          placeholder="Ovdje postavite ispravan kod zadatka"
        ></textarea>
      </div>
      {/* .........inputi i outputi......... */}
      <div className="primjeriInputa w-[96%] pl-2 pr-2 ">
        <div className="primjer ">
          <div className="">
            <h3>Primjer inputa 1</h3>
            <textarea placeholder="input 1: npr. 'Unesite n:5'"></textarea>
          </div>
          <div className="">
            <h3>Primjer outputa 1</h3>
            <textarea placeholder="output 1: npr. 'Broj je paran'"></textarea>
          </div>
        </div>

        <div className="primjer ">
          <div className="">
            <h3>Primjer inputa 1</h3>
            <textarea placeholder="input 1: npr. 'Unesite n:5'"></textarea>
          </div>
          <div className="">
            <h3>Primjer outputa 1</h3>
            <textarea
              className="text-white"
              placeholder="output 1: npr. 'Broj je paran'"
            ></textarea>
          </div>
        </div>

        <div className="primjer">
          <div className="">
            <h3>Primjer inputa 1</h3>
            <textarea placeholder="input 1: npr. 'Unesite n:5'"></textarea>
          </div>
          <div className="">
            <h3>Primjer outputa 1</h3>
            <textarea placeholder="output 1: npr. 'Broj je paran'"></textarea>
          </div>
        </div>
      </div>
      <div className="buttons m-[2%] w-[98%] rounded-md flex justify-end p-2">
        <button className="delete text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Obrisi zadatak
        </button>
        <button className="update text-sm px-5 py-2.5 text-white text-center mr-2 mb-2">
          Azuriraj zadatak
        </button>
      </div>
    </div>
  );
};

export default PostavkaZadatka;
