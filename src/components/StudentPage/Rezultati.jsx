import React from "react";

const Rezultati = ({ rezultati, skriveniTestPrimjeri }) => {
  let color1 = "rgb(107,114,128)";
  let color2 = color1;
  let color3 = color1;
  if (rezultati[0]) {
    color1 =
      rezultati[0] === skriveniTestPrimjeri[0].izlaz ? "#2bc016" : "#ea2b1f";
  }
  if (rezultati[1]) {
    color2 =
      rezultati[1] === skriveniTestPrimjeri[1].izlaz ? "#2bc016" : "#ea2b1f";
  }
  if (rezultati[2]) {
    color3 =
      rezultati[2] === skriveniTestPrimjeri[2].izlaz ? "#2bc016" : "#ea2b1f";
  }
  return (
    <div className="w-[95%] left-[2.5%] h-[30px] mb-4 flex absolute bottom-[70px]">
      <div
        className="border-white border-2 border-r-0 h-full w-1/3 text-center rounded-l-lg uppercase text-sm pt-1 "
        style={{ backgroundColor: color1 }}
      >
        test primjer 1
      </div>
      <div
        className="border-2 border-white h-full w-1/3 text-center uppercase text-sm pt-1 "
        style={{ backgroundColor: color2 }}
      >
        test primjer 2
      </div>
      <div
        className="border-2 border-white h-full border-l-0 w-1/3 text-center rounded-r-lg uppercase text-sm pt-1"
        style={{ backgroundColor: color3 }}
      >
        test primjer 3
      </div>
    </div>
  );
};

export default Rezultati;
