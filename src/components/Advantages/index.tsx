import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { MdOutlineHighQuality } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Advantages({ data }: any) {
  return (
    <div className="Advantages">
      <div className="container text-center">
        <h2 className="text-3xl mb-10 text-Primary-0">{data[3]}</h2>
        <ul className="grid grid-cols-3 gap-4">
          <li className="border-2 rounded-md bg-Secondary-0 text-center flex flex-col items-center p-6 max-sm:p-4">
            <MdOutlineHighQuality className="text-[white] text-center text-9xl mb-4 max-sm:text-6xl" />
            <h3 className="text-2xl max-sm:text-xl">{data[0]}</h3>
          </li>
          <li className="border-2 rounded-md bg-Secondary-0 text-center flex flex-col items-center p-6 max-sm:p-4">
            <GiAirplaneDeparture className="text-[white] text-center text-9xl mb-4 max-sm:text-6xl" />
            <h3 className="text-2xl max-sm:text-xl">{data[1]}</h3>
          </li>
          <li className="border-2 rounded-md bg-Secondary-0 text-center flex flex-col items-center p-6 max-sm:p-4">
            <VscWorkspaceTrusted className="text-[white] text-center text-9xl mb-4 max-sm:text-6xl" />
            <h3 className="text-2xl max-sm:text-xl">{data[2]}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Advantages;
