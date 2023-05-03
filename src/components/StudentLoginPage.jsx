import React from "react";
import { Link } from "react-router-dom";

const StudentLoginPage = () => {
  return (
    //container
    <div className="w-full h-screen bg-slate-200">
      {/*-------------- login form --------------*/}
      <div className="w-1/3 h-3/4 inset-0 absolute m-auto bg-white rounded-md">
        <h1 className="w-full text-center mt-10 mb-10 text-xl ">Fit Judge</h1>
        <form className="flex flex-wrap" onSubmit={""}>
          <p className="ml-[5%]">IB:</p>
          <input className="border-black border-2 w-[90%] ml-[5%] mb-7 pl-1 rounded-md" />
          <p className="ml-[5%]">Lozinka:</p>
          <input className="border-black border-2 w-[90%] ml-[5%] mb-7 pl-1 rounded-md" />
          <button
            className="w-[40%] ml-[30%] border-blue-500 border-2 rounded-lg mt-16 text-blue-500 hover:bg-blue-500 hover:text-white "
            type="submit"
          >
            Prijavite se
          </button>
        </form>
        <Link
          to="/student-dashboard"
          className="float-right underline text-blue-500"
        >
          Student dashboard
        </Link>
      </div>
    </div>
  );
};

export default StudentLoginPage;
