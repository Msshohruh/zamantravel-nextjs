"use client";
import { useContext } from "react";
import { LangContext } from "@/app/context/store";
import Carousel from "../Carousel";
import Tours from "../Tours";
import About from "../About";
import Advantages from "../Advantages";
import Aviakassa from "../Aviakassa";

function Home() {
  const {
    state: {
      content: {
        carousel,
        tours,
        localTours,
        visas,
        about,
        advantages,
        aviakassa,
      },
      images,
      lang,
    },
  }: any = useContext(LangContext);
  return (
    <main>
      <Carousel data={carousel} images={images.carousel} />
      <Tours
        type={"tours"}
        title={
          lang === "uz"
            ? "Dunyo bo'ylab turlar"
            : lang === "ru"
            ? "Туры по всему миру"
            : lang === "en"
            ? "World Tours"
            : ""
        }
        data={tours}
        images={images.tours}
      />
      <About data={about} />
      <Tours
        type={"localTours"}
        title={
          lang === "uz"
            ? "O'zbekiston turlari"
            : lang === "ru"
            ? "Туры по Узбекистану"
            : lang === "en"
            ? "Uzbekistan Tours"
            : ""
        }
        data={localTours}
        images={images.localTours}
      />
      <Advantages data={advantages} />
      <Tours
        type={"visas"}
        title={
          lang === "uz"
            ? "Vizalar"
            : lang === "ru"
            ? "Визы"
            : lang === "en"
            ? "Visas"
            : ""
        }
        data={visas}
        images={images.visas}
      />
      <Aviakassa data={aviakassa} />
    </main>
  );
}

export default Home;
