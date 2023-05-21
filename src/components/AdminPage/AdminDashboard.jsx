import React from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import PostavkaZadatka from "./PostavkaZadatka";

const AdminDashboard = () => {
  return (
    <div className="bgw-full h-auto min-h-[100vh] bg-white flex flex-wrap font-mono">
      <h1 className=" m-0 w-full text-center text-3xl h-10vh p-2">
        <span class="text-5xl font-extrabold ">ISPIT</span>
      </h1>
      <ZadaciSidebar />
      <PostavkaZadatka />
    </div>
  );
};

export default AdminDashboard;
