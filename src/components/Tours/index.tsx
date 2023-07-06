import React from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";

type itemType = {
  name: string;
  id: number;
};

function Tours({ data, title, type, images }: any) {
  return (
    <div className="Tours" id="tours">
      <div className="container">
        <h2 className="tours-title text-Primary-0 text-center text-3xl mb-6">
          {title}
        </h2>
        <ul className="tours-list grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data.map(({ name, id }: itemType, ind: number) => {
            return (
              <li
                key={id}
                className="tours-item shadow-md text-center hover:shadow-xl relative"
              >
                <div className="flex items-center absolute top-3 left-3 text-left">
                  <Image
                    className="mr-1 object-contain"
                    width={20}
                    src={logo}
                    alt="site logo"
                  />
                  <h3 className="leading-4 ">
                    zaman <br /> aviatravel
                  </h3>
                </div>
                <img
                  className="object-cover w-[100%] max-md:h-[250px] h-[300px]"
                  src={images[ind]}
                  alt={name}
                />
                <div className="text-Primary-0 p-4 relative text-2xl">
                  <Link
                    href={`/${type}/${id}`}
                    className="block py-2 relative hover:cursor-pointer"
                    onClick={() => {
                      // router.push(`/${type}/${name}`);
                    }}
                  >
                    <div className="tours-border absolute w-[100%] top-0 left-0 h-[100%] border-2"></div>
                    {name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Tours;
