import React from "react";

const Rezultati = ({ rezultati, skriveniTestPrimjeri, colors }) => {
  return (
    <div className="w-[95%] left-[2.5%] h-[30px] mb-4 flex absolute bottom-0">
      <div
        className="border-white border-2 border-r-0 h-full w-1/3 text-center rounded-l-lg uppercase text-[12px] pt-1 "
        style={{ backgroundColor: colors[0] }}
      >
        test primjer 1
      </div>
      <div
        className="border-2 border-white h-full w-1/3 text-center uppercase text-[12px] pt-1 "
        style={{ backgroundColor: colors[1] }}
      >
        test primjer 2
      </div>
      <div
        className="border-2 border-white h-full border-l-0 w-1/3 text-center rounded-r-lg uppercase text-[12px] pt-1"
        style={{ backgroundColor: colors[2] }}
      >
        test primjer 3
      </div>
    </div>
  );
};

export default Rezultati;
