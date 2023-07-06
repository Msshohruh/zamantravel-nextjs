import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
function About({ data: { title, desc } }: any) {
  return (
    <div className="bg-Secondary-0 py-10" id="about">
      <div className="container" style={{ backgroundSize: "200px" }}>
        <h2 className="text-[#feb101] text-center text-3xl mb-6">{title}</h2>
        <div className="w-full flex flex-col-reverse items-center justify-center gap-10 lg:flex-row">
          <p className="w-1/2 max-lg:w-full max-lg:text-center max-sm:text-xl text-left text-[#fff] indent-8 text-3xl tracking-wider font-Belanosima">
            {desc}
          </p>
          <Image
            className="rotate-[30deg] max-lg:hidden"
            src={logo}
            alt="site logo"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
