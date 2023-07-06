import React from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import { FaPhone } from "react-icons/fa";

function Aviakassa({ data: { title, desc, link } }: any) {
  const router = useRouter();
  return (
    <div className="Aviakassa text-center flex items-center">
      <div className="container">
        <h2 className="text-5xl mb-4 max-md:text-3xl">{title}</h2>
        <h3 className="text-3xl mb-4 max-md:text-xl">{desc}</h3>

        <div
          className="inline-flex items-center gap-2 text-xl bg-Secondary-0 py-3 px-5 rounded-md hover:bg-[white] hover:text-Secondary-0 max-md:text-sm cursor-pointer"
          onClick={() => {
            router.push("/contact");
          }}
        >
          {link}
          <FaPhone />
        </div>
      </div>
    </div>
  );
}

export default Aviakassa;
