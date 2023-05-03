import React from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import ZadatakContent from "./ZadatakContent";

const StudentDashboard = () => {
  return (
    <div className="bg-slate-200 w-full h-auto min-h-[101vh] flex flex-wrap">
      <h1 className="w-full text-center text-4xl pt-3">Zadaci</h1>
      <ZadaciSidebar />
      <ZadatakContent />
    </div>
  );
};

export default StudentDashboard;
