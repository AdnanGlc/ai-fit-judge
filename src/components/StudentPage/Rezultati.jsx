import React from "react";

const Rezultati = ({ rezultati, skriveniTestPrimjeri }) => {
  let color1 = "rgb(107,114,128)";
  let color2 = color1;
  let color3 = color1;
  if (rezultati[0]) {
    color1 =
      rezultati[0] === skriveniTestPrimjeri[0].izlaz
        ? "rgb(74,222,128)"
        : "rgb(248,113,113)";
  }
  if (rezultati[1]) {
    color2 =
      rezultati[1] === skriveniTestPrimjeri[1].izlaz
        ? "rgb(74,222,128)"
        : "rgb(248,113,113)";
  }
  if (rezultati[2]) {
    color3 =
      rezultati[2] === skriveniTestPrimjeri[2].izlaz
        ? "rgb(74,222,128)"
        : "rgb(248,113,113)";
  }
  return (
    <div className="w-[90%] left-[5%] h-[30px] bg-white mt-3 mb-4 flex absolute bottom-14 ">
      <div
        className="border-2 border-slate-700 h-full w-1/3 text-center"
        style={{ backgroundColor: color1 }}
      >
        test primjer 1
      </div>
      <div
        className="border-2 border-slate-700 h-full w-1/3 text-center"
        style={{ backgroundColor: color2 }}
      >
        test prijer 2
      </div>
      <div
        className="border-2 border-slate-700 h-full w-1/3 text-center"
        style={{ backgroundColor: color3 }}
      >
        test prijer 3
      </div>
    </div>
  );
};

export default Rezultati;
