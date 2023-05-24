import React from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import PostavkaZadatka from "./PostavkaZadatka";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="bgw-full h-auto min-h-[100vh] bg-white flex flex-wrap font-mono">
      <h1 className="m-0 w-full text-center text-3xl h-10vh p-2">
        <span class="text-5xl font-extrabold ">ISPIT</span>
      </h1>
      <button
        className="absolute right-[5%] top-6 rounded-md bg-[#353535] px-1 text-white
      hover:bg-white hover:text-[#353535] hover:border-2 hover:border-[#353535]"
      >
        <Link to="/admin-dashboard/results">Tabela</Link>
      </button>
      <ZadaciSidebar />
      <PostavkaZadatka />
    </div>
  );
};

export default AdminDashboard;
