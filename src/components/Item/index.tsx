"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { LangContext } from "@/app/context/store";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.svg";
import Image from "next/image";

function Item() {
  window.scrollTo(0, 0);
  const [data, setData]: any = useState(null);
  const pathname = usePathname();

  const [area, id] = pathname.slice(1).split("/");

  const {
    state: { content },
  }: any = useContext(LangContext);

  useEffect(() => {
    const itemData = content[`${area}`].filter((item: any) => {
      return item.id === Number(id);
    });
    setData(itemData[0]);
  }, [content]);
  if (data) {
    return (
      <main className="py-8">
        <div className="container">
          <div className="images-wrapper grid grid-rows-2 grid-cols-3 gap-4 max-lg:grid-rows-3 max-lg:grid-cols-4">
            <div className="tours-item shadow-md text-center hover:shadow-xl relative col-start-1 col-end-3 row-span-2 max-lg:col-end-5 overflow-hidden ">
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
                className="object-cover w-[100%] max-md:h-[400px] h-[516px] hover:scale-125 transition duration-1000 ease-in-out"
                src={data.images[0]}
                alt="photo"
              />
            </div>
            <div className="tours-item shadow-md text-center hover:shadow-xl relative col-start-3 row-span-1 max-lg:col-start-1 max-lg:col-end-3 overflow-hidden">
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
                className="object-cover w-[100%] max-md:h-[192px] h-[250px] hover:scale-125 transition duration-1000 ease-in-out"
                src={data.images[1]}
                alt="photo"
              />
            </div>
            <div className="tours-item shadow-md text-center hover:shadow-xl relative col-start-3 row-span-0 max-lg:col-start-3 max-lg:col-end-5 overflow-hidden">
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
                className="object-cover w-[100%] max-md:h-[192px] h-[250px] hover:scale-125 transition duration-1000 ease-in-out"
                src={data.images[2]}
                alt="photo"
              />
            </div>
          </div>
          <h1 className="text-center my-8 text-3xl text-Primary-0">
            {data.name}
          </h1>
          <div>
            <p className="indent-10 text-[#555] text-justify font-Belanosima font-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              rem sint! Sint, incidunt ipsam exercitationem amet quaerat maxime
              possimus fugiat praesentium quo itaque ut esse nulla mollitia
              iure, ullam, unde nostrum nam modi quisquam iusto id dolor? Quasi
              adipisci accusamus fugiat magni accusantium labore? Nesciunt
              nostrum, saepe libero dolor error maxime quaerat id? Voluptates
              consectetur a ipsa sequi pariatur quae sed voluptatem neque ea.
              Error, tenetur alias incidunt magnam corrupti minus molestiae
              voluptate, mollitia ratione possimus sapiente neque ad rem
              blanditiis. Fuga non nihil quisquam accusantium animi provident
              dolorem quaerat ipsa voluptatum magni molestias minus excepturi,
              doloribus dicta in accusamus enim deleniti? Alias iusto fuga
              reiciendis quidem natus adipisci nobis, velit, repellat explicabo
              animi ab ducimus, nam repudiandae. Nihil, magni. Reprehenderit
              iusto dolorem dolor. Illo natus tenetur accusantium aperiam omnis
              eum rerum vel impedit, quidem corporis nesciunt nemo veniam qui
              quisquam amet numquam, molestias in alias magnam molestiae!
              Incidunt perferendis maxime sit, quia iure velit magni saepe
              voluptas, temporibus nesciunt minus eaque illum nobis. Voluptate
              molestiae officiis facilis. Accusantium rem, magni autem incidunt,
              quasi asperiores quos vel at repudiandae magnam cupiditate minus
              similique expedita nobis. Hic molestias officiis numquam fugit
              blanditiis harum facere cum voluptatem magni dolore expedita ea
              similique tempora maxime sapiente veritatis temporibus, beatae
              labore sit quaerat dignissimos dolores illum. Dolor, iusto labore
              neque tenetur voluptatem harum explicabo beatae delectus dicta
              quas error. A aliquam corrupti nisi tenetur eius illum, ab
              distinctio, perferendis enim fuga nulla similique omnis iste
              ullam, facere autem ad libero nobis ex nemo quisquam illo eaque
              perspiciatis cupiditate. Quis sed quas facere, nam aut,
              consectetur vitae natus veniam, laboriosam blanditiis mollitia
              nemo dolorum! Itaque maxime consectetur, similique quae velit
              veniam dolor cum dicta fugiat minima aperiam eligendi? Aspernatur
              nisi iste pariatur saepe omnis molestias explicabo enim nobis
              officiis quae dicta quas deserunt, minus inventore nulla fugiat
              labore. Ab esse et necessitatibus enim incidunt unde dolore itaque
              dolor laborum placeat doloremque voluptatum alias labore
              accusamus, laboriosam, eligendi nisi. Cupiditate nihil officia
              beatae laudantium corporis fugiat temporibus! Accusamus eveniet
              tempore voluptatem laborum ipsam repellat adipisci id consequuntur
              perferendis asperiores nihil inventore rerum voluptates error,
              magnam mollitia dolorem excepturi officia optio doloremque.
              Nostrum molestias quod quasi nobis, perferendis velit impedit
              quibusdam veritatis explicabo quidem ducimus temporibus animi hic
              eos quo id. Neque alias eos ea eius eveniet ab minima magni
              consequatur laborum, unde, ipsam quibusdam quis voluptas. Nam vel
              tenetur libero voluptas quasi voluptatibus dicta porro nulla?
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Item;
