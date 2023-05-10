import React from "react";
import { Link } from "react-router-dom";

const StudentLoginPage = () => {
  return (
    <div className="bg-[url('../src/images/fit-logo2.jpg')] bg-cover min-h-screen bg-slate-200 flex items-center justify-center">
      <div className="bg-white w-96 p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">
          <i className="fa-solid fa-user mr-2"></i>
          FIT Judge
        </h1>
        <form className="space-y-4" onSubmit={""}>
          <div>
            <label htmlFor="ib" className="block mb-1">
              Broj index-a:
            </label>
            <input
              type="text"
              id="ib"
              name="ib"
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Lozinka:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <button
  className="block w-full bg-blue-500 text-white border border-blue-500 rounded-lg mt-6 py-2 transition-colors duration-300 ease-in-out hover:bg-lightBlue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  type="submit"
>
  Prijavite se
</button>

        </form>
        <div className="mt-6 text-right">
          <Link to="/student-dashboard" className="underline text-blue-500">
            Student dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};


export default StudentLoginPage;
