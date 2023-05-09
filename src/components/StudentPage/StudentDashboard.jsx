import React, { useState } from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import ZadatakContent from "./ZadatakContent";
import { Zadaci } from "../database/PostavkaZadataka";

const StudentDashboard = () => {
  const [zadatakIndex, setZadatakIndex] = useState(0);
  return (
    <div className="bg-slate-200 w-full h-auto min-h-[101vh] flex flex-wrap">
      <h1 className="w-full text-center text-4xl pt-3">Zadaci</h1>
      <ZadaciSidebar
        Zadaci={Zadaci}
        setZadatakIndex={setZadatakIndex}
        zadatakIndex={zadatakIndex}
      />
      <ZadatakContent Zadaci={Zadaci} zadatakIndex={zadatakIndex} />
    </div>
  );
};

export default StudentDashboard;
