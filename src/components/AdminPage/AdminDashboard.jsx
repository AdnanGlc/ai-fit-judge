import React from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import PostavkaZadatka from "./PostavkaZadatka";


const AdminDashboard = () => {
  return (
    <div className="bgw-full h-auto min-h-[101vh] bg-blue-300 flex flex-wrap">
      <h1 className=" m-0 w-full text-center text-4xl p-2"><span class="text-5xl font-extrabold dark:text-black">Admin Page</span></h1>
      <ZadaciSidebar />
      <PostavkaZadatka />
    </div>
  );
};

export default AdminDashboard;