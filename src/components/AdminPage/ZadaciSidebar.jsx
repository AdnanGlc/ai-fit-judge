import React, { useEffect } from "react";
import "./admin.css";
import { MdAddCircle } from "react-icons/md";
import {Zadaci} from '../database/PostavkaZadataka'
import {odabraniZadatak} from '../database/PostavkaZadataka'
import {useAtom} from 'jotai'

const ZadaciSidebar = () => {
const [zadaci, setZadaci] = useAtom(Zadaci);
const[odabraniZad, setOdabraniZadatak] = useAtom(odabraniZadatak)
useEffect(()=>{
  if(zadaci.length > 0){
setOdabraniZadatak(zadaci[0]);
  }
},[])
  return (
    <div className="sidebar  md:w-[15%] h-full md:h-[85vh] m-5 rounded-md border-1 pt-3 pb-11 flex flex-wrap justify-center">
      <div className="zadaci">
        <p>Zadaci:</p>
        <MdAddCircle 
        className="add"
        onClick={()=>{setZadaci([...zadaci,{
          zadatakID:zadaci.length+1,
          imeZadatka: "",
          tekstZadatka:"",
          usloviZadatka:"",
          slika: "",
          podudarnost: "",
          vidljivost: "Nevidljiv",
          vremenskoOgranicenje: "", //ms
          istekZadatka: "",
          testPrimjeri: [],
          skriveniTestPrimjeri: []
        }
      ])
      }}
        ></MdAddCircle>
      </div>
      <input
        placeholder="Pretrazi..."
        className=" bg-white rounded-md pl-3 mt-1 md:w-[90%] p-1 w-full border-none"
      />
      <ul className="border-slate-500 mt-3 w-full md:w-[90%] rounded-md h-[85%]">
        {zadaci.length == 0 && <h1 className="text-center uppercase text-white">Nema zadataka!</h1>}
        {zadaci.map(zadatak=>{
        return(<li
         
         className={zadatak.zadatakID === odabraniZad.zadatakID ? "mt-3 flex bg-[#991026] text-white p-2 rounded-md hover:opacity-70 relative" : "mt-3 flex bg-white p-2 rounded-md hover:opacity-70 relative"}
         onClick={()=>{
          setOdabraniZadatak(zadatak);
         }}
       >
         {zadatak.imeZadatka}
       </li>)

        })}
      </ul>
    </div>
  );
};

export default ZadaciSidebar;
