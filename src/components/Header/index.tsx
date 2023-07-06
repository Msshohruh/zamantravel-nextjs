"use client";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import uzb from "../../assets/uzbekistan.png";
import rus from "../../assets/russia.png";
import eng from "../../assets/united-kingdom.png";

type Props = {
  data: any;
  lang: string;
  changeLang: (item: string) => void;
};

function Header({ data, lang, changeLang }: Props) {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  return (
    <div className="header-wrapper">
      <div
        className={
          toggle
            ? "translate-y-[0%] sidebar min-[780px]:hidden flex justify-center pb-6 absolute top-[86px] z-[1] w-[100%] bg-Secondary-0"
            : "translate-y-[-100%] sidebar min-[780px]:hidden flex justify-center pb-6 absolute top-[86px] z-[1] w-[100%] bg-Secondary-0"
        }
      >
        <nav>
          <ul className="flex items-center gap-4 flex-col">
            <div className="dropdown order-1">
              <div className="dropdown-top hover:">
                <div
                  className="hover:text-Primary-0 flex items-center cursor-pointer gap-1"
                  onClick={() => {
                    setDropdown((prev) => !prev);
                  }}
                >
                  {lang == "uz" ? (
                    <>
                      <Image className="w-5" src={uzb} alt="" />
                      O'zbek
                    </>
                  ) : lang == "ru" ? (
                    <>
                      <Image className="w-5" src={rus} alt="" />
                      Русский
                    </>
                  ) : lang == "en" ? (
                    <>
                      <Image className="w-5" src={eng} alt="" />
                      English
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {dropdown && (
                <ul className="absolute rounded-md bg-[white] border-Secondary-0 border-2 text-Secondary-0 z-10 flex cursor-pointer flex-col">
                  <li
                    className="flex items-center gap-1 py-2 w-[120px] px-2 hover:bg-Primary-0 hover:text-[white]"
                    onClick={() => {
                      setDropdown(false);
                      setToggle(false);
                      changeLang("en");
                    }}
                  >
                    <Image className="w-5" src={eng} alt="" />
                    English
                  </li>
                  <li
                    className="flex items-center gap-1 py-2 w-[120px] px-2 hover:bg-Primary-0 hover:text-[white]"
                    onClick={() => {
                      setDropdown(false);
                      setToggle(false);
                      changeLang("uz");
                    }}
                  >
                    <Image className="w-5" src={uzb} alt="" />
                    O'zbek
                  </li>
                  <li
                    className="flex items-center gap-1 py-2 w-[120px] px-2 hover:bg-Primary-0 hover:text-[white]"
                    onClick={() => {
                      setDropdown(false);
                      setToggle(false);
                      changeLang("ru");
                    }}
                  >
                    <Image className="w-5" src={rus} alt="" />
                    Русский
                  </li>
                </ul>
              )}
            </div>
            {data.map(({ title, link }: any, ind: number) => {
              return (
                <li key={title} className="nav-item hover:text-[#feb101]">
                  <Link className="nav-link" href={`/${link}`}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className={`w-full bg-[#2163fd] text-white relative z-[2]`}>
        <div className="container flex gap-4 items-center justify-between py-6 ">
          <div className="site-logo flex items-center hover:text-[#feb101]">
            <Link href="/" className="flex items-center">
              <Image className="mr-1" width={20} src={logo} alt="site logo" />
              <h3 className="leading-4 ">
                zaman <br /> aviatravel
              </h3>
            </Link>
          </div>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="burger-btn cursor-pointer min-[780px]:hidden outline-none"
          >
            {toggle ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineBars className="text-3xl" />
            )}
          </button>
          <nav className="max-[780px]:hidden">
            <ul className="flex items-center gap-8  ">
              <div className="dropdown ">
                <div className="dropdown-top hover:">
                  <div
                    className="hover:text-Primary-0 flex items-center cursor-pointer gap-1"
                    onClick={() => {
                      setDropdown((prev) => !prev);
                    }}
                  >
                    {lang == "uz" ? (
                      <>
                        <Image className="w-5" src={uzb} alt="" />
                        O'zbek
                      </>
                    ) : lang == "ru" ? (
                      <>
                        <Image className="w-5" src={rus} alt="" />
                        Русский
                      </>
                    ) : lang == "en" ? (
                      <>
                        <Image className="w-5" src={eng} alt="" />
                        English
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {dropdown && (
                  <ul className="absolute rounded-md bg-[white] border-Secondary-0 border-2 text-Secondary-0 z-10 flex cursor-pointer flex-col ">
                    <li
                      className="flex items-center gap-1 py-2 w-[120px] px-2 hover:bg-Primary-0 hover:text-[white]"
                      onClick={() => {
                        setDropdown(false);
                        changeLang("en");
                      }}
                    >
                      <Image className="w-5" src={eng} alt="" />
                      English
                    </li>
                    <li
                      className="flex items-center gap-1 py-2 w-[120px] px-2 hover:bg-Primary-0 hover:text-[white]"
                      onClick={() => {
                        setDropdown(false);
                        changeLang("uz");
                      }}
                    >
                      <Image className="w-5" src={uzb} alt="" />
                      O'zbek
                    </li>
                    <li
                      className="flex items-center gap-1 py-2 w-[120px] px-2 hover:bg-Primary-0 hover:text-[white]"
                      onClick={() => {
                        setDropdown(false);
                        changeLang("ru");
                      }}
                    >
                      <Image className="w-5" src={rus} alt="" />
                      Русский
                    </li>
                  </ul>
                )}
              </div>
              {data.map(({ title, link }: any, ind: number) => {
                return (
                  <li key={title} className="nav-item hover:text-[#feb101]">
                    <Link className="nav-link" href={`/${link}`}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
