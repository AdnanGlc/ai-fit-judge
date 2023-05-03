import React from "react";
import ZadaciSidebar from "./ZadaciSidebar";
import PostavkaZadatka from "./PostavkaZadatka";

const AdminDashboard = () => {
  return (
    <div className="w-full h-auto min-h-[101vh] bg-blue-100 flex flex-wrap">
      <h1 className="m-0 w-full text-center text-2xl p-2">Admin Page</h1>
      <ZadaciSidebar />
      <PostavkaZadatka />
    </div>
  );
};

export default AdminDashboard;
